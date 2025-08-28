import { LucideIcon } from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
  isActive: boolean;
}

export const navigationData = [
  {
    name: 'home',
    href: '#welcome-section'
  },
  {
    name: 'about',
    href: '#about-section'
  },
  {
    name: 'projects',
    href: '#projects-section'
  },
  {
    name: 'services',
    href: '#services-section'
  },
  {
    name: 'testimonials',
    href: '#testimonials-section'
  },
  {
    name: 'contact',
    href: '#contact-section'
  }
];