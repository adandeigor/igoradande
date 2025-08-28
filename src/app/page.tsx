"use client";

import dynamic from 'next/dynamic';
import LazySection from "@/components/sections/lazy-section";

// Import dynamique des sections avec lazy loading
const WelcomeSection = dynamic(() => import("@/components/sections/welcome-section"), {
  loading: () => <div className="min-h-screen bg-gradient-to-r from-primary/5 via-white to-primary/5" />
});

const AboutSection = dynamic(() => import("@/components/sections/about-section"), {
  loading: () => <div className="py-16 sm:py-24 bg-white" />
});

const ProjectsSection = dynamic(() => import("@/components/sections/project-section"), {
  loading: () => <div className="py-16 sm:py-24 bg-white" />
});

const ResumeSection = dynamic(() => import("@/components/sections/resume-section"), {
  loading: () => <div className="py-16 sm:py-24 bg-white" />
});

const ServicesSection = dynamic(() => import("@/components/sections/service-section"), {
  loading: () => <div className="py-16 sm:py-24 bg-white" />
});

const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section"), {
  loading: () => <div className="py-16 sm:py-24 bg-white" />
});

const ContactSection = dynamic(() => import("@/components/sections/contatc-section"), {
  loading: () => <div className="py-16 sm:py-24 bg-white" />
});

export default function Home() {
  return (
    <div className="">
      <LazySection animation="fadeIn" delay={0}>
        <WelcomeSection />
      </LazySection>
      
      <LazySection animation="slideUp" delay={200}>
        <AboutSection />
      </LazySection>
      
      <LazySection animation="slideUp" delay={400}>
        <ProjectsSection />
      </LazySection>
      
      <LazySection animation="slideUp" delay={600}>
        <ResumeSection />
      </LazySection>
      
      <LazySection animation="slideUp" delay={800}>
        <ServicesSection />
      </LazySection>
      
      <LazySection animation="slideUp" delay={1000}>
        <TestimonialsSection />
      </LazySection>
      
      <LazySection animation="slideUp" delay={1200}>
        <ContactSection />
      </LazySection>
    </div>
  );
}
 