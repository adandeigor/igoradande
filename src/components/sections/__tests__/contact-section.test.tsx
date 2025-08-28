import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactSection from '../contatc-section'

// Mock fetch
global.fetch = jest.fn()

describe('ContactSection', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the contact form with all fields', () => {
    render(<ContactSection />)
    
    // Vérifier que tous les champs sont présents
    expect(screen.getByLabelText(/Nom/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Sujet/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
    
    // Vérifier que le bouton d'envoi est présent
    expect(screen.getByRole('button', { name: /Envoyer le message/i })).toBeInTheDocument()
  })

  it('validates required fields', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    
    const submitButton = screen.getByRole('button', { name: /Envoyer le message/i })
    
    // Essayer de soumettre sans remplir les champs
    await user.click(submitButton)
    
    // Vérifier que les champs requis sont marqués
    const nameField = screen.getByLabelText(/Nom/i)
    const emailField = screen.getByLabelText(/E-mail/i)
    const subjectField = screen.getByLabelText(/Sujet/i)
    const messageField = screen.getByLabelText(/Message/i)
    
    expect(nameField).toBeRequired()
    expect(emailField).toBeRequired()
    expect(subjectField).toBeRequired()
    expect(messageField).toBeRequired()
  })

  it('submits form successfully', async () => {
    const user = userEvent.setup()
    ;(fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'E-mail envoyé avec succès' }),
    })
    
    render(<ContactSection />)
    
    // Remplir le formulaire
    await user.type(screen.getByLabelText(/Nom/i), 'John Doe')
    await user.type(screen.getByLabelText(/E-mail/i), 'john@example.com')
    await user.type(screen.getByLabelText(/Sujet/i), 'Test Subject')
    await user.type(screen.getByLabelText(/Message/i), 'Test message')
    
    // Soumettre le formulaire
    const submitButton = screen.getByRole('button', { name: /Envoyer le message/i })
    await user.click(submitButton)
    
    // Vérifier que l'API a été appelée
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john@example.com',
          subject: 'Test Subject',
          message: 'Test message',
        }),
      })
    })
    
    // Vérifier le message de succès
    await waitFor(() => {
      expect(screen.getByText(/Message envoyé avec succès/)).toBeInTheDocument()
    })
  })

  it('handles form submission errors', async () => {
    const user = userEvent.setup()
    ;(fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Erreur serveur' }),
    })
    
    render(<ContactSection />)
    
    // Remplir et soumettre le formulaire
    await user.type(screen.getByLabelText(/Nom/i), 'John Doe')
    await user.type(screen.getByLabelText(/E-mail/i), 'john@example.com')
    await user.type(screen.getByLabelText(/Sujet/i), 'Test Subject')
    await user.type(screen.getByLabelText(/Message/i), 'Test message')
    
    const submitButton = screen.getByRole('button', { name: /Envoyer le message/i })
    await user.click(submitButton)
    
    // Vérifier le message d'erreur
    await waitFor(() => {
      expect(screen.getByText(/Erreur : Erreur serveur/)).toBeInTheDocument()
    })
  })

  it('has proper accessibility attributes', () => {
    render(<ContactSection />)
    
    // Vérifier les labels et aria-labels
    expect(screen.getByLabelText(/Nom/i)).toHaveAttribute('name', 'name')
    expect(screen.getByLabelText(/E-mail/i)).toHaveAttribute('name', 'email')
    expect(screen.getByLabelText(/Sujet/i)).toHaveAttribute('name', 'subject')
    expect(screen.getByLabelText(/Message/i)).toHaveAttribute('name', 'message')
    
    // Vérifier que le bouton a le bon type
    const submitButton = screen.getByRole('button', { name: /Envoyer le message/i })
    expect(submitButton).toHaveAttribute('type', 'submit')
  })
})
