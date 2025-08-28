'use client'
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/data/projects";
import { getProjectIcon } from "@/utils/project-icons";

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
      scale: 1.02, 
      rotateX: 2, 
      rotateY: 2, 
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Project Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                  {getProjectIcon(project.image)}
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-jura font-bold text-dark group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm font-montserrat text-gray leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-xs font-montserrat text-gray rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Status */}
                <div className="flex items-center gap-2">
                  <span className={`inline-block w-2 h-2 rounded-full ${
                    project.status === 'completed' ? 'bg-green-500' :
                    project.status === 'in-progress' ? 'bg-yellow-500' : 'bg-blue-500'
                  }`} />
                  <span className="text-xs font-montserrat text-gray capitalize">
                    {project.status === 'completed' ? 'Terminé' :
                     project.status === 'in-progress' ? 'En cours' : 'Planifié'}
                  </span>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4 relative z-10">
                  {project.link && project.link !== "#" && project.link !== "" ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 text-sm font-montserrat"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Voir le projet
                    </Link>
                  ) : (
                    <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm font-montserrat cursor-not-allowed">
                      <ExternalLink className="w-4 h-4" />
                      {project.status === 'completed' ? 'Démo bientôt' : 'En développement'}
                    </span>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 text-sm font-montserrat"
                    >
                      <Github className="w-4 h-4" />
                      Code source
                    </Link>
                  )}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <Link
            href="https://github.com/adandeigor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors duration-300 font-montserrat font-semibold"
          >
            <Github className="w-5 h-5" />
            Voir tous mes projets sur GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;