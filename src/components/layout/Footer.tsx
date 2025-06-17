import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white p-4 text-center shadow-lg text-xs sm:text-sm">
        <p className="flex justify-center items-center gap-4">
          Developed by Kimiko • © {new Date().getFullYear()}
          <a
            href="https://github.com/Kimiqo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="mailto:michael12darko@gmail.com"
            className="text-blue-400 hover:text-blue-300"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mkkd-michael-darko/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            <FaLinkedin size={20} />
          </a>
        </p>
      </footer>
  )
}

export default Footer;