'use client';
import Image from 'next/image';
import React from 'react';
import { FaReact, FaJs } from 'react-icons/fa';
import { SiRuby, SiRedux, SiRubyonrails, SiNextdotjs } from 'react-icons/si';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row bg-gray-900 text-white w-full min-h-screen justify-center items-center"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center">
          <div className="w-1/3 mt-6 mb-6 lg:h-60 lg:w-60 xl:h-80 xl:w-80 sm:ml-20 lg:ml-40 shadow-custom flex justify-center">
            <Image
              src="/about-me.jpg"
              alt="My Logo"
              width={384}
              height={384}
              className="xl:h-80 xl:max-w-sm lg:h-60 lg:max-w-fit h-40 max-w-min frontImage"
            />
          </div>
          <div className="lg:flex hidden mt-10 ml-40 lg:text-2xl justify-center xl:text-4xl gap-4">
            <FaJs />
            <SiRuby />
            <FaReact />
            <SiRedux />
            <SiRubyonrails className="railsIcon text-gray-950" />
            <SiNextdotjs />
          </div>
        </div>
        <div className="lg:mr-20 sm:ml-24 sm:mr-4 text-center lg:text-start ml-4 mr-4 mb-4">
          <h1 className="text-4xl mb-5 font-bold text-center lg:text-start">
            Biography
          </h1>
          <p>
            Hello! My name is Sebastian and I’m a Full-Stack developer from
            Argentina. I studied at Microverse, a school that emphasizes weekly
            deadline project building in a remote multicultural pair programming
            ambient.
            <br />
            <br />
            Before becoming a developer, I started my career in the field of
            optometry, where I got quite accustomed to working with tight
            deadlines and a diverse team because that’s what I used to do to be
            able to care for my patients on a daily basis. My experience as an
            optometrist, where I constantly adapted to new technologies and
            analyzed complex data, has prepared me well for a career in software
            development. These experiences have given me a strong foundation in
            working with technology and interpreting data.
            <br />
            <br />
            Since joining Microverse, I’ve created a number of website projects
            in JavaScript, React, and Rails with a focus on user experience and
            performance. All of these projects can be found in my portfolio.
          </p>
        </div>
        <div className="lg:hidden justify-center mt-10 sm:ml-14 mb-4 text-2xl xl:text-4xl flex gap-4">
          <FaJs />
          <SiRuby />
          <FaReact />
          <SiRedux />
          <SiRubyonrails className="railsIcon text-gray-950" />
          <SiNextdotjs />
        </div>
      </div>
    </section>
  );
};

export default About;
