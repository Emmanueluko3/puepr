"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // optional icon, replace if needed

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50 flex items-center justify-center 
        w-12 h-12 rounded-full shadow-lg bg-primary-500 text-white
        transition-all duration-300 hover:bg-primary-800 cursor-pointer
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ArrowUp size={20} />
    </button>
  );
};
