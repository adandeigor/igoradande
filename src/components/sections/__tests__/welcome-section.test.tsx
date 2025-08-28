import { render, screen } from '@testing-library/react'
import WelcomeSection from '../welcome-section'

describe('WelcomeSection', () => {
  it('renders the welcome section with correct content', () => {
    render(<WelcomeSection />)
    
    // Vérifier que le titre principal est présent
    expect(screen.getByText(/Hello, je suis/)).toBeInTheDocument()
    expect(screen.getByText('Igor ADANDE')).toBeInTheDocument()
    
    // Vérifier que le rôle est affiché
    expect(screen.getByText('Fullstack Developer')).toBeInTheDocument()
    
    // Vérifier que la description est présente
    expect(screen.getByText(/Je construis des solutions web modernes/)).toBeInTheDocument()
    
    // Vérifier que le bouton de contact est présent (maintenant un bouton, pas un lien)
    expect(screen.getByRole('button', { name: /Aller à la section contact/i })).toBeInTheDocument()
  })

  it('has correct accessibility attributes', () => {
    render(<WelcomeSection />)
    
    // Vérifier que la section a un ID pour la navigation (maintenant banner, pas region)
    const section = screen.getByRole('banner')
    expect(section).toHaveAttribute('id', 'welcome-section')
    
    // Vérifier que le bouton de contact a un href valide
    const contactButton = screen.getByRole('button', { name: /Aller à la section contact/i })
    expect(contactButton).toHaveAttribute('href', '#contact-section')
  })

  it('has proper semantic structure', () => {
    render(<WelcomeSection />)
    
    // Vérifier la structure des titres
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    
    // Vérifier que le bouton est accessible
    const contactButton = screen.getByRole('button', { name: /Aller à la section contact/i })
    expect(contactButton).toBeInTheDocument()
  })
})
