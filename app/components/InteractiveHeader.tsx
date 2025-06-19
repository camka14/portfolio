"use client";

import { useState, useEffect } from 'react';

export default function InteractiveHeader() {
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsHeaderCollapsed(true);
      } else {
        // Scrolling up
        setIsHeaderCollapsed(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`bg-white shadow-lg fixed w-full top-0 z-50 transition-transform duration-300 ${
      isHeaderCollapsed ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <nav className="flex flex-col md:flex-row justify-between items-center p-4 md:px-8 gap-4 md:gap-0">
        <div className="nav-brand">
          <h2 className="text-xl font-bold">Samuel Razumovskiy</h2>
        </div>
        <ul className="flex list-none gap-4 md:gap-8">
          <li>
            <a href="#about" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#app" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600">
              App
            </a>
          </li>
          <li>
            <a href="#sdk" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600">
              SDK Work
            </a>
          </li>
          <li>
            <a href="#contact" className="no-underline text-gray-800 font-medium transition-colors duration-300 hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
