import { Briefcase, FileText, Folder, Home, Info, LucideIcon, Mail, Star } from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
  isActive: boolean;
}

const NavigationData:NavigationItem[] = [
  {
    title: 'Accueil',
    href: '#welcome-section',
    icon: Home,
    isActive: true,
  },
  {
    title: 'A Propos',
    href: '#about-section',
    icon: Info,
    isActive: false,
  },
  {
    title: 'Projets',
    href: '#projects-section',
    icon: Folder,
    isActive: false,
  },
  {
    title: 'Resume',
    href: '#resume-section',
    icon: FileText,
    isActive: false,
  },
  {
    title: 'Services',
    href: '#services-section',
    icon: Briefcase,
    isActive: false,
  },
  {
    title: 'Témoignages',
    href: '#testimonials-section',
    icon: Star,
    isActive: false,
  },
    {
    title: 'Contact',
    href: '#contact-section',
    icon: Mail,
    isActive: false,
  }
]

export default NavigationData