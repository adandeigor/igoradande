"use client";

import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contatc-section";
import ProjectsSection from "@/components/sections/project-section";
import ResumeSection from "@/components/sections/resume-section";
import ServicesSection from "@/components/sections/service-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import WelcomeSection from "@/components/sections/welcome-section";

export default function Home() {
  return (
    <div className="">
      <WelcomeSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ResumeSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
 