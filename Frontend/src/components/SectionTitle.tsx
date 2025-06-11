import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = 'center',
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      ref={ref}
      className={`mb-12 ${alignmentClasses[alignment]}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-primary-500 mt-4 rounded ${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle;