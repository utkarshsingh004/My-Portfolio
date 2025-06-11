import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { Skill } from '../types';

type SkillCardProps = {
  skill: Skill;
  index: number;
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const IconComponent = (LucideIcons as Record<string, React.FC<{ size?: number; className?: string }>>)[
    skill.icon.charAt(0).toUpperCase() + skill.icon.slice(1)
  ] || LucideIcons.Code;

  return (
    <motion.div
      className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-3">
        <IconComponent size={24} className="text-primary-600 dark:text-primary-400" />
      </div>
      <h3 className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</h3>
    </motion.div>
  );
};

export default SkillCard;