import React from "react";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";

export default function SocialIcon() {
  return (
    <div className="flex gap-10">
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-end justify-between gap-2"
      >
        <RiGithubLine className="text-2xl font-extralight" />

        <span className="text-sm font-extralight">Github</span>
      </a>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-end justify-between gap-2 "
      >
        <RiLinkedinLine className="text-2xl font-extralight" />
        <span className="text-sm font-extralight">Linkin</span>
      </a>
    </div>
  );
}
