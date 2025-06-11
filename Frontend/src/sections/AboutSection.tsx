import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useInView } from 'react-intersection-observer';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know more about me and my background"
        />
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-primary-100 dark:bg-primary-900/30 rounded-lg h-full w-full absolute -left-4 -top-4 -z-10"></div>
            <img 
              src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="About Me" 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              A dedicated Full Stack Developer.
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400">
              As a Full Stack Developer, I possess a comprehensive skill set spanning both front-end and back-end 
              development. I excel at crafting dynamic, engaging interfaces through clean, optimized code and 
              utilizing cutting-edge development tools and techniques.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400">
              I'm passionate about creating seamless user experiences and solving complex problems through 
              elegant solutions. My strong foundation in web technologies allows me to build robust applications 
              that deliver exceptional performance across all devices.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <Calendar className="text-primary-600 dark:text-primary-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">+1 Years Experience</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <MapPin className="text-primary-600 dark:text-primary-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Madhya Pradesh, India</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Award className="text-primary-600 dark:text-primary-400" size={20} />
                <span className="text-gray-700 dark:text-gray-300">CS Degree, RGPV</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;