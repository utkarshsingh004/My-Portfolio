export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink?: string;
};

export type Skill = {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
};

export type NavItem = {
  label: string;
  href: string;
};

export type ThemeMode = 'light' | 'dark';