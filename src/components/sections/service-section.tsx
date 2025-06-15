'use client'
import { motion } from 'framer-motion';
import { Code, PenTool, Server, Rocket, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

// Interface pour les services
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  tech: string[];
}

const services: Service[] = [
  {
    title: 'Développement Web Fullstack',
    description: 'Création d’applications web modernes et performantes, du front-end (React, Next.js) au back-end (Laravel, Supabase), avec une attention particulière à la scalabilité et à l’expérience utilisateur.',
    icon: <Code className="w-10 h-10 text-primary" />,
    tech: ['React', 'Next.js', 'Laravel', 'Supabase'],
  },
  {
    title: 'Conception UI/UX',
    description: 'Design d’interfaces intuitives et esthétiques avec Figma, optimisées pour une navigation fluide et une expérience utilisateur exceptionnelle.',
    icon: <PenTool className="w-10 h-10 text-primary" />,
    tech: ['Figma', 'Tailwind', 'CSS'],
  },
  {
    title: 'Intégration d’API & Backend',
    description: 'Développement et intégration d’API REST sécurisées, avec des solutions comme Firebase et Google APIs, pour des fonctionnalités dynamiques et connectées.',
    icon: <Server className="w-10 h-10 text-primary" />,
    tech: ['JavaScript', 'TypeScript', 'Firebase', 'Google APIs'],
  },
  {
    title: 'Optimisation & Maintenance',
    description: 'Amélioration des performances des applications, debugging, et maintenance continue pour garantir une fiabilité et une rapidité optimales.',
    icon: <Rocket className="w-10 h-10 text-primary" />,
    tech: ['Docker', 'Git', 'AWS', 'Vercel'],
  },
];

const ServicesSection = () => {
  const [isHoveredIndex, setIsHoveredIndex] = useState<number | null>(null);

  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2, ease: 'easeOut' },
    }),
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 20px rgba(132, 71, 255, 0.2)',
      transition: { duration: 0.3 },
    },
  };

    // Add a separate state for CTA hover effect

   const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden" id='services-section'>
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-jura font-bold text-dark">
            Mes <span className="text-primary">Services</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl font-montserrat text-gray max-w-2xl mx-auto">
            Des solutions sur-mesure pour transformer vos idées en réalités numériques, avec innovation et précision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="relative bg-white rounded-xl shadow-lg p-6 border border-gray/20"
              onHoverStart={() => setIsHoveredIndex(index)}
              onHoverEnd={() => setIsHoveredIndex(null)}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-montserrat font-semibold text-dark mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm font-montserrat text-gray mb-4">
                {service.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs font-montserrat font-medium rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + techIndex * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-primary/10 opacity-0 rounded-xl"
                animate={{ opacity: isHoveredIndex === index ? 0.3 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          className="text-center mt-12"
        >
          <a
            href="#contact-section"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-montserrat font-semibold text-lg hover:bg-primary/90 transition-colors duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Discutons de votre projet
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;