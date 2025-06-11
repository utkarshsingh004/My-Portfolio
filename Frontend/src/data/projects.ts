import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Campus-Connect',
    description: ' Campus Connect is a MERN stack web application designed to bridge the gap between colleges and students by allowing colleges to publish company details, internships, and live projects. It enables students to explore real-world opportunities directly through their campus, fostering stronger industry-academia collaboration.',
    image: './campus-connect.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoLink: 'https://campus-connect-frontend-fufn.onrender.com/',
    codeLink: 'https://github.com/utkarshsingh004/Campus-Connect.git',
  },
  {
    id: 2,
    title: 'Apna Ghar',
    description: ' Build a real estate app using React + Vite (frontend) and Node.js (backend) with features like property listings, search filters, user authentication, and property management. 🚀',
    image: './apna-ghar.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoLink: 'https://real-estate-1-37r5.onrender.com/',
    codeLink: 'https://github.com/utkarshsingh004/real-estate.git',
  },
  {
    id: 3,
    title: 'Expense-Tracker',
    description: 'A user-friendly application designed to track and manage personalfinances efficiently. It helps users record expenses, categorize transactions, and monitor spending habits with insightfulvisualizations.',
    image: './expenseTracker.png',
    tags: ['React'],
    demoLink: 'https://utkarsh004-expense-tracker.netlify.app/',
    codeLink: 'https://github.com/utkarshsingh004/Expense-Tracker.git',
  },
];