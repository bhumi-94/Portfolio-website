export default function Footer() {
  return (
    <>
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 px-4 sm:px-10 lg:px-20 w-full py-4 sm:pb-3 bg-[#0d0d16]/70 overflow-hidden backdrop-blur-sm hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow hover:border-[#3d3d5c] duration-300">
        <p className="text-center text-sm sm:text-base bg-gradient-to-r from-white via-[#FF9FFC] to-[#A855F7] bg-clip-text text-transparent">
          Copyright © 2026 <a href="#">Bhoomi Kaushik</a>. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          < a
            href="https://www.linkedin.com/in/bhoomi-kaushik-145081356"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg
              width="22"
              height="22"
              className="sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                stroke="#FF9FFC"
                strokeOpacity=".5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="mailto:kaushikbhumika13@gmail.com"
            className="hover:-translate-y-0.5 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="22"
              height="22"
              className="sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="20"
                height="16"
                x="2"
                y="4"
                rx="2"
                stroke="#FF9FFC"
                strokeOpacity=".5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
                stroke="#FF9FFC"
                strokeOpacity=".5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://github.com/bhumi-94"
            className="hover:-translate-y-0.5 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="22"
              height="22"
              className="sm:w-6 sm:h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"
                stroke="#FF9FFC"
                strokeOpacity=".5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 18c-4.51 2-5-2-7-2"
                stroke="#FF9FFC"
                strokeOpacity=".5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </footer>
    </>
  );
}