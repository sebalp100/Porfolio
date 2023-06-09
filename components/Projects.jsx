'use client';

import React, { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaRocket, FaRegWindowClose } from 'react-icons/fa';
import data from './data/data';

const Projects = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    slidesToShow,
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="projects"
      className="flex text-white h-screen bg-slate-950 flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-bold">My Projects</h2>
      <Carousel {...settings}>
        {data.map((room) => (
          <li
            key={room.id}
            className="bg-gray-900 cardItem transition ease-in-out delay-0 duration-300"
          >
            <Image
              alt="Project"
              src={room.image}
              width={1118}
              height={749}
              style={{
                width: '90%',
                height: '90%',
                margin: '5%',
                paddingTop: '5%',
                objectFit: 'fill',
                cursor: 'pointer',
              }}
              onClick={() => openModal(room.image)}
              className=" transition-transform hover:scale-110 delay-50 ease"
            />
            <h4 className="roomNames text-lg font-semibold">{room.title}</h4>
            <hr className="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-400 to-transparent opacity-25 dark:opacity-100" />
            <div className="flex justify-center mt-3 pb-4 text-3xl gap-4">
              {room.icons}
            </div>
            <p className="ml-4 text-sm mr-4 whitespace-pre-line">
              {room.description}
            </p>
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
          </li>
        ))}
      </Carousel>
      {selectedImage && (
        <div className="modal fixed inset-0 sm:ml-20 flex items-center justify-center z-10 bg-black bg-opacity-50 backdrop-filter backdrop-blur">
          <div className="modal-content bg-white w-11/12 sm:w-4/6 p-2">
            <button
              className="text-gray-800 mb-2 float-right text-xl font-bold focus:outline-none"
              type="button"
              onClick={closeModal}
            >
              <FaRegWindowClose />
            </button>
            <Image
              alt="Project"
              src={selectedImage}
              width={1118}
              height={749}
              className="mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
