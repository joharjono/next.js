// components/ModeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiSunLine, RiMoonFill } from "react-icons/ri";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-xl focus:outline-none"
    >
      {theme === "dark" ? (
        <RiSunLine className="text-2xl md:text-3xl  " />
      ) : (
        <RiMoonFill className="text-2xl md:text-3xl " />
      )}
    </button>
  );
};

export default ModeToggle;
