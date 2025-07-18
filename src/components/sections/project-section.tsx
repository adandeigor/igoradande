'use client'
import { motion } from "framer-motion";
import { Code, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Package npm Encrypt-dev",
    description: "Un package npm pour le chiffrement et déchiffrement des variabes d'environnement, facilitant la gestion sécurisée des partages de clés secrets quand plusieurs dev bossent sur un même projet.",
    tech: ["TypeScript", "Node js", "Commander"],
    image: <Code className="w-16 h-16 text-primary" />,
    link: "https://github.com/adandeigor/encrypt-dev",
    github: "https://github.com/adandeigor/encrypt-dev",
  },
  {
    title: "ToolBox Pro",
    description: "Une suite d'outils pour les développeurs, graphistes et personnes lambdas, offrant des fonctionnalités comme la génération de QR codes, la compression d'images sans perte, la conversion de fichiers, et plus encore.",
    tech: ["Vite", "React", "Typescript", "ShadCn UI", "Tailwind CSS"],
    image: <Code className="w-16 h-16 text-primary" />,
    link: "",
    github: "https://github.com/adandeigor/file-flow-dev.git",
  },
  {
    title: "Application de Gestion des bibliothèques et de maketplace de livres",
    description: "Application web de gestion des bibliothèques et de maketplace de livres au Bénin, créer en collaboration avec mon binôme lors des examens de fin d'années en 2ème année. (en cours de développement)",
    tech: ["Next JS", "Supabase", "Typescript", "Prisma"],
    image: <Code className="w-16 h-16 text-primary" />,
    link: "#",
    github: "https://github.com/adandeigor/library.git",
  },
  {
    title : "Benin Event's",
    description : "Application web de publication, promotion, gestion des évènements au Bénin, créer en collaboration avec Digital Innovation. (en cours de développement)",
    tech : ["Next JS", "Supabase", "Typescript", "Prisma", "Shadcn UI", "Framer Motion", "Zod", "Zustand"],
    image :  <Code className="w-16 h-16 text-primary" />,
    link : "#",
    github: "https://github.com/adandeigor/benin-events.git"
  }
];

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardVariants = {
    initial: { opacity: 0, y: 50, rotateX: 10 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" },
    }),
    hover: { 
      scale: 1.05, 
      rotateX: 5, 
      rotateY: 5, 
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden" id="projects-section">
      {/* Background Interactive Elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-jura font-black text-dark">
            Mes <span className="text-primary">Projets</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl font-montserrat text-gray max-w-2xl mx-auto">
            Découvrez mes réalisations, où innovation, précision et passion se rencontrent pour créer des expériences numériques uniques.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray/20"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-primary/5 flex items-center justify-center">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-jura font-bold text-dark">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-montserrat text-gray">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
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

                {/* Links */}
                <motion.div
                  className="mt-4 flex gap-4"
                  animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={project.link}
                    className="flex items-center gap-2 text-primary font-montserrat text-sm hover:underline cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Voir le projet
                  </Link>
                  <Link  
                    href={project.github}
                    className="flex items-center gap-2 text-primary font-montserrat text-sm hover:underline cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Link>
                </motion.div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-primary/10 opacity-0"
                animate={{ opacity: hoveredIndex === index ? 0.3 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;