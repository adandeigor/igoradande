export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validateName(name: string): boolean {
  return name.trim().length >= 2 && name.trim().length <= 100
}

export function validateSubject(subject: string): boolean {
  return subject.trim().length >= 5 && subject.trim().length <= 200
}

export function validateMessage(message: string): boolean {
  return message.trim().length >= 10 && message.trim().length <= 2000
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Supprimer les balises HTML basiques
    .replace(/javascript:/gi, '') // Supprimer les protocoles dangereux
    .replace(/on\w+=/gi, '') // Supprimer les événements JavaScript
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: string[] = []

  // Validation du nom
  if (!data.name) {
    errors.push('Le nom est requis')
  } else if (!validateName(data.name)) {
    errors.push('Le nom doit contenir entre 2 et 100 caractères')
  }

  // Validation de l'email
  if (!data.email) {
    errors.push('L\'email est requis')
  } else if (!validateEmail(data.email)) {
    errors.push('Format d\'email invalide')
  }

  // Validation du sujet
  if (!data.subject) {
    errors.push('Le sujet est requis')
  } else if (!validateSubject(data.subject)) {
    errors.push('Le sujet doit contenir entre 5 et 200 caractères')
  }

  // Validation du message
  if (!data.message) {
    errors.push('Le message est requis')
  } else if (!validateMessage(data.message)) {
    errors.push('Le message doit contenir entre 10 et 2000 caractères')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

export function sanitizeContactForm(data: ContactFormData): ContactFormData {
  return {
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email).toLowerCase(),
    subject: sanitizeInput(data.subject),
    message: sanitizeInput(data.message)
  }
}

// Validation des headers de sécurité
export function validateSecurityHeaders(req: Request): boolean {
  const userAgent = req.headers.get('user-agent')
  const origin = req.headers.get('origin')

  // Vérifier que la requête vient d'un navigateur valide
  if (!userAgent || userAgent.length < 10) {
    return false
  }

  // Vérifier l'origine si disponible
  if (origin && !origin.includes(process.env.NEXT_PUBLIC_SITE_URL || 'localhost')) {
    return false
  }

  return true
}
