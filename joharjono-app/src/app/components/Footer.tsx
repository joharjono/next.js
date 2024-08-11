import React from "react";
import Link from "next/link";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import SocialIcon from "./SocialIcon";

function Footer() {
  return (
    <footer className="py-4">
      <div className="flex flex-col md:flex-row justify-between items-center py-3 pt-9">
        <p className="text-base">
          © {new Date().getFullYear()} Joharjono Portfolio. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4">
          <SocialIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
