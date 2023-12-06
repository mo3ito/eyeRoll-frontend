"use client";
import React, { useEffect, useState } from "react";

export default function ToTop() {
  const [showToTop, setShowToTop] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (scrollY > 1500) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const toTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={toTopHandler}
      className={`${
        showToTop ? "block" : "hidden"
      } bg-indigo-300 fixed max-xs:right-1  right-2  md:right-3  2xl:right-6 bottom-10 border border-fuchsia-400 rounded-full  p-1  md:p-2 z-50`}
    >
      <svg
        className="w-3 h-3 sm:w-4 sm:h-4   2xl:w-5 2xl:h-5 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"></path>
      </svg>
    </button>
  );
}
