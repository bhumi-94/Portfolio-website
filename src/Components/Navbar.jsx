import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-4 left-1/2 z-50 w-[90%] max-w-6xl -translate-x-1/2 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-md dark:bg-neutral-900/20">
        <div className="mx-auto flex items-center justify-between px-4">
          <div className="text-xl font-bold text-white">
            Bhoomi<span className="text-purple-400">Kaushik</span>
          </div>
          <div className="hidden space-x-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white/60 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button
            onClick={() => {
              navigate("/contact");
            }}
            className="hidden md:block rounded-xl border border-white/20 bg-white/20 px-5 py-2 text-sm text-white hover:bg-white/30"
          >
            Contact me
          </button>
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
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-white/80"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
