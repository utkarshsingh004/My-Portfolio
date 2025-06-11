import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Contact Me" 
          subtitle="Have a question or want to work together? Feel free to reach out!"
        />
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Let's Talk About Your Project
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400">
              I'm interested in freelance opportunities – especially ambitious or large projects. 
              However, if you have other requests or questions, don't hesitate to contact me using the form.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                  <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Bhopal, Madhya Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                  <Mail className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">singhutkarshkumar097@gmial.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                  <Phone className="text-primary-600 dark:text-primary-400" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">(+91) 9973546694</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;