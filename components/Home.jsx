import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="flex bg-slate-950 w-full bg-no-repeat text-white h-screen flex-col justify-center items-start bg-right-bottom"
      style={{
        backgroundImage: "url('back5.png')",
        backgroundSize: '860px auto',
      }}
    >
      <header className="absolute top-4 text-sm left-28 font-semibold">
        <p>sebalp100@gmail.com</p>
      </header>
      <div className="text-center sm:text-start">
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
        <div className="sm:ml-40 mt-6 justify-center sm:justify-start flex gap-6">
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
      </div>
    </section>
  );
};

export default Home;
