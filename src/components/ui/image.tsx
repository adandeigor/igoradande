'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

// Interface pour les compétences
interface Skill {
  alt: string;
  src: string;
}

// Fonction utilitaire pour générer l'URL des SVG
const srcUrl = (alt: string) => `/svg/${alt}-svgrepo-com.svg`;

// Liste des compétences
const Skills: Skill[] = [
  { alt: 'Bootstrap', src: srcUrl('bootstrap') },
  { alt: 'CSS', src: srcUrl('css-3') },
  { alt: 'Figma', src: srcUrl('figma') },
  { alt: 'Firebase', src: srcUrl('firebase') },
  { alt: 'Github', src: srcUrl('github') },
  { alt: 'HTML', src: srcUrl('html-5') },
  { alt: 'JavaScript', src: srcUrl('js') },
  { alt: 'Laravel', src: srcUrl('laravel') },
  { alt: 'Next Js', src: srcUrl('next-js') },
  { alt: 'PHP', src: srcUrl('php') },
  { alt: 'Python', src: srcUrl('python') },
  { alt: 'React', src: srcUrl('react') },
  { alt: 'Tailwind', src: srcUrl('tailwind') },
  { alt: 'Typescript', src: srcUrl('typescript') },
  { alt: 'Vercel', src: srcUrl('vercel') },
];

// Composant ThemedSvg personnalisé
interface ThemedSvgProps {
  name: string;
  src: string;
  size?: number; // Taille en pixels
  index: number; // Pour décaler les animations
}

const ThemedSvg = ({ name, src, size = 120, index }: ThemedSvgProps) => {
  const blurSize = size; // Taille du conteneur flou
  const clearSize = size / 2; // Taille de l'image claire

  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ width: blurSize, height: blurSize }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        x: [0, 5, -5, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay: index * 0.1 },
        x: { duration: 4, repeat: Infinity, repeatType: 'reverse', delay: index * 0.2 },
        rotate: { duration: 6, repeat: Infinity, repeatType: 'reverse', delay: index * 0.3 },
      }}
      whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(132, 71, 255, 0.3)' }}
    >
      {/* Fond flou avec halo */}
      <div className="absolute inset-0 rounded-full overflow-hidden border border-primary/20">
        <div className="w-full h-full blur-xl">
          <Image
            src={src}
            alt={`Blurred ${name}`}
            fill
            style={{ objectFit: 'cover' }}
            quality={75}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Image claire au centre */}
      <div
        className="relative overflow-hidden"
        style={{ width: clearSize, height: clearSize }}
      >
        <Image
          src={src}
          alt={name}
          fill
          style={{ objectFit: 'contain' }}
          quality={75}
          aria-label={name}
        />
      </div>
    </motion.div>
  );
};

// Composant principal pour la section Compétences
const SkillsSection = () => {

  return (
    <section className="relative bg-transparent py-16 sm:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64  rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96  rounded-full blur-3xl"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-jura font-black text-dark">
            Mes <span className="text-primary">Compétences</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl font-montserrat text-gray max-w-2xl mx-auto">
            Une collection de technologies que je maîtrise pour créer des solutions web modernes et performantes.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {Skills.map((skill, index) => (
            <ThemedSvg
              key={index}
              name={skill.alt}
              src={skill.src}
              size={100}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;