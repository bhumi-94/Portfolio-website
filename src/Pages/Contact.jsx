import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_9p3hwk6",
        "template_zvziyei",
        form.current,
        "2-q7HDWUohneR04GK",
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatus("Failed to send message.");
          console.error(error);
        },
      );
  };

  return (
    <>
      <div className="flex flex-col items-center bg-transparent px-4 py-4 mt-30">
        {/* Title */}
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl text-center font-bold bg-gradient-to-r from-white via-[#FF9FFC] to-[#A855F7] bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-sm text-center text-white/70 leading-normal mt-2">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
        </div>

        <section className="bg-transparent px-4 py-16 w-full mt-10">
          <div className="w-full mx-auto flex flex-col md:flex-row max-md:items-center justify-center gap-12 md:gap-16">
            {/* Left Side */}
            <div className="flex flex-col mt-10">
              <p className="text-sm max-md:text-center font-medium text-white/70 uppercase mb-2">
                Get In Touch
              </p>
              <h1 className="text-5xl/14 max-md:text-center font-bold bg-gradient-to-r from-white via-[#FF9FFC] to-[#A855F7] bg-clip-text text-transparent max-w-2xs mb-4">
                Let's Connect Have an idea?
              </h1>
              <p className="text-base/5.5 text-white/70 max-md:text-center max-w-2xs">
                {" "}
                Let's bring it to life. Whether it's a project, collaboration,
                or just a good conversation — I'd love to hear from you.
              </p>
              <div className="flex items-center max-md:justify-center gap-4 mt-7">
                {/* GitHub */}
                <a
                  href="https://github.com/bhumi-94"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9F9FA9] hover:text-white/90 transition-colors duration-300"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/bhoomi-kaushik-145081356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9F9FA9] hover:text-white/90 transition-colors duration-300"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:kaushikbhumika13@gmail.com"
                  className="text-[#9F9FA9] hover:text-white/90 transition-colors duration-300"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full max-w-sm backdrop-blur-sm bg-[#0d0d16]/70  border border-[#2a2a3d] hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow hover:border-[#3d3d5c] duration-300 rounded-2xl p-8">
              <h2 className="text-base font-medium bg-gradient-to-r from-white via-[#FF9FFC] to-[#A855F7] bg-clip-text text-transparent mb-5.5">
                Send Message
              </h2>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2.5">
                  <label className="text-xs text-white/90">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    required
                    className="backdrop-blur-sm bg-white/20 rounded-lg px-4 py-3 text-sm text-white/80 placeholder-zinc-400 outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <label className="text-xs text-white/90">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Enter your email"
                    required
                    className="backdrop-blur-sm bg-white/20 text-white/80 rounded-lg px-4 py-3 text-sm placeholder-zinc-400 outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <label className="text-xs text-white/90">Message</label>
                  <textarea
                    name="message"
                    placeholder="Your message.."
                    rows="4"
                    required
                    className="backdrop-blur-sm bg-white/20 text-white/80 rounded-lg px-4 py-3 text-sm  placeholder-zinc-400 outline-none focus:border-zinc-500  transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-white via-[#FF9FFC] to-[#A855F7] text-black font-medium text-base py-3 rounded-lg transition-colors cursor-pointer mt-1 hover:opacity-90"
                >
                  Send Message
                </button>
                {status && (
                  <p className="text-sm text-white/70 text-center mt-1">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
