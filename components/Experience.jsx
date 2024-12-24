'use client';

import Image from 'next/image';
import React from 'react';
import Carousel from 'nuka-carousel';

const experiences = [
  {id: 1,
    title: 'WEB3 STUDIOS',
    position: 'Front-End Developer',
    date: 'April 2024 - Present',
    website: "Token Deal",
    description_1:
      `is an innovative auction platform where users can bid on a variety of assets.`,
    description_2: "Each bid restarts a 10-second timer. The last bidder when the timer runs out wins the item. It´s an exciting way to win great deals!",
    stack: 'NextJS, Zustand, CSS3, Axios, TypeScript.',
    images: ['/td1.png', '/td2.png', '/td3.png'],
    link: 'https://token-deal.com/',
  }, 
  {id: 2,
    title: 'WEB3 STUDIOS',
    position: 'Front-End Developer',
    date: 'April 2024 - Present',
    website: "Block Consulting",
    description_1:
      `is a website for businesses seeking expert guidance in navigating the complexities of the global marketplace.`,
    description_2: "With a focus on both established digital platforms and emerging Web3 technologies, the site showcases how Block Consulting partners with brands to craft precise and impactful marketing strategies.",
    stack: 'Astro, CSS3, TypeScript.',
    images: ['/bc1.png', '/bc2.png', '/bc3.png'],
    link: 'https://blockconsulting.cc/',
  },
  {id: 3,
    title: 'WEB3 STUDIOS',
    position: 'Front-End Developer',
    date: 'April 2024 - Present',
    website: "La Pulga",
    description_1:
      `website is the digital home of an innovative initiative inspired by the uplifting story of Pulga, an insect with dreams of becoming a football star like Lionel Messi.`,
    description_2: "This platform connects football enthusiasts and tech innovators through the launch of PulgaCoin, a cryptocurrency that embodies values of perseverance, determination, and teamwork.",
    stack: 'Astro, CSS3, TypeScript.',
    images: ['/lp1.png', '/lp2.png', '/lp3.png'],
    link: 'https://lapulga.website/',
  },
  {id: 4,
    title: 'WEB3 STUDIOS',
    position: 'Front-End Developer',
    date: 'April 2024 - Present',
    website: "Evvest",
    description_1:
      'is an independent digital investment advisory platform dedicated to empowering women in their financial journey. Committed to economic growth and well-being, Evvest supports you at every step of your investment process.',
    description_2: "Evvest mission is to empower you to take control of your financial future.",
    stack: 'Astro, CSS3, Axios, ChartJs, TypeScript.',
    images: ['/ev1.png', '/ev2.png', '/ev3.png', '/ev4.png'],
    link: 'https://evvest.fr/',
  },
  {
    id: 5,
    title: 'SCPC-SAPEL',
    position: 'Front-End Developer',
    date: 'May 2023 - September 2023',
    description_1:
      `The goal was to create a website that allows company users to review, create and edit different commercial invoices.`,
    description_2: "The website consists of multiple pages for different periods of the year. Users can export the invoices to an Excel file and make calculations by either selecting all or just some specific rows. The admin can create new users and manage their permissions.",
    stack: 'React, Redux, RTK Query, MaterialUI and TailwindCSS.',
    images: ['/hcpc.png', '/login2.png', '/userscpc.png'],
  },
  {
    id: 6,
    title: 'METAMA',
    position: 'Front-End Developer',
    date: 'September 2023 - December 2023',
    description_1:
      'I worked as part of a team of five people. The objective was to create an application that allows students to apply for various scholarships. To do this, students must upload their documentation.',
    description_2: "The website has an exclusive dashboard for agents, from which they can accept or reject applications, as well as edit student data. They can also communicate with students, for example, if their documentation needs to be updated.",
    stack: 'React, RTK Query, MaterialUI and TailwindCSS.',
    images: [
      '/dashb2.png',
      '/students2.png',
      '/offers2.png',
      '/studlist2.png',
      '/acce2.png',
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex text-white gap-10 w-full bg-slate-950 flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-bold mb-10 mt-20">My Experience</h2>
      {experiences.map((experience) => (

      <div className="flex flex-col items-center lg:flex-row gap-10 mb-20 sm:ml-[8vw] lg:ml-[4vw]" key={experience.id}>
        <div className="flex flex-col sm:ml-[5vw] xl:ml-0 w-[80vw] lg:w-[40vw]">
          <h2 className="text-2xl font-bold mb-3 text-orange-500">
            {experience.title}
          </h2>
          <h3 className="mb-2 font-bold">
            {experience.position} ({experience.date})
          </h3>
          <p>
            <strong>{experience.website}</strong> {experience.description_1} <br /> <br />
            {experience.description_2} <br /> <br />
            {experience.description_3} {experience.description_3 && <><br /><br /></>}
            {experience.link && (<><span className="font-bold">Link:</span> <a href={experience.link} target="_blank">{experience.link}</a><br /><br /></>)}
            <span className="font-bold">Stack:</span> {experience.stack}
          </p>
        </div>

        <div className="w-[90vw] pl-[12vw] md:pl-0 sm:w-[70vw] lg:w-[40vw] ">
          <Carousel
            autoplay
            renderCenterLeftControls="true"
            renderCenterRightControls="false"
            wrapAround
          >
            {experience.images.map((image) => (
              <Image src={image} alt="Home page" width={1400} height={700} key={image} />
            ))}
          </Carousel>
        </div>
      </div>
      ))}
    </section>
  );
};

export default Experience;
