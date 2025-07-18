'use client'
import { motion, Variants } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Phone, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { JSX, useState } from 'react';

// Interface for navigation links
interface NavLink {
  name: string;
  href: string;
}

// Interface for social links
interface SocialLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

// Interface for contact information
interface ContactInfo {
  name: string;
  info: string;
  icon: JSX.Element;
}




const Footer = () => {
  const [isHoveredIndex, setIsHoveredIndex] = useState<number | null>(null);
  const [isScrollTopHovered, setIsScrollTopHovered] = useState(false);

  const navLinks: NavLink[] = [
    { name: 'Accueil', href: '#welcome-section' },
    { name: 'À Propos', href: '#about-section' },
    { name: 'Projets', href: '#projects-section' },
    { name: 'Services', href: '#services-section' },
    { name: 'Contact', href: '#contact-section' },
  ];

  const socialLinks: SocialLink[] = [
    { name: 'GitHub', href: 'https://github.com/adandeigor', icon: <Github className="w-5 h-5" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/igor-adande-dev/', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Twitter', href: 'https://x.com/dev_pirate_i_am', icon: <Twitter className="w-5 h-5" /> },
  ];

  const contactInfo: ContactInfo[] = [
    { name: 'E-mail', info: 'contact@igoradande.tech', icon: <Mail className="w-5 h-5" /> },
    { name: 'Téléphone', info: '+229 015 794 0206', icon: <Phone className="w-5 h-5" /> },
  ];

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1, ease: 'easeOut' },
    }),
    key: (index: number) => `item-${index}`,
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand/Description */}
          <motion.div
            custom={0}
            variants={itemVariants as Variants}
            initial="initial"
            animate="animate"
            className="space-y-4"
          >
            <h3 className="text-xl font-jura font-bold text-primary">
              Igor ADANDE
            </h3>
            <p className="text-sm font-montserrat text-gray">
              Développeur Fullstack passionné, spécialisé dans la création d’applications web modernes et performantes.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            custom={1}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            className="space-y-4"
          >
            <h4 className="text-lg font-montserrat font-semibold text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  onHoverStart={() => setIsHoveredIndex(index)}
                  onHoverEnd={() => setIsHoveredIndex(null)}
                >
                  <Link
                    href={link.href}
                    className="text-sm font-montserrat text-gray hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                    <motion.span
                      className="inline-block ml-1"
                      animate={{ x: isHoveredIndex === index ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            custom={2}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            className="space-y-4"
          >
            <h4 className="text-lg font-montserrat font-semibold text-white">
              Suivez-moi
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray hover:text-primary transition-colors duration-300"
                  onHoverStart={() => setIsHoveredIndex(index + navLinks.length)}
                  onHoverEnd={() => setIsHoveredIndex(null)}
                  whileHover={{ scale: 1.2 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            custom={3}
            variants={itemVariants}
            initial="initial"
            animate="animate"
            className="space-y-4"
          >
            <h4 className="text-lg font-montserrat font-semibold text-white">
              Contact
            </h4>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center gap-2 text-sm font-montserrat text-gray">
                  {info.icon}
                  <span>{info.info}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.hr
          className="my-8 border-gray/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />

        {/* Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <motion.p
            className="text-sm font-montserrat text-gray"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            © {new Date().getFullYear()} Igor ADANDE. Tous droits réservés.
          </motion.p>
          <motion.button
            onClick={handleScrollTop}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-montserrat text-sm hover:bg-primary/90 transition-colors duration-300"
            onMouseEnter={() => setIsScrollTopHovered(true)}
            onMouseLeave={() => setIsScrollTopHovered(false)}
            whileHover={{ scale: 1.1 }}
            aria-label="Retour en haut"
          >
            Retour en haut
            <motion.span
              animate={{ y: isScrollTopHovered ? -3 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUp className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;