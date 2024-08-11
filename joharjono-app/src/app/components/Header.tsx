"use client";

import Image from "next/image";
import ModeToggle from "./ModeToggle";
import { useState } from "react";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
  };
  return (
    <div className="flex items-center justify-between space-x-4 mt-10">
      <div className="flex items-end space-x-8 relative">
        <div className="profile-wrapper w-[100px] h-[100px]">
          <Image
            src={isClicked ? "/ps4.jpg" : "/ps3.png"}
            alt="Profile"
            width={90}
            height={90}
            className={`profile cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105 ${
              animate ? "animate-fadeIn" : ""
            }`}
            onClick={handleClick}
            style={{ animation: "custom-profil 5s ease-in-out" }}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="text-xl md:text-4xl font-semibold">Hogo</h1>
          <p className="text-xl font-light">
            Frontend Developer React.js & Next.js
          </p>
        </div>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Header;
