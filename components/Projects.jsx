'use client';
import React, { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import data from './data/data';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

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
    slidesToShow: slidesToShow,
  };

  return (
    <section
      id="projects"
      className="flex text-white h-screen bg-slate-950 flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-bold">My Projects</h2>
      <Carousel {...settings}>
        {data.map((room) => (
          <Link key={room.id} href={room.link}>
            <li
              key={room.id}
              className="bg-gray-900 hover:bg-gray-100 hover:text-gray-900 transition ease-in-out delay-0 duration-300"
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
                }}
              />
              <h4 className="roomNames font-semibold">{room.title}</h4>
              <span className="separator">. . . . . . . . . . . . . .</span>
              <p className="ml-4 mr-4">{room.description}</p>
              <div className="flex justify-center mt-5 pb-4 text-3xl gap-4">
                {room.icons}
              </div>
            </li>
          </Link>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
