'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaRocket } from 'react-icons/fa';
import data from './data/data';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const Single = ({ room }) => {
  const ref = useRef();

  return (
    <section className="h-screen mx-20">
      <li
        key={room.id}
        className="flex flex-col lg:flex-row mt-20 mb-20 gap-10"
      >
        <div className="w-[80vw] lg:w-[40vw] content-center" ref={ref}>
          <Image alt="Project" src={room.image} width={1400} height={749} />
        </div>
        <motion.div
          className="w-[80vw] lg:w-[40vw] flex flex-col justify-center textContainer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h4 className="roomNames text-lg font-semibold">{room.title}</h4>
          <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-25 dark:opacity-100" />
          <div className="flex justify-center mt-3 pb-4 text-3xl gap-4">
            {room.icons}
          </div>
          <p className="ml-4 mr-4 whitespace-pre-line ">{room.description}</p>
          <div className="mt-5 flex gap-3 justify-center items-center pb-2">
            <Link
              key={room.id + 2}
              href={room.demo}
              className="relative inline-block text-lg group"
            >
              <span className="relative z-10 block px-3 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50" />
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-500 group-hover:-rotate-180 ease" />
                <span className="relative">
                  <span className="flex gap-2 text-base font-bold">
                    <FaRocket className="text-xl" />
                    DEMO
                  </span>
                </span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              />
            </Link>
            <Link
              key={room.id}
              href={room.link}
              className="relative inline-block text-lg group"
            >
              <span className="relative z-10 block px-3 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50" />
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-500 group-hover:-rotate-180 ease" />
                <span className="relative">
                  <span className="flex gap-2 text-base font-bold">
                    <FaGithub className="text-xl" />
                    CODE
                  </span>
                </span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              />
            </Link>
          </div>
        </motion.div>
      </li>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div
      id="projects"
      ref={ref}
      className="flex text-white w-full bg-gray-900 flex-col justify-center items-center"
    >
      <div className="progress">
        <h2 className="text-3xl font-bold mt-5 mb-6">My Projects</h2>
        <motion.div
          style={{ scaleX }}
          className="progressBar w-[80vw]"
        ></motion.div>
      </div>

      {data.map((room) => (
        <Single room={room} key={room.id} />
      ))}
    </div>
  );
};

export default Projects;
