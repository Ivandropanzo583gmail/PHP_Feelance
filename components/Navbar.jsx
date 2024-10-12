// components/Navbar.js
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/NavBar/Logo.png" alt="FreelanceHours Logo" className="h-8 w-8 mr-2" />
          <span className="text-white text-lg font-semibold">FreelanceHours</span>
        </div>

        {/* Links de navegação */}
        <ul className=" hidden md:flex space-x-8 text-white">
          <li>
            <a href="#" className="hover:text-blue-400">
              Anunciar um projeto
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Procurar um projeto
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-400">
              Como funciona?
            </a>
          </li>
        </ul>

        {/* Avatar do Usuário */}
        <div className="flex items-center space-x-4">
          <img
            src="/NavBar/imageNav.jfif"
            alt="User Avatar"
            className="h-8 w-8 rounded-full"
          />
          <button className="text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
