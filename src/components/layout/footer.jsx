import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-16 max-h-full min-h-fit">
      <div className="text-center border-b mb-6  py-6 text-gray-300">
        <p>Built by <strong>Vishesh</strong> • Not a final product • Contributions welcome 🚀</p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Logo + Name */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">SkillSync Pro</h2>
          <p className="text-sm mt-1">Empowering Career Growth</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/dashboard" className="hover:text-white transition">Dashboard</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <a href="https://github.com/Vishesh9310" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-white transition" />
          </a>
          <a href="https://linkedin.com/in/vishesh9310" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-white transition" />
          </a>
          <a href="https://instagram.com/vishesh9310_" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl hover:text-white transition" />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SkillSync Pro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
