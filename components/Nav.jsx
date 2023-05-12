'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaHome, FaUserAlt, FaSuitcase, FaPhone } from 'react-icons/fa';
import Image from 'next/image';

const Nav = () => {
  const [active, setActive] = useState('home');
  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById('home').offsetTop;
      const about = document.getElementById('about').offsetTop;
      const projects = document.getElementById('projects').offsetTop;
      const contact = document.getElementById('contact').offsetTop;

      const scrollPosition = window.scrollY + 200;

      if (scrollPosition >= home && scrollPosition < about) {
        setActive('home');
      } else if (scrollPosition >= about && scrollPosition < projects) {
        setActive('about');
      } else if (scrollPosition >= projects && scrollPosition < contact) {
        setActive('projects');
      } else if (scrollPosition >= contact) {
        setActive('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="default-sidebar"
      className="fixed top-0 gap-4 left-0 flex flex-col border-r border-slate-700 bg-slate-900 justify-start items-center z-40 w-20 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="mt-4 mb-20">
        <Image src="/portflogo.png" alt="My Logo" width={60} height={50} />
      </div>
      <div className="flex flex-col gap-6 items-center w-full">
        <Link
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="border-b border-slate-700 w-full"
        >
          <FaHome
            className={`text-3xl w-full mb-6 ${
              active === 'home' ? ' text-orange-500 ' : 'text-white'
            }`}
          />
        </Link>
        <Link
          href="#about"
          onClick={(e) => handleNavClick(e, '#about')}
          className="border-b border-slate-700 w-full"
        >
          <FaUserAlt
            className={`text-3xl w-full mb-6 ${
              active === 'about' ? ' text-orange-500' : 'text-white'
            }`}
          />
        </Link>
        <Link
          href="#projects"
          onClick={(e) => handleNavClick(e, '#projects')}
          className="border-b border-slate-700 w-full"
        >
          <FaSuitcase
            className={`text-3xl w-full mb-6 ${
              active === 'projects' ? ' text-orange-500' : 'text-white'
            }`}
          />
        </Link>
        <Link href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
          <FaPhone
            className={`text-3xl ${
              active === 'contact' ? ' text-orange-500' : 'text-white'
            }`}
          />
        </Link>
      </div>
      <div></div>
      <div className="md:hidden flex">Hi</div>
    </nav>
  );
};

export default Nav;
