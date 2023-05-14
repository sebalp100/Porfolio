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
              className="
            w-24
            px-5
            py-2
            bg-orange-500
            text-white
            font-bold
            text-base
            leading-tight
            uppercase
            rounded
            shadow-md
            sumbitButton
            hover:bg-orange-700 hover:shadow-lg
            focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-orange-800 active:shadow-lg
            transition
            duration-150
            ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
