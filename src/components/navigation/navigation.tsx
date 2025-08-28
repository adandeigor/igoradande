'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import NavigationData, { NavigationItem } from "./data";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
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
                alt="Logo"
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
                className={`text-sm font-montserrat ${
                  item.isActive ? "text-primary font-semibold" : "text-gray-700"
                } hover:text-primary transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.title}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden bg-white fixed top-0 left-0 w-full h-screen z-40 overflow-y-auto"
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                onClick={toggleMenu}
                className="absolute top-4 right-4 p-2 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
              >
                <X size={24} />
              </motion.button>

              <div className="flex flex-col items-center justify-center min-h-screen space-y-6 py-8">
                {NavigationData.map((item: NavigationItem, index: number) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-3 text-lg font-montserrat font-medium ${
                      item.isActive ? "text-primary" : "text-gray-800"
                    } hover:text-primary transition-colors duration-300`}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    onClick={() => setIsOpen(false)}
                  >
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