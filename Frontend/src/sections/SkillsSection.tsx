import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/skills';
import { Skill } from '../types';

const SkillsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filterButtons = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredSkills = filter === 'all'
    ? skills
    : skills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="My Skills" 
          subtitle="Technologies and tools I've worked with"
        />
        
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {filterButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => setFilter(button.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === button.id
                  ? 'bg-primary-600 text-white dark:bg-primary-500'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {button.label}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill: Skill, index: number) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;