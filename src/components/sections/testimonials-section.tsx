'use client'
import { motion } from 'framer-motion';
import { User, Quote, ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Interface pour les témoignages
interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'J’ai eu le plaisir de collaborer avec Igor ADANDE sur un projet chez Digital Innovation. Son sens du détail, sa rigueur technique et surtout sa capacité à résoudre des problèmes complexes avec calme et efficacité ont été un vrai atout pour l’équipe',
    author: 'Hermann Richy',
    title: 'CEO',
    company: 'Digital Innovation',
  }
];

const TestimonialsSection = () => {
  const [isHoveredIndex, setIsHoveredIndex] = useState<number | null>(null);
  const [isCtaHovered, setIsCtaHovered] = useState(false);

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

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden" id="testimonials-section">
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
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
            Ce qu'on dit <span className="text-primary">à propos de moi</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl font-montserrat text-gray max-w-2xl mx-auto">
            Des retours authentiques de ceux qui ont collaboré avec moi sur différents projets.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
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
              {/* Quote Icon */}
              <div className="absolute top-4 left-4 text-primary/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Testimonial Content */}
              <div className="mt-6">
                <p className="text-sm font-montserrat text-gray italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-montserrat font-semibold text-dark">
                      {testimonial.author}
                    </h4>
                    <p className="text-xs font-montserrat text-gray">
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
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
            onMouseEnter={() => setIsCtaHovered(true)}
            onMouseLeave={() => setIsCtaHovered(false)}
          >
            Collaborons ensemble
            <motion.span
              animate={{ x: isCtaHovered ? 5 : 0 }}
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

export default TestimonialsSection;