import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex h-screen bg-gray-900 w-full flex-col justify-center items-center"
    >
      <div className="flex flex-wrap sm:ml-20">
        <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
          <h2 className="text-3xl text-gray-100 font-bold mb-6">Contact me</h2>
          <p className="text-gray-100 mb-6">
            Thank you for visiting my site! If you’d like to collaborate on a
            project or have any questions about my services, please use the
            contact form below to get in touch. I’m here to help if you need a
            new website or just need some general web development advise. I will
            respond as soon as possible and look forward to hearing from you!
          </p>
          <div className="mt-6 justify-start flex gap-4">
            <Link href="https://github.com/sebalp100">
              <FaGithub className="text-2xl text-gray-100" />
            </Link>
            <Link href="https://www.linkedin.com/in/sebastian-martin-lp/">
              <FaLinkedinIn className="text-2xl text-gray-100" />
            </Link>
            <Link href="mailto:sebalp100@gmail.com">
              <FaEnvelope className="text-2xl text-gray-100" />
            </Link>
          </div>
        </div>
        <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
          <form>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="email"
                className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput8"
                placeholder="Email address"
                required
              />
            </div>
            <div className="form-group mb-6">
              <textarea
                className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="relative inline-block text-lg group"
            >
              <span className="relative z-10 block px-5 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-orange-500 group-hover:-rotate-180 ease"></span>
                <span className="relative">
                  <span className="flex gap-2 text-base font-bold">SUBMIT</span>
                </span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
