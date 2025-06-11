import React from 'react';
import {
  FaGithub,
  // FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaHeart,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold text-white">
              Utkarsh Singh
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              A passionate Full Stack Developer focused on creating intuitive and dynamic user experiences.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/utkarshsingh004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            {/* <a
              href="https://linkedin.com/in/utkarshsingh004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a> */}
            <a
              href="https://x.com/_uksingh004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter (X)"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/18v3Y84Kdz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/__utkarsh004/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/919973546694"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col items-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-gray-400">Made with</span>
            <FaHeart className="text-red-500 mx-1" size={16} />
            <span className="text-gray-400">using React & Tailwind CSS</span>
          </div>
          <p className="text-gray-500 text-sm text-center">
            &copy; {currentYear} Utkarsh Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
