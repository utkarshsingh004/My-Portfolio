// sections/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import Button from '../components/Button';

const HeroSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/utkarshsingh004' },
    // { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Twitter, href: 'https://x.com/_uksingh004' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-24 pb-20">
      {/* Background and blur effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-secondary-300/20 dark:bg-secondary-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-300/20 dark:bg-accent-900/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div variants={item}>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
                Hi, I'm <span className="text-primary-600 dark:text-primary-400">Utkarsh Singh</span>
              </h1>
              <p className="text-xl mt-4 text-gray-700 dark:text-gray-300">
                Full Stack Developer & UI/UX Designer
              </p>
            </motion.div>

            <motion.p className="text-lg text-gray-600 dark:text-gray-400" variants={item}>
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            </motion.p>

            <motion.div className="flex gap-4" variants={item}>
              <Button variant="outline" href="#projects">View My Work</Button>
              <Button variant="outline" href="#contact">Get In Touch</Button>
            </motion.div>

            <motion.div className="flex space-x-5" variants={item}>
              {socialLinks.map(({ icon: Icon, href }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  <Icon size={22} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div className="w-full lg:w-1/2 flex justify-center lg:justify-end" variants={item}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                <img src="./myPhoto.jpg" alt="Utkarsh Kumar Singh" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll Down</p>
          <ChevronDown className="animate-bounce text-gray-600 dark:text-gray-400" size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
