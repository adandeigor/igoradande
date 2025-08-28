'use client'
import { motion } from "framer-motion";
import { Code, ArrowRight } from "lucide-react";
import { useState } from "react";

const WelcomeSection = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section 
      className="relative bg-gradient-to-r from-primary/5 via-white to-primary/5 min-h-screen flex items-center justify-center overflow-hidden" 
      id="welcome-section"
      aria-labelledby="welcome-title"
      role="banner"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div
            className="flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            role="status"
            aria-label="Rôle professionnel"
          >
            <Code className="w-6 h-6 text-primary" aria-hidden="true" />
            <span className="text-sm font-montserrat font-medium text-primary">
              Fullstack Developer
            </span>
          </motion.div>

          <h1 
            id="welcome-title"
            className="text-4xl sm:text-5xl md:text-6xl font-jura font-black text-gray-900 leading-tight relative"
          >
            Hello, je suis <span className="text-primary">Igor ADANDE</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl font-montserrat text-gray-600 max-w-3xl mx-auto">
            Je construis des solutions web modernes et performantes, du front-end au back-end, avec une passion pour l&apos;innovation et le design intuitif.
          </p>

          <motion.a
            href="#contact-section"
            className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-montserrat font-semibold text-lg hover:bg-primary/90 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30 focus:ring-offset-2"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Aller à la section contact"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Me contacter
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeSection;