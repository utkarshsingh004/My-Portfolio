import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Mail, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-6">
        <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
          <Mail className="text-primary-600 dark:text-primary-400" size={24} />
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">Get in Touch</h3>
      </div>

      {submitStatus === 'success' ? (
        <motion.div
          className="bg-green-100 dark:bg-green-900/30 p-4 rounded-md text-green-800 dark:text-green-300"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          Thanks for your message! I'll get back to you as soon as possible.
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>
          
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : (
              <>
                <Send size={18} className="mr-2" /> Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;