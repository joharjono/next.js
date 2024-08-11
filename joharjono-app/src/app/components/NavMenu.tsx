import React from "react";
import Link from "next/link";

export default function NavMenu() {
  return (
    <div className="flex gap-5 items-center">
      <Link
        href="/"
        className="px-4 py-2 box-border border-b-2 border-transparent hover-border-center"
      >
        About
      </Link>
      <Link
        href="/project"
        className="px-4 py-2 box-border border-b-2 border-transparent hover-border-center"
      >
        Project
      </Link>
      <Link
        href="/contact"
        className="px-4 py-2 rounded-sm border border-purple-500 text-sm font-semibold hover:shadow-[4px_4px_0px_0px_rgba(168,85,247,1)] transition duration-300 "
      >
        Contact Me
      </Link>
    </div>
  );
}
