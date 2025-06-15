'use client'
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import SkillsSection from '../ui/image';

// Définir les interfaces pour les types
interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tech: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    title: 'Développeur Fullstack',
    company: 'Digital Innovation',
    location: 'Cotonou, Bénin',
    period: 'Jan 2025 - Présent',
    description: 'Développement d’applications web scalables avec React, Next.js et Laravel. Mise en place d’API REST avec Supabase et intégration des Google APIs.',
    tech: ['React', 'Next.js', 'Laravel', 'Supabase', 'Google APIs', '...'],
  },
  {
    title: 'Développeur Fullstack Freelance',
    company: 'Projets Indépendants',
    location: 'Remote',
    period: 'Juin 2023 - Présent',
    description: 'Création de sites web dynamiques pour divers clients, incluant portfolios et plateformes e-commerce. Conception avec Figma et gestion via Git.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Figma', 'Git', "Next JS", 'Laravel', '...'],
  },
  {
    title: 'Stagiaire Développeur Web',
    company: 'InnovTech',
    location: 'Cotonou, Bénin',
    period: 'Avr 2025 - Juin 2025',
    description: 'Participation au développement d’une application de gestion de biens immobiliers. Optimisation des performances et refonte de l’UI.',
    tech: ['Next JS', 'Supabase', 'Tailwind Css', 'TypeScript', 'Prisma', 'Shadcn UI', '...'],
  },
];

const education: Education[] = [
  {
    degree: 'Licence en Analyse Informatique et Programmation',
    institution: 'Université d’Abomey-Calavi - ENEAM',
    location: 'Cotonou, Bénin',
    period: '2023 - Présent',
    description: 'Formation approfondie en développement logiciel, bases de données et gestion de projets informatiques.',
  },
  {
    degree: 'Certification Next JS Avancé',
    institution: 'Udemy',
    location: 'En ligne',
    period: '2024',
    description: 'Maîtrise des concepts avancés de Next JS, notamment la gestion des routes, Prisma et Tailwind CSS pour des applications robustes.',
  },
  {
    degree: 'Auto-formation en Développement Front-end',
    institution: 'Cours en ligne via des plateformes spécialisées',
    location: 'En ligne',
    period: '2023 - 2024',
    description: 'Apprentissage approfondi de JavaScript, React, et CSS à travers des tutoriels avancés (Grafikart, JS Mastery). Réalisation de projets pratiques comme des interfaces utilisateur dynamiques.',
  },
  {
    degree: 'Auto-formation en Développement Back-end',
    institution: 'Cours en ligne via des plateformes spécialisées',
    location: 'En ligne',
    period: '2023 - 2024',
    description: 'Maîtrise de Laravel et PHP via des formations spécialisées (Monkey Coder, Laravel Jutsu). Développement d’API REST et gestion de bases de données avec MySQL.',
  },
];

const skills: string[] = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'Python',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind',
  'Laravel',
  'Git',
  'Figma',
  'Firebase',
  'Supabase',
  'Google APIs',
];

const ResumeSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden" id='resume-section'>
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-jura font-black text-dark">
            Mon <span className="text-primary">Parcours</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl font-montserrat text-gray max-w-2xl mx-auto">
            Un voyage à travers mes expériences, ma formation et mes compétences, guidé par la passion et le perfectionnisme.
          </p>
        </motion.div>

        {/* Experiences */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-jura font-bold text-dark mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-primary" />
            Expériences Professionnelles
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                className="relative bg-white rounded-xl shadow-lg p-6 border border-gray/20 hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-montserrat font-semibold text-dark">
                  {exp.title} chez {exp.company}
                </h4>
                <p className="text-sm font-montserrat text-gray">
                  {exp.location} | {exp.period}
                </p>
                <p className="mt-2 text-sm font-montserrat text-gray">{exp.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-montserrat font-medium rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-jura font-bold text-dark mb-8 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-primary" />
            Formation
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                className="relative bg-white rounded-xl shadow-lg p-6 border border-gray/20 hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-montserrat font-semibold text-dark">
                  {edu.degree}
                </h4>
                <p className="text-sm font-montserrat text-gray">
                  {edu.institution} | {edu.period}
                </p>
                <p className="mt-2 text-sm font-montserrat text-gray">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <SkillsSection/>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <a
            href="#contact-section"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-montserrat font-semibold text-lg hover:bg-primary/90 transition-colors duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Me contacter
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </a>
        </motion.div>
    </section>
  );
};

export default ResumeSection;