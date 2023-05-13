'use client';
import React from 'react';
import Carousel from 'nuka-carousel';
import data from './data/data';
import Image from 'next/image';

const Projects = () => {
  const settings = {
    slidesToShow: 3,
  };

  return (
    <section
      id="projects"
      className="flex text-white h-screen bg-slate-950 sm:pl-40 p-20 flex-col justify-center items-center"
    >
      <Carousel {...settings}>
        {data.map((room) => (
          <li key={room.id} className="bg-gray-900">
            <Image alt="Project" src={room.image} width={1118} height={749} />
            <h4 className="roomNames">{room.title}</h4>
            <span className="separator">. . . . . . . . . . . . . .</span>
            <p>{room.description}</p>
            <div>{room.icons}</div>
          </li>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
