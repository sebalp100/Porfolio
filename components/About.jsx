'use client';

import Image from 'next/image';
import React from 'react';
import { FaReact, FaJs } from 'react-icons/fa';
import { SiRuby, SiRedux, SiRubyonrails, SiNextdotjs } from 'react-icons/si';

const About = () => (
  <section
    id="about"
    className="flex flex-col lg:flex-row bg-gray-900 text-white w-full min-h-screen justify-center items-center"
  >
    <div className="flex flex-col lg:flex-row">
      <div className="flex flex-col items-center">
        <div className="w-1/3 mt-4 mb-6 lg:h-60 lg:w-60 xl:h-80 xl:w-80 sm:ml-20 lg:ml-40 shadow-custom flex justify-center">
          <div
            className="square-image-container"
            style={{
              backgroundImage: "url('/profile.gif')",
            }}
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
          Argentina. I studied at Microverse, a school that focuses on creating
          weekly deadline projects in a remote multicultural pair programming
          ambient.
          <br />
          <br />
          Before becoming a developer, I went to Facultad de Ciencias Exactas
          from 2012 to 2018. Then, I started my career in the field of
          optometry, where I got used to working with tight deadlines while
          taking care of my patients. I had to constantly adapt to new
          technologies and analyze complex data, so this has prepared me well
          for a career in software development.
          <br />
          <br />
          Since joining Microverse in 2022, I’ve created several website
          projects in JavaScript, React, and Rails with a focus on user
          experience and performance.
          <br />
          <br />
          Throughout 2023, I worked as a Front-End Developer, collaborating with
          various companies and fellow developers to create engaging digital
          experiences.
          <br />I gained invaluable insights and expanded my knowledge of web
          development, while learning effective collaboration and project
          management strategies. It was a transformative year that fueled my
          passion for this profession.
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

export default About;
