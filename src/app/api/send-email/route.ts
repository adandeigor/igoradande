import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Interface pour la réponse
interface ApiResponse {
  message: string;
}

export  async function POST(req: Request) {
 

  const { name, email, subject, message } = await req.json();

  // Validation des champs
  if (!name || !email || !subject || !message) {
    return Response.json({ message: 'Tous les champs sont requis' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ message: 'Adresse e-mail invalide' }, { status: 400 });
  }

  // Configuration du transporteur Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Ou un autre service (par exemple, SendGrid, Outlook)
    auth: {
      user: process.env.EMAIL_USER, // Ton adresse e-mail
      pass: process.env.EMAIL_PASS, // Ton mot de passe ou mot de passe d’application
    },
  });

  // Options de l’e-mail
  const mailOptions = {
    from: `"${name}" <${email}>`, // Expéditeur
    to: process.env.EMAIL_USER, // Ton adresse e-mail
    subject: `Nouveau message de contact : ${subject}`,
    text: `
      Nom: ${name}
      E-mail: ${email}
      Sujet: ${subject}
      Message: ${message}
    `,
    html: `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>E-mail :</strong> ${email}</p>
      <p><strong>Sujet :</strong> ${subject}</p>
      <p><strong>Message :</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ message: 'E-mail envoyé avec succès' }, { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l’envoi de l’e-mail:', error);
    return Response.json(
      { message: 'Erreur lors de l’envoi de l’e-mail. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}