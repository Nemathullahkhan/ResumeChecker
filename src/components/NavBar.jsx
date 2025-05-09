import { NotepadText } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className={` absolute top-0 w-full z-50 transition-all duration-300 }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-x-0.5">
              <NotepadText className="w-7 h-7 " />
              <span className="text-xl font-sans font-semibold ">
                ResumeChecker
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-6 text-md font-medium hover:text-zinc-400 transition-colors">
            Analyse
            <Link to="https://github.com/Nemathullahkhan/ResumeChecker">
              <button className="rounded-full px-6 py-5 font-medium bg-white text-black hover:bg-zinc-200 transition-colors">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
