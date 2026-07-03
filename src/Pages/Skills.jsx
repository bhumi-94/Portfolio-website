import React from "react";
import front from "../assets/front.png";
import db2 from "../assets/db2.png";
import tools from "../assets/tools.png";
import backend from "../assets/backend.png";

const Skills = () => {
  return (
    <div className="flex flex-col items-center bg-transparent px-4 py-4 mt-30">
      {/* Title */}
      <div className="flex flex-col items-center">
        <h1 className="text-6xl text-center font-bold bg-gradient-to-r from-white via-[#FF9FFC] to-[#A855F7] bg-clip-text text-transparent">
          Technical Arsenal
        </h1>
        <p className="text-sm text-center text-white/70 leading-tight">
          A comprehensive overview of my technical skills and proficiencies
          across various domains of software engineering and AI.
        </p>
      </div>
      {/* cards div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 rounded-2xl p-8">
        {/*--------------------------------------- card-1----------------------------------------------- */}
        <div className="hover:border-[#3d3d5c] shadow-[0_0_30px_rgba(76,61,240,0.15)] hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow duration-300 flex flex-col px-2 py-2 bg-gradient-to-b from-[#0d0d1f]/70 to-[#0a0a18]/90 rounded-2xl border border-[#2a2a3d] min-w-[300px]">
          <img src={front} alt="" className="h-15 w-15" />
          <h1 className="text-white/90 text-xl px-2 mt-2 font-semibold">
            Frontend
          </h1>
          <p className="px-2 text-white/50 ">UI/UX & Interfaces</p>

          {/* component-1*/}
          <div className="mt-5 px-2">
            <h3 className="text-sm text-white/90 px-2 mb-1">Html/Css</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-67"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                95%
              </span>
            </div>
          </div>
          {/* component-2 */}
          <div className="mt-5 px-2">
            <h3 className="text-sm text-white/90 px-2 mb-1">React.js</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-63"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                90%
              </span>
            </div>
          </div>
          {/* component-3 */}
          <div className="mt-5 px-2">
            <h3 className="text-sm text-white/90 px-2 mb-1">Tailwind CSS</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-64"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                92%
              </span>
            </div>
          </div>
          {/* component-4  */}
          <div className="mt-5 px-2 mb-15">
            <h3 className="text-sm text-white/90 px-2 mb-1">JavaScript</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-59"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                85%
              </span>
            </div>
          </div>
        </div>

        {/*--------------------- card-2-------------------------------------------------------- */}

        <div className="hover:border-[#3d3d5c] shadow-[0_0_30px_rgba(76,61,240,0.15)] hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow duration-300 flex flex-col px-2 py-2 bg-gradient-to-b from-[#0d0d1f]/70 to-[#0a0a18]/90 rounded-2xl border border-[#2a2a3d] min-w-[300px]">
          <img src={backend} alt="" className="h-15 w-15" />
          <h1 className="text-white/90 text-xl px-2 mt-2 font-semibold">
            Backend
          </h1>
          <p className="px-2 text-white/50 ">APIs & Server</p>

          {/* component-1*/}
          <div className="mt-5 px-2">
            <h3 className="text-sm text-white/90 px-2 mb-1">Node.js</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-63"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                85%
              </span>
            </div>
          </div>
          {/* component-2 */}
          <div className="mt-5 px-2">
            <h3 className="text-sm text-white/90 px-2 mb-1">Express.js</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-56"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                80%
              </span>
            </div>
          </div>
          {/* component-3 */}
          <div className="mt-5 px-2">
            <h3 className="text-sm text-white/90 px-2 mb-1">RESTful APIs</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-52"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                75%
              </span>
            </div>
          </div>
          {/* component-4  */}
          <div className="mt-5 px-2 mb-15">
            <h3 className="text-sm text-white/90 px-2 mb-1">
              JWT Authentication
            </h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-60"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                87%
              </span>
            </div>
          </div>
        </div>
        {/*---------------------------------------------- card-3 ------------------------------------- */}
        <div className="hover:border-[#3d3d5c] mb- shadow-[0_0_30px_rgba(76,61,240,0.15)] hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow duration-300 flex flex-col px-2 py-2 bg-gradient-to-b from-[#0d0d1f]/70 to-[#0a0a18]/90 rounded-2xl border border-[#2a2a3d] min-w-[300px]">
          <img src={db2} alt="" className="h-15 w-15" />
          <h1 className="text-white/90 text-xl px-2 mt-2 font-semibold">
            Database
          </h1>
          <p className="px-2 text-white/50 ">Data storage & management</p>

          {/* component-1*/}
          <div className="mt-5 px-2">
            <h3 className="text-sm text-white/90 px-2 mb-1">PostgreSQL</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-63"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                90%
              </span>
            </div>
          </div>
          {/* component-2 */}
          <div className="mt-5 px-2">
            <h3 className="text-sm text-white/90 px-2 mb-1">MongoDB</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-59"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                85%
              </span>
            </div>
          </div>
          {/* component-3 */}
          <div className="mt-5 px-2 mb-15">
            <h3 className="text-sm text-white/90 px-2 mb-1">CRUD operations</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-56"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                80%
              </span>
            </div>
          </div>
        </div>
        {/*--------------------------------------------- card-4---------------------------------------- */}
        <div className="hover:border-[#3d3d5c] shadow-[0_0_30px_rgba(76,61,240,0.15)] hover:shadow-[0_0_40px_rgba(76,61,240,0.25)] transition-shadow duration-300 flex flex-col px-2 py-2 bg-gradient-to-b from-[#0d0d1f]/70 to-[#0a0a18]/90 rounded-2xl border border-[#2a2a3d] min-w-[300px]">
          <img src={tools} alt="" className="h-15 w-15" />
          <h1 className="text-white/90 text-xl px-2 mt-2 font-semibold">
            Tools & Platforms
          </h1>
          <p className="px-2 text-white/50 ">Building & shipping tools</p>

          {/* component-1*/}
          <div className="mt-5 px-2">
            <h3 className="text-sm text-white/90 px-2 mb-1">Git & Github</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-67"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                97%
              </span>
            </div>
          </div>
          {/* component-2 */}
          <div className="mt-5 px-2">
            <h3 className="text-sm text-white/90 px-2 mb-1">VS Code</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-63"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                90%
              </span>
            </div>
          </div>
          {/* component-3 */}
          <div className="mt-5 px-2">
            <h3 className="text-sm text-white/90 px-2 mb-1">Vercel</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-56"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                80%
              </span>
            </div>
          </div>
          {/* component-4  */}
          <div className="mt-5 px-2 ">
            <h3 className="text-sm text-white/90 px-2 mb-1">Postman</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-59"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                85%
              </span>
            </div>
          </div>
          {/* component-5 */}
          <div className="mt-5 px-2 mb-15">
            <h3 className="text-sm text-white/90 px-2 mb-1">Figma</h3>
            <div className="relative flex items-center w-70 bg-gray-500/20 h-2 rounded-full">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #A855F7, #FF9FFC, #FFFFFF)",
                }}
                className=" h-2 rounded-full w-56"
              ></div>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                80%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
