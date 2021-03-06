import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

import Profile from "../img/utkarsh1.jpg";

const Card = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col justify-center mx-auto bg-slate-200 max-w-xs rounded-xl shadow-xl  p-5 mt-20 dark:bg-[#DFF6FF]">
          <div className="pt-2">
            <img
              className="w-32  mx-auto shadow-xl drop-shadow-sm rounded-full shadow-stone-600/50"
              src={Profile}
              alt="Profile"
            />
          </div>
          <div className="mt-5 text-center">
            <p className="text-center  sm:text-2xl text-gray-900">
              {" "}
              Utkarsh Tiwari
            </p>
            <p className=" text-xs sm:text-base text-gray-600 pt-2 pb-4 w-auto inline-block border-b-2">
              {" "}
              Web Developer / Competitive Programmer
            </p>
            <div className="flex items-center justify-center mt-4">
              <a
                className="m-1 p-1 text-xl  sm:m-2 sm:p-2 hover:bg-black rounded-full hover:text-white transition-colors duration-300"
                href="https://github.com/devutkarsh7565"
              >
                <FaGithub />
                <span class="sr-only">Github</span>
              </a>
              <a
                className="m-1 p-1 text-xl sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
                href="https://www.linkedin.com/in/utkarsh-tiwari-190301203/"
              >
                <FaLinkedinIn />
                <span class="sr-only">Github</span>
              </a>
              <a
                className="m-1 p-1 text-xl sm:m-2 sm:p-2 text-pink-500 hover:bg-pink-500 rounded-full hover:text-white transition-colors duration-300"
                href="https://www.instagram.com/utkarsh3911/"
              >
                <FaInstagram />
                <span class="sr-only">Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
