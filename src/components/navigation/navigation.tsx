'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavigationData, { NavigationItem } from "./data";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-300" role="navigation" aria-label="Navigation principale">
      {/* Skip link pour l'accessibilité */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row items-center justify-center gap-3"
          >
            <div>
              <Image
                src="/images/logo.png"
                alt="Logo Igor ADANDE"
                width={40}
                height={40}
              />
            </div>
            <span className="text-md md:text-2xl font-jura font-black text-primary">
              Igor ADANDE
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {NavigationData.map((item: NavigationItem, index: number) => (
              <motion.a
                key={index}
                href={item.href}
                className={`text-sm font-montserrat transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded ${
                  item.isActive 
                    ? "text-primary font-semibold" 
                    : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Aller à la section ${item.title}`}
              >
                {item.title}
              </motion.a>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded transition-colors duration-300"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden bg-white dark:bg-gray-900 fixed top-0 left-0 w-full h-screen z-40 overflow-y-auto transition-colors duration-300"
              role="dialog"
              aria-modal="true"
              aria-label="Menu mobile"
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                onClick={toggleMenu}
                className="absolute top-4 right-4 p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
                aria-label="Fermer le menu"
              >
                <X size={24} />
              </motion.button>

              <div className="flex flex-col items-center justify-center min-h-screen space-y-6 py-8">
                {NavigationData.map((item: NavigationItem, index: number) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-3 text-lg font-montserrat font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 rounded px-4 py-2 ${
                      item.isActive 
                        ? "text-primary" 
                        : "text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
                    }`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    onClick={() => setIsOpen(false)}
                    aria-label={`Aller à la section ${item.title}`}
                  >
                    <item.icon className="w-5 h-5" aria-hidden="true" />
                    {item.title}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;