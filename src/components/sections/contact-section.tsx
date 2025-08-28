'use client'
import { motion } from 'framer-motion';
import {  Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage('Message envoyé avec succès ! Je vous répondrai bientôt.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setResponseMessage(`Erreur : ${result.message}`);
      }
    } catch {
      setResponseMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: index * 0.1, ease: 'easeOut' },
    }),
  };

  return (
    <section className="relative bg-white py-16 sm:py-24 overflow-hidden" id='contact-section'>
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
            Prenons <span className="text-primary">Contact</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl font-montserrat text-gray max-w-2xl mx-auto">
            Vous avez un projet en tête ? Envoyez-moi un message, et discutons de la manière dont je peux vous aider à le réaliser.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray/20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div custom={0} variants={inputVariants} initial="initial" animate="animate">
              <label htmlFor="name" className="block text-sm font-montserrat font-medium text-dark">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray/30 rounded-md focus:ring-2 focus:ring-primary focus:outline-none font-montserrat text-dark"
                placeholder="Votre nom"
              />
            </motion.div>

            <motion.div custom={1} variants={inputVariants} initial="initial" animate="animate">
              <label htmlFor="email" className="block text-sm font-montserrat font-medium text-dark">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray/30 rounded-md focus:ring-2 focus:ring-primary focus:outline-none font-montserrat text-dark"
                placeholder="votre.email@exemple.com"
              />
            </motion.div>

            <motion.div custom={2} variants={inputVariants} initial="initial" animate="animate">
              <label htmlFor="subject" className="block text-sm font-montserrat font-medium text-dark">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border border-gray/30 rounded-md focus:ring-2 focus:ring-primary focus:outline-none font-montserrat text-dark"
                placeholder="Objet de votre message"
              />
            </motion.div>

            <motion.div custom={3} variants={inputVariants} initial="initial" animate="animate">
              <label htmlFor="message" className="block text-sm font-montserrat font-medium text-dark">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-1 w-full px-4 py-2 border border-gray/30 rounded-md focus:ring-2 focus:ring-primary focus:outline-none font-montserrat text-dark"
                placeholder="Décrivez votre projet ou posez votre question..."
              />
            </motion.div>

            <motion.div
              custom={4}
              variants={inputVariants}
              initial="initial"
              animate="animate"
              className="text-center"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-montserrat font-semibold text-lg transition-colors duration-300 ${
                  isSubmitting
                    ? 'bg-gray/50 text-gray cursor-not-allowed'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
                onMouseEnter={() => !isSubmitting && setIsCtaHovered(true)}
                onMouseLeave={() => setIsCtaHovered(false)}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                <motion.span
                  animate={{ x: isCtaHovered && !isSubmitting ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Send className="w-5 h-5" />
                </motion.span>
              </button>
            </motion.div>
          </form>

          {responseMessage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`mt-4 text-center font-montserrat text-sm ${
                responseMessage.includes('succès') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {responseMessage}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;