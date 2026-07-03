import React from "react";
import FuzzyText from "../FuzzyText";
const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen text-center px-4">
        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl ">
          <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover>
            404
          </FuzzyText>
        </div>
      </div>
    </>
  );
};

export default NotFound;
