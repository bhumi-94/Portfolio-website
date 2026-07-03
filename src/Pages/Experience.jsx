import React from "react";

const Experience = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-transparent px-4 py-4 mt-30">
        {/* Title */}
        <div className="flex flex-col items-center">
          <h1 className="text-6xl text-center font-bold bg-gradient-to-r from-white via-[#FF9FFC] to-[#A855F7] bg-clip-text text-transparent">
            Experience
          </h1>
          <p className="text-sm text-center text-white/70 leading-tight">
            A journey through my academic growth, internships, and hands-on
            project work{" "}
          </p>
        </div>

        {/* div for experience */}
        <div className="bg-[#0d0d16]/70 border mt-30 border-[#2a2a3d] rounded-2xl p-10  flex flex-col justify-start backdrop-blur-sm  hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow  hover:border-[#3d3d5c] duration-300">
          <h1 className="text-white/90 text-3xl font-semibold ">Experience</h1>
          <h3 className="text-white/90 mt-6 text-2xl">
            🎓 Technology Virtual Intern — Deloitte Australia (via Forage)2026
          </h3>
          <p className="text-base  text-white/70 mt-10 ">
            • Completed a job simulation replicating real-world technology
            consulting tasks.
          </p>
          <p className="text-base  text-white/70 mt-5 ">
            • Gained exposure to consulting workflows, data analysis, and
            digital transformation.
          </p>
          <p className="text-base  text-white/70 mt-5 ">
            • Applied problem-solving skills aligned with enterprise software
            practices.
          </p>
        </div>
      </div>
    </>
  );
};

export default Experience;
