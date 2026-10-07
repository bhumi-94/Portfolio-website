export default function About() {
  return (
    <section className="relative mt-10 px-6 overflow-hidden rounded-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 relative z-10">
        {/* LEFT CARD - My Journey */}
        <div className="bg-[#0d0d16]/70 border border-[#2a2a3d] rounded-2xl p-10 flex flex-col justify-start backdrop-blur-sm hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow hover:border-[#3d3d5c] duration-300">
          <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>

          <p className="text-gray-300 text-lg leading-8 mb-6">
            I'm a{" "}
            <span className="text-white font-semibold">
              Full Stack Developer
            </span>{" "}
            and Computer Science Engineering student passionate about building
            modern, responsive, and user-focused web applications. I enjoy
            turning ideas into functional digital experiences while continuously
            improving my development skills.
          </p>

          <p className="text-gray-400 text-lg leading-8 mb-6">
            I work with the{" "}
            <span className="text-white font-semibold">
              MERN stack — React.js, Node.js, Express.js, and MongoDB
            </span>{" "}
            along with JavaScript, Tailwind CSS, Redux, REST APIs, and MySQL. I
            have hands-on experience building frontend interfaces, backend APIs,
            authentication systems, database integrations, and deploying web
            applications.
          </p>

          <p className="text-gray-400 text-lg leading-8">
            I'm passionate about clean code, problem-solving, backend
            development, and AI-driven development. Currently seeking a{" "}
            <span className="text-white font-semibold">
              Software Developer or Full Stack Developer
            </span>{" "}
            where I can contribute to real-world projects, learn from
            experienced developers, and grow as a software engineer.
          </p>
        </div>

        {/* RIGHT CARD - Education */}
        <div className="bg-gradient-to-b from-[#0d0d1f]/70 to-[#0a0a18]/90 border border-[#2a2a3d] rounded-2xl p-8 min-h-[560px] backdrop-blur-sm hover:border-[#3d3d5c] shadow-[0_0_30px_rgba(76,61,240,0.15)] hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow duration-300">
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
              Pursuing Computer Science Engineering with a focus on full-stack
              web development, software engineering, databases, and modern web
              technologies, with hands-on experience building real-world
              applications.
            </p>
          </div>

          {/* Timeline item 2 */}
          <div className="relative pl-8 pb-10 border-l-2 border-[#3f3f67]">
            <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gray-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

            <h4 className="text-white font-bold text-lg mb-1">
              Senior Secondary Education (Class XII)
            </h4>

            <p className="text-gray-500 font-medium text-sm mb-3">
              2023 | K.C Jain Memo Girls Inter College
            </p>

            <p className="text-gray-400 text-sm leading-6">
              Completed with 75.8%, developing a strong foundation in science,
              mathematics, and analytical thinking before pursuing Computer
              Science Engineering.
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
              Completed with 84%, building a strong academic foundation across
              Mathematics, Science, English, and other core subjects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
