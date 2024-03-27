'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={`mobile-menu sm:hidden ${menuOpen ? 'opened' : ''}`}>
      <button type="button" className="menu-button" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
          <span />
          <span />
          <span />
        </div>
      </button>
      <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
        <div className="bg-black">
          <li>
            <Link href="#home" onClick={handleNavClick}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={handleNavClick}>
              <p>About Me</p>
            </Link>
          </li>
          <li>
            <Link href="#experience" onClick={handleNavClick}>
              <p>My Experience</p>
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={handleNavClick}>
              <p>My projects</p>
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={handleNavClick}>
              <p>Contact</p>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
