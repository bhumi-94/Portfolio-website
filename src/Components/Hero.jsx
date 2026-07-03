import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // const navLinks = ['Home', 'Features', 'Pricing', 'About'];
  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "projects" },
  ];

  return (
    <>
      <section className="flex flex-col items-center bg-transparent px-4 py-4 z-10000">
        {/* navbar */}
        <nav className="fixed top-4 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md dark:bg-neutral-900/20">
          <div className="mx-auto flex items-center justify-between px-4">
            <div className="text-xl font-bold text-white">
              Bhoomi<span className="text-purple-400">Kaushik</span>
            </div>
            <div className="hidden space-x-6 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.path}`}
                  className="text-white/60 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="hidden md:block rounded-xl border border-white/20 bg-white/20 px-5 py-2 text-sm text-white hover:bg-white/30"
            >
              Contact me
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              Menu
            </button>
          </div>
          {isOpen && (
            <div className="mt-4 flex flex-col space-y-3 rounded-xl bg-white/5 p-4 backdrop-blur-lg md:hidden">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.path}`}
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* main content */}
        <div className="flex  flex-wrap items-center justify-center gap-2 px-4 py-1.5 mt-50 rounded-full  border  border-white/20 bg-white/10 backdrop-blur-md dark:bg-neutral-900/20 ">
          <pre className="text-sm text-white/70">
            Available for Opportuinities
          </pre>
        </div>

        <h1 className="text-4xl md:text-[66px]/19 text-center max-w-2xl mt-8 text-white/90 bg-clip-text leading-tight font-medium">
          Hello! I'm <br /> Bhoomi Kaushik
        </h1>
        <h1>
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "AI Enthusiast",
              2000,

              "MERN Stack Developer",
              2000,
              "Problem Solver",
              2000,

              "React & Node.js Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-4xl"
            style={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #FFFFFF , #FF9FFC, #A855F7)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
        </h1>
        <p className="text-sm text-white/70 text-center max-w-[630px] mt-4">
          I design and build modern, high-performance web applications using the
          latest technologies and AI-driven tools — turning complex problems
          into simple, elegant, and scalable digital solutions.{" "}
        </p>

        <div className="flex gap-3 mt-10">
          <button
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white/80 hover:bg-white text-purple-900 text-xs md:text-sm px-6 py-3 rounded-lg transition cursor-pointer"
          >
            View Projects
          </button>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm text-white/90 hover:bg-white/30 border border-white/20 bg-white/20 md:text-sm px-5 py-3 rounded-lg transition cursor-pointer"
          >
            Contact Me
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
