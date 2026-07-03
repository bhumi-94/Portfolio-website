import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-2xl py-16 bg-[#0d0d16]/70 border border-[#2a2a3d]  overflow-hidden backdrop-blur-sm hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow hover:border-[#3d3d5c] duration-300">
        <h1 className="text-2xl md:text-3xl font-medium text-white/90 max-w-2xl mt-5">
          Building AI-Powered, Full Stack & Data-Driven Digital Products.
        </h1>
        <p className="text-sm text-white/60 max-w-lg mt-2">
          I specialize in developing modern web applications, AI-integrated
          platforms, analytics systems, and scalable full-stack solutions
          focused on performance, user experience, and innovation.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-2.5 mt-4 text-sm rounded-2xl bg-gradient-to-r from-white via-[#FF9FFC] to-[#A855F7] hover:scale-105 transition duration-300 text-white"
          >
            Contact Me
          </button>
          <a
            href="https://github.com/bhumi-94"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/20 bg-white/20 text-white hover:bg-white/30 flex items-center gap-2 px-8 py-2.5 mt-4 text-sm hover:scale-105 transition duration-300"
          >
            Explore Github
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white/90"
            >
              <g clipPath="url(#a)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 0C3.133 0 0 3.133 0 7a7 7 0 0 0 4.786 6.641c.35.062.482-.149.482-.332 0-.166-.01-.718-.01-1.304-1.758.324-2.213-.429-2.353-.823-.079-.2-.42-.822-.717-.988-.246-.132-.596-.455-.01-.464.552-.009.946.508 1.077.717.63 1.06 1.636.762 2.039.578.061-.455.245-.761.446-.936-1.557-.175-3.185-.779-3.185-3.456 0-.762.271-1.392.717-1.882-.07-.175-.314-.892.07-1.855 0 0 .587-.183 1.926.718a6.5 6.5 0 0 1 1.75-.236c.595 0 1.19.078 1.75.236 1.338-.91 1.925-.718 1.925-.718.385.963.14 1.68.07 1.855a2.7 2.7 0 0 1 .717 1.882c0 2.686-1.636 3.28-3.194 3.456.254.218.473.638.473 1.295 0 .936-.009 1.688-.009 1.925 0 .184.131.402.481.332A7.01 7.01 0 0 0 14 7c0-3.867-3.133-7-7-7"
                  fill="currentColor"
                />
              </g>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
