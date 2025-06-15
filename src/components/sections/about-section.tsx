"use client";
import { motion } from "framer-motion";
import { User, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Laravel",
  "Git",
  "Figma",
  "Firebase",
  "Supabase",
  "Google APIs",
  "Vercel",
  "AWS",
  "Docker",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
];

const AboutSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden" id="about-section">
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl"
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-2xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center justify-center h-full gap-8 sm:gap-12 lg:gap-16 text-center">
          {/* Content */}
          <div className="flex flex-col items-center justify-center text-center gap-[30px] md:gap-[50px]">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-5xl font-jura font-black text-dark"
            >
              À propos de <span className="text-primary">Igor ADANDE</span>
            </motion.h2>

            <div className="flex flex-col lg:flex-row items-center text-start gap-12">
              {/* Avatar Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-32 h-32 sm:w-40 sm:h-40 bg-primary/10 rounded-full flex items-center justify-center"
              >
                <Image src={"/images/me.jpg"} alt="Igor ADANDE" width={128} height={128} priority className="rounded-full" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mt-4 text-center md:text-start text-lg sm:text-xl font-montserrat text-gray max-w-2xl mx-auto lg:mx-0"
              >
                Je suis Igor ADANDE, analyste programmeur et développeur
                fullstack. Jeune et passionné par l’innovation, j’aime créer des
                solutions web performantes et esthétiques. Un peu
                perfectionniste, je m’efforce de livrer un travail soigné, du
                front-end au back-end, en mettant l’accent sur la qualité et
                l’expérience utilisateur.
              </motion.p>
            </div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="mt-8 flex flex-wrap justify-center items-center gap-3"
            >
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary text-sm font-montserrat font-medium rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: "#8447ff33" }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#projects-section"
              className="mt-8 inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-montserrat font-semibold text-lg hover:bg-primary/90 transition-colors duration-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Découvrir mes projets
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
