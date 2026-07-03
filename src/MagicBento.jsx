export default function About() {
  return (
    <section className="relative mt-10 px-6 overflow-hidden rounded-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 relative z-10">
        {/* LEFT CARD - My Journey (wide, increased height) min-h-[560px] */}
        <div className="bg-[#0d0d16]/70 border border-[#2a2a3d] rounded-2xl p-10  flex flex-col justify-start backdrop-blur-sm  hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow  hover:border-[#3d3d5c] duration-300">
          <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>

          <p className="text-gray-300 text-lg leading-8 mb-6">
            I'm a{" "}
            <span className="text-white font-semibold">
              {" "}
              Full Stack Developer
            </span>{" "}
            and final-year B.Tech Computer Science Engineering student. I
            specialize in building responsive, scalable web applications using
            the{"  "}
            <span className="text-white font-semibold">
              {" "}
              MERN stack — React.js, Node.js, Express.js, and MongoDB
            </span>{" "}
            — along with Tailwind CSS and Redux for clean, maintainable frontend
            architecture.{" "}
          </p>

          <p className="text-gray-400 text-lg leading-8 mb-6">
            I've also completed the{" "}
            <span className="text-white font-semibold">
              Deloitte Technology Virtual Internship (Forage),
            </span>{" "}
            where I gained practical exposure to technology consulting workflows
            and enterprise problem-solving.
          </p>

          <p className="text-gray-400 text-lg leading-8">
            Passionate about clean code, problem-solving, and AI-driven
            development. Seeking a{" "}
            <span className="text-white font-semibold">
              frontend or full-stack internship
            </span>{" "}
            to grow as an engineer.
          </p>
        </div>

        {/* RIGHT CARD - Education (narrower, taller vertical) */}
        <div className="bg-gradient-to-b from-[#0d0d1f]/70 to-[#0a0a18]/90 border border-[#2a2a3d] rounded-2xl p-8 min-h-[560px] backdrop-blur-sm  hover:border-[#3d3d5c] shadow-[0_0_30px_rgba(76,61,240,0.15)] hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🎓</span>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          {/* Timeline item 1 */}
          <div className="relative pl-8 pb-10 border-l-2 border-[#3f3f67]">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <h4 className="text-white font-bold text-lg mb-1">
              B.Tech in Computer Science
            </h4>
            <p className="text-purple-400 font-medium text-sm mb-3">
              2023 - 2027 (Expected)
            </p>
            <p className="text-gray-400 text-sm leading-6">
              Focusing on full-stack web development and modern software
              engineering practices, with hands-on experience in the MERN stack.
            </p>
          </div>

          {/* Timeline item 2 */}
          <div className="relative pl-8 pb-10 border-l-2 border-[#3f3f67]">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <h4 className="text-white font-bold text-lg mb-1">
              Senior Secondary Education (Class XII)
            </h4>
            <p className="text-gray-500 font-medium text-sm mb-3">
              {" "}
              2023 | K.C Jain Memo Girls Inter College
            </p>
            <p className="text-gray-400 text-sm leading-6">
              Completed with 75.8%, building a strong foundation in science and
              mathematics before pursuing Computer Science Engineering.
            </p>
          </div>

          {/* Timeline item 3 */}
          <div className="relative pl-8 border-l-2 border-[#3f3f67]">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            <h4 className="text-white font-bold text-lg mb-1">
              Secondary Education (Class X)
            </h4>
            <p className="text-gray-500 font-medium text-sm mb-3">
              2021 | A.N.S Jain Girls Inter College
            </p>
            <p className="text-gray-400 text-sm leading-6">
              Completed with 84%, developing a strong foundation across core
              subjects including Mathematics, Science, and English.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
