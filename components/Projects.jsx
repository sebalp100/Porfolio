'use client';
import React from 'react';
import Carousel from 'nuka-carousel';
import data from './data/data';
import Image from 'next/image';
import Link from 'next/link';

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
          <Link key={room.id} href={room.link}>
            <li
              key={room.id}
              className="bg-gray-900 hover:bg-gray-100 hover:text-gray-900 transition ease-in-out delay-0 duration-500"
            >
              <Image
                alt="Project"
                src={room.image}
                width={1118}
                height={749}
                style={{
                  width: '90%',
                  margin: '5%',
                  paddingTop: '5%',
                  objectFit: 'fill',
                }}
              />
              <h4 className="roomNames">{room.title}</h4>
              <span className="separator">. . . . . . . . . . . . . .</span>
              <p>{room.description}</p>
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
