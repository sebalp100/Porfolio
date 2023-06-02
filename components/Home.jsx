import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Home = () => (
  <section
    id="home"
    className="flex bg-slate-950 w-full bg-no-repeat text-white h-screen flex-col justify-center items-start bg-right-bottom"
    style={{
      backgroundImage: "url('back5.png')",
      backgroundSize: '860px auto',
    }}
  >
    <header className="absolute top-4 text-sm left-10 sm:left-28 font-semibold">
      <p>sebalp100@gmail.com</p>
    </header>
    <div className="slide-bottom text-center sm:text-start">
      <h1 className="text-xl mb-5 sm:ml-40 font-bold shadow-custom">
        Hello, my name is
      </h1>
      <h2 className="sm:text-6xl text-3xl mb-5 sm:ml-40 font-bold shadow-custom">
        Sebastian Martin
      </h2>
      <h3 className="text-3xl font-semibold sm:ml-40 mb-6 text-orange-500 shadow-custom">
        Full-Stack Developer
      </h3>
      <h4 className="sm:w-1/3 sm:ml-40 ml-2 mr-2 shadow-custom">
        I can help you build a product , feature or website. Look through some
        of my work and experience! If you like what you see and have a project
        you need coded, don’t hesitate to contact me.
      </h4>
      <div className="sm:ml-40 mb-6 mt-6 justify-center sm:justify-start flex gap-6">
        <Link href="https://github.com/sebalp100">
          <FaGithub className="text-2xl hover:text-orange-500 transition ease-in-out delay-130 hover:scale-150 duration-300" />
        </Link>
        <Link href="https://www.linkedin.com/in/sebastian-martin-lp/">
          <FaLinkedinIn className="text-2xl hover:text-orange-500 transition ease-in-out delay-130 hover:scale-150 duration-300" />
        </Link>
        <Link href="mailto:sebalp100@gmail.com">
          <FaEnvelope className="text-2xl hover:text-orange-500 transition ease-in-out delay-130 hover:scale-150 duration-300" />
        </Link>
      </div>
      <Link href="https://drive.google.com/file/d/1XkQpd7hHf4bJ8jaY88nuq4cBduosmnd-/view?usp=sharing">
        <button
          type="submit"
          className="relative inline-block text-lg group sm:ml-40"
          style={{ zIndex: 9 }}
        >
          <span className="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50" />
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-500 group-hover:-rotate-180 ease" />
            <span className="relative">
              <span className="flex gap-2 text-base font-bold">GET MY CV</span>
            </span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-11 -mb-0.5 -mr-0.5 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          />
        </button>
      </Link>
    </div>
  </section>
);

export default Home;
