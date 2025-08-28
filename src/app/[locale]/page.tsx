"use client";
import dynamic from 'next/dynamic';
import LazySection from "@/components/sections/lazy-section";

// Dynamic imports with loading placeholders
const WelcomeSection = dynamic(() => import("@/components/sections/welcome-section"), { 
  loading: () => <div className="min-h-screen bg-gradient-to-r from-primary/5 via-white to-primary/5" /> 
});
const AboutSection = dynamic(() => import("@/components/sections/about-section"), { 
  loading: () => <div className="min-h-screen bg-white" /> 
});
const ProjectSection = dynamic(() => import("@/components/sections/project-section"), { 
  loading: () => <div className="min-h-screen bg-white" /> 
});
const ServiceSection = dynamic(() => import("@/components/sections/service-section"), { 
  loading: () => <div className="min-h-screen bg-gray-50" /> 
});
const TestimonialsSection = dynamic(() => import("@/components/sections/testimonials-section"), { 
  loading: () => <div className="min-h-screen bg-white" /> 
});
const ContactSection = dynamic(() => import("@/components/sections/contatc-section"), { 
  loading: () => <div className="min-h-screen bg-gray-50" /> 
});
const FooterSection = dynamic(() => import("@/components/sections/footer-section"), { 
  loading: () => <div className="min-h-screen bg-dark" /> 
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
        <ProjectSection />
      </LazySection>
      
      <LazySection animation="slideUp" delay={600}>
        <ServiceSection />
      </LazySection>
      
      <LazySection animation="slideUp" delay={800}>
        <TestimonialsSection />
      </LazySection>
      
      <LazySection animation="slideUp" delay={1000}>
        <ContactSection />
      </LazySection>
      
      <LazySection animation="fadeIn" delay={1200}>
        <FooterSection />
      </LazySection>
    </div>
  );
}
