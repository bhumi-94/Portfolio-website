import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import nexora_ from "../assets/nexora_.png";
import hr_portal from "../assets/hr_portal.png";
import CallToAction from "../Components/CallToAction";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-transparent px-4 py-4 mt-30">
        {/* Title */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl text-center font-bold bg-gradient-to-r from-white via-[#FF9FFC] to-[#A855F7] bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-sm text-center text-white/70 leading-normal mt-2">
            Projects that reflect my passion for building impactful digital
            experiences.
          </p>
        </div>

        {/* projects cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-6 xl:px-50 px-4 sm:px-6 md:px-10 lg:px-30 mt-30">
          

          {/* card-2 */}
          <div className="bg-[#0d0d16]/70 w-full border border-[#2a2a3d] rounded-2xl overflow-hidden flex flex-col justify-start backdrop-blur-smbackdrop-blur-sm hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow hover:border-[#3d3d5c] duration-300">
            <img
              src={nexora_}
              alt="Nexora project preview"
              className="w-full h-48 sm:h-56 object-cover"
            />

            {/* text */}
            <div className="px-3 mt-3 flex-1">
              <div className="flex justify-between items-start gap-2">
                <h1 className="bg-gradient-to-r from-white via-[#FF9FFC] to-[#A855F7] bg-clip-text text-transparent text-lg sm:text-xl font-semibold">
                  Nexora – Full-Stack E-Commerce Platform
                </h1>
                <span className="px-1 text-white/40 rounded-full text-sm whitespace-nowrap">
                  Full Stack
                </span>
              </div>
              <p className="text-white/60 text-sm mt-1">
                Nexora is a modern full-stack e-commerce platform built with
                React.js, Node.js, Express.js, and MySQL. It provides a seamless
                shopping experience with user authentication, product browsing,
                cart and wishlist management.
              </p>
            </div>

            <div className="flex flex-wrap mt-2 px-3 pb-3 gap-2">
              <span className="px-1 text-white/40 rounded-full text-sm">
                React.js
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                Redux Toolkit
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                Express.js
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                My SQL
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                Git & Github
              </span>
              <span className="px-1 rounded-full">
                <a
                  href="https://e-commerce-frontend-six-neon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗
                </a>
              </span>
            </div>
          </div>

          {/* card-3*/}
          <div className="bg-[#0d0d16]/70 w-full border border-[#2a2a3d] rounded-2xl overflow-hidden flex flex-col justify-start backdrop-blur-smbackdrop-blur-sm hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow hover:border-[#3d3d5c] duration-300">
            <img
              src={hr_portal}
              alt="Hr-Portal project preview"
              className="w-full h-48 sm:h-56 object-cover"
            />

            {/* text */}
            <div className="px-3 mt-3 flex-1">
              <div className="flex justify-between items-start gap-2">
                <h1 className="bg-gradient-to-r from-white via-[#FF9FFC] to-[#A855F7] bg-clip-text text-transparent text-lg sm:text-xl font-semibold">
                  HR-Portal – Employee Management System
                </h1>
                <span className="px-1 text-white/40 rounded-full text-sm whitespace-nowrap">
                  Full Stack
                </span>
              </div>
              <p className="text-white/60 text-sm mt-1">
                HR-Portal is a full-stack employee management system designed to simplify HR operations and employee workflows. It includes separate HR and employee dashboards with attendance, leave management, holidays, notifications, feedback, and secure role-based authentication.
              </p>
            </div>

            <div className="flex flex-wrap mt-2 px-3 pb-3 gap-2">
              <span className="px-1 text-white/40 rounded-full text-sm">
                React.js
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                Redux Toolkit
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                Express.js
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                JWT
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                Git & Github
              </span>
              <span className="px-1 rounded-full">
                <a
                  href="https://hr-portal-silk-five.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗
                </a>
              </span>
            </div>
          </div>

{/* card-1 */}
          <div className="bg-[#0d0d16]/70 w-full border border-[#2a2a3d] rounded-2xl overflow-hidden flex flex-col justify-start backdrop-blur-smbackdrop-blur-sm hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow hover:border-[#3d3d5c] duration-300">
            <img
              src={project1}
              alt="MediCare project preview"
              className="w-full h-48 sm:h-56 object-cover"
            />

            {/* text */}
            <div className="px-3 mt-3 flex-1">
              <div className="flex justify-between items-start gap-2">
                <h1 className="bg-gradient-to-r from-white via-[#FF9FFC] to-[#A855F7] bg-clip-text text-transparent text-lg sm:text-xl font-semibold">
                  MediCare – Doctor Appointment Booking Portal
                </h1>
                <span className="px-1 text-white/40 rounded-full text-sm whitespace-nowrap">
                  Frontend
                </span>
              </div>
              <p className="text-white/60 text-sm mt-1">
                MediCare is a responsive doctor appointment booking platform
                built with React.js and Tailwind CSS, featuring doctor listings,
                service details, and a clean, mobile-friendly UI for a seamless
                healthcare experience.
              </p>
            </div>

            <div className="flex flex-wrap mt-2 px-3 pb-3 gap-2">
              <span className="px-1 text-white/40 rounded-full text-sm">
                React.js
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                TailwindCss
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                React-Router
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                Vite
              </span>
              <span className="px-1 rounded-full">
                <a
                  href="https://medi-care-health-service-bsl2.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗
                </a>
              </span>
            </div>
          </div>
          
          {/* card-4 */}
          <div className="bg-[#0d0d16]/70 w-full border border-[#2a2a3d] rounded-2xl overflow-hidden flex flex-col justify-start backdrop-blur-sm hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow hover:border-[#3d3d5c] duration-300">
            <img
              src={project2}
              alt="Portfolio website preview"
              className="w-full h-48 sm:h-56 object-cover"
            />

            {/* text */}
            <div className="px-3 mt-3 flex-1">
              <div className="flex justify-between items-start gap-2">
                <h1 className="bg-gradient-to-r from-white via-[#FF9FFC] to-[#A855F7] bg-clip-text text-transparent text-lg sm:text-xl font-semibold">
                  Portfolio Website
                </h1>
                <span className="px-1 text-white/40 rounded-full text-sm whitespace-nowrap">
                  Frontend
                </span>
              </div>
              <p className="text-white/60 text-sm mt-1">
                A sleek, fully responsive personal portfolio built to highlight
                my skills, projects, and journey as a developer — designed with
                a mobile-first approach, smooth animations, and optimized
                performance for a fast, seamless experience across all devices.
              </p>
            </div>

            <div className="flex flex-wrap mt-2 px-3 pb-3 gap-2">
              <span className="px-1 text-white/40 rounded-full text-sm">
                Html/Css
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                React.js
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                TailwindCss
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-1 text-white/40 rounded-full text-sm">
                React-Router
              </span>
              <span className="px-1 rounded-full">
                <a href="#">🔗</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-50 ">
        <CallToAction />
      </div>
    </>
  );
};

export default Projects;
