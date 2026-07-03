import React from "react";
import MagicBento from "../MagicBento";

const About = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-transparent px-4 py-4 mt-50 ">
        <div>
          <h1 className="text-6xl text-center font-bold bg-gradient-to-r from-white via-[#FF9FFC] to-[#A855F7] bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-sm text-center text-white/70 leading-tight">
            A glimpse into my story, my skills, and what I'm passionate about
          </p>
        </div>
        <div className="">
          <MagicBento
            textAutoHide={true}
            enableStars
            enableSpotlight
            enableBorderGlow={true}
            enableTilt={false}
            enableMagnetism={false}
            clickEffect
            spotlightRadius={400}
            particleCount={12}
            glowColor="132, 0, 255"
            disableAnimations={false}
          />
        </div>
      </div>
    </>
  );
};

export default About;
