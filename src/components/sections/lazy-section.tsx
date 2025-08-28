'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface LazySectionProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideIn'
  delay?: number
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '50px',
  animation = 'fadeIn',
  delay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Délai pour le lazy loading
          setTimeout(() => setIsLoaded(true), delay)
          observer.disconnect()
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, delay])

  const animations = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: 'easeOut' }
    },
    slideIn: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const selectedAnimation = animations[animation]

  return (
    <div ref={sectionRef} className={className}>
      {isVisible && (
        <motion.div
          {...selectedAnimation}
          initial={isLoaded ? selectedAnimation.initial : { opacity: 0 }}
          animate={isLoaded ? selectedAnimation.animate : { opacity: 0 }}
          transition={isLoaded ? selectedAnimation.transition : { duration: 0 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}

export default LazySection
