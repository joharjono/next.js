import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaSass,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export default function About() {
  return (
    <div className="flex min-h-screen py-12">
      <div className="">
        <h1 className="text-2xl py-5 mb-5 relative underline-quarter max-w-fit">
          About Me
        </h1>

        <div className="grid sm:grid-cols-5 sm:grid-rows-2">
          <p className="text-xl font-normal mb-8 border-slate-500 bg-slate-50 dark:bg-slate-900 p-10 rounded-md border-2 border-dashed sm:col-span-3">
            Hey! I'm a Front-End Developer with a passion for React.js. I enjoy
            creating beautiful, responsive websites using HTML, CSS, and
            JavaScript to deliver smooth user experiences.
          </p>
          <p className="text-xl font-normal mb-8 border-slate-500 bg-slate-50 dark:bg-slate-900 p-10 rounded-md border-2 border-dashed sm:col-start-3 sm:col-span-5">
            Currently, I'm exploring React.js and Next.js, and experimenting
            with TypeScript to enhance my skills. I'm committed to writing
            clean, efficient code and staying updated with the latest tech
            trends.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-2xl py-5 mb-5 relative underline-quarter max-w-fit">
            Tools
          </h2>
          <div className="flex flex-wrap">
            <div className="flex items-center w-1/2 md:w-1/3 p-2">
              <div className="flex items-center p-4 rounded-lg w-full">
                <FaHtml5 className="text-5xl mr-2 text-orange-500 hover:text-orange-600 transition-colors" />
                <span>HTML</span>
              </div>
            </div>
            <div className="flex items-center w-1/2 md:w-1/3 p-2">
              <div className="flex items-center p-4 rounded-lg w-full">
                <FaCss3Alt className="text-5xl mr-2 text-blue-500 hover:text-blue-600 transition-colors" />
                <span>CSS</span>
              </div>
            </div>
            <div className="flex items-center w-1/2 md:w-1/3 p-2">
              <div className="flex items-center p-4 rounded-lg w-full">
                <FaJsSquare className="text-5xl mr-2 text-yellow-500 hover:text-yellow-600 transition-colors" />
                <span>JavaScript (ES6+)</span>
              </div>
            </div>
            <div className="flex items-center w-1/2 md:w-1/3 p-2">
              <div className="flex items-center p-4 rounded-lg w-full">
                <FaSass className="text-5xl mr-2 text-pink-500 hover:text-pink-600 transition-colors" />
                <span>SASS</span>
              </div>
            </div>
            <div className="flex items-center w-1/2 md:w-1/3 p-2">
              <div className="flex items-center p-4 rounded-lg w-full">
                <SiTailwindcss className="text-5xl mr-2 text-blue-400 hover:text-blue-500 transition-colors" />
                <span>Tailwind CSS</span>
              </div>
            </div>
            <div className="flex items-center w-1/2 md:w-1/3 p-2">
              <div className="flex items-center p-4 rounded-lg w-full">
                <FaReact className="text-5xl mr-2 text-blue-600 hover:text-blue-700 transition-colors" />
                <span>React.js</span>
              </div>
            </div>
            <div className="flex items-center w-1/2 md:w-1/3 p-2">
              <div className="flex items-center p-4 rounded-lg w-full">
                <SiNextdotjs className="text-5xl mr-2 hover:text-gray-500 transition-colors" />
                <span>Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
