'use client';

import Image from 'next/image';
import React from 'react';
import Carousel from 'nuka-carousel';

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex text-white gap-10 w-full bg-slate-950 flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-bold mb-10 mt-20">My Experience</h2>
      <div className="flex flex-col items-center lg:flex-row gap-10 mb-20 sm:ml-[8vw] lg:ml-[4vw]">
        <div className="flex flex-col sm:ml-[5vw] xl:ml-0 w-[80vw] lg:w-[40vw]">
          <h2 className="text-2xl font-bold mb-3 text-orange-500">
            SCPC-SAPEL
          </h2>
          <h3 className="mb-2 font-bold">
            Front-End Developer (May 2023 - September 2023)
          </h3>
          <p>
            The goal was to create a website that allows company users to
            review, create and edit different commercial invoices. <br /> <br />{' '}
            The website consists of multiple pages for different periods of the
            year. Users can export the invoices to an Excel file and make
            calculations by either selecting all or just some specific rows.{' '}
            <br /> <br /> The admin can create new users and manage their
            permissions. <br /> <br />
            <span className="font-bold">Stack:</span> React, Redux, RTK Query,
            MaterialUI and TailwindCSS.
          </p>
        </div>

        <div className="w-[90vw] pl-[12vw] md:pl-0 sm:w-[70vw] lg:w-[40vw] ">
          <Carousel
            autoplay
            renderCenterLeftControls="true"
            renderCenterRightControls="false"
            wrapAround
          >
            <Image src="/hcpc.png" alt="Home page" width={1400} height={700} />
            <Image
              src="/login2.png"
              alt="Login page"
              width={1400}
              height={700}
            />
            <Image
              src="/userscpc.png"
              alt="Users page"
              width={1400}
              height={700}
            />
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col items-center lg:flex-row gap-10 mb-20 sm:ml-[8vw] lg:ml-[4vw]">
        <div className="flex flex-col sm:ml-[5vw] xl:ml-0 w-[80vw] lg:w-[40vw]">
          <h2 className="text-orange-500 text-2xl font-bold mb-3">METAMA</h2>
          <h3 className="mb-2 font-bold">
            Front-End Developer (September 2023 - December 2023)
          </h3>
          <p>
            I worked as part of a team of five people. The objective was to
            create an application that allows students to apply for various
            scholarships. To apply, students must upload their documentation.{' '}
            <br /> <br />
            The website has an exclusive dashboard for agents, from which they
            can accept or reject applications, as well as edit student data.
            They can also communicate with students, for example, if their
            documentation needs to be updated. <br /> <br />
            <span className="font-bold">Stack:</span> React, RTK Query,
            MaterialUI and TailwindCSS.
          </p>
        </div>

        <div className="w-[90vw] pl-[12vw] md:pl-0 sm:w-[70vw] lg:w-[40vw] ">
          <Carousel
            autoplay
            renderCenterLeftControls="true"
            renderCenterRightControls="false"
            wrapAround
          >
            <Image
              src="/dashb2.png"
              alt="Dashboard page"
              width={1400}
              height={700}
            />
            <Image
              src="/students2.png"
              alt="Students page"
              width={1400}
              height={700}
            />
            <Image
              src="/offers2.png"
              alt="Offers page"
              width={1400}
              height={700}
            />
            <Image
              src="/studlist2.png"
              alt="Student list page"
              width={1400}
              height={700}
            />
            <Image
              src="/acce2.png"
              alt="Accepted page"
              width={1400}
              height={700}
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Experience;
