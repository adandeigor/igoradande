import nodemailer from 'nodemailer';
import { rateLimiter, getClientIP } from '@/lib/rate-limiter';
import { validateContactForm, sanitizeContactForm, validateSecurityHeaders, ContactFormData } from '@/lib/validation';

export async function POST(req: Request) {
  try {
    // Validation des headers de sécurité
    if (!validateSecurityHeaders(req)) {
      return Response.json(
        { message: 'Requête non autorisée' },
        { status: 403 }
      );
    }

    // Rate limiting
    const clientIP = getClientIP(req);
    const rateLimitResult = rateLimiter.isAllowed(clientIP);
    
    if (!rateLimitResult.allowed) {
      return Response.json(
        { 
          message: 'Trop de requêtes. Veuillez réessayer plus tard.',
          resetTime: rateLimitResult.resetTime
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
            'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString()
          }
        }
      );
    }

    // Validation du Content-Type
    const contentType = req.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return Response.json(
        { message: 'Content-Type doit être application/json' },
        { status: 400 }
      );
    }

    // Parsing et validation des données
    let formData: ContactFormData;
    try {
      formData = await req.json();
    } catch {
      return Response.json(
        { message: 'Données JSON invalides' },
        { status: 400 }
      );
    }

    // Validation des données
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      return Response.json(
        { 
          message: 'Données invalides',
          errors: validation.errors
        },
        { status: 400 }
      );
    }

    // Sanitisation des données
    const sanitizedData = sanitizeContactForm(formData);

    // Vérification des variables d'environnement
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Variables d\'environnement email manquantes');
      return Response.json(
        { message: 'Erreur de configuration serveur' },
        { status: 500 }
      );
    }

    // Configuration du transporteur Nodemailer avec sécurité renforcée
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: true, // Forcer SSL/TLS
      tls: {
        rejectUnauthorized: true, // Rejeter les certificats non autorisés
      },
    });

    // Options de l'email avec sécurité renforcée
    const mailOptions = {
      from: `"${sanitizedData.name}" <${process.env.EMAIL_USER}>`, // Utiliser l'email du serveur comme expéditeur
      replyTo: sanitizedData.email, // Email de réponse pour le contact
      to: process.env.EMAIL_USER,
      subject: `[Portfolio] ${sanitizedData.subject}`,
      text: `
        Nouveau message de contact depuis le portfolio

        Nom: ${sanitizedData.name}
        E-mail: ${sanitizedData.email}
        Sujet: ${sanitizedData.subject}
        Date: ${new Date().toLocaleString('fr-FR')}
        IP: ${clientIP}

        Message:
        ${sanitizedData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8447ff;">Nouveau message de contact</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom :</strong> ${sanitizedData.name}</p>
            <p><strong>E-mail :</strong> <a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></p>
            <p><strong>Sujet :</strong> ${sanitizedData.subject}</p>
            <p><strong>Date :</strong> ${new Date().toLocaleString('fr-FR')}</p>
            <p><strong>IP :</strong> ${clientIP}</p>
          </div>
          <div style="background-color: white; padding: 20px; border-left: 4px solid #8447ff;">
            <h3>Message :</h3>
            <p style="white-space: pre-wrap;">${sanitizedData.message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    // Log de succès (sans données sensibles)
    console.log(`Email envoyé avec succès depuis ${clientIP} pour ${sanitizedData.name}`);

    return Response.json(
      { 
        message: 'E-mail envoyé avec succès',
        remaining: rateLimitResult.remaining
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': rateLimitResult.resetTime.toString()
        }
      }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    return Response.json(
      { 
        message: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer plus tard.',
        error: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      },
      { status: 500 }
    );
  }
}