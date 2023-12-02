"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { SwiperOnlineMenuProps , AssortmentGrouptype } from "@/types/onlineMenuUser/onlineMenuUser";

export default function SwiperOnlineMenu({ productAssortments, groupHandler }: SwiperOnlineMenuProps) {
  const [isSticky, setIsSticky] = useState(false);
  const swiperRef = useRef<SwiperRef | null>(null);

  const prevSlideHandler = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const nextSlideHandler = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 92) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(productAssortments);
  

  return (
    <div
      className={`${
        isSticky ? "shadow-md rounded-none" : " rounded-lg"
      } w-full h-12  sticky top-[92px] z-50 flex mt-4  px-2 bg-sky-50`}
    >
      <button
        onClick={prevSlideHandler}
        className="  w-7 h-7 mt-[10px]  sm:mt-1 flex-shrink-0 mr-auto  sm:w-10 sm:h-10 rounded-full bg-indigo-300 border border-fuchsia-400 flex items-center justify-center cursor-pointer"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
        </svg>
      </button>

      <div className=" max-xs:w-9/12 w-10/12 sm:w-[87%] md:w-[89%] lg:w-11/12 xl:w-[93%]   h-full px-2 py-2 ">
        <Swiper
          ref={swiperRef}
          className="  h-full  flex items-center justify-center"
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },

            480: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          pagination={{
            clickable: true,
          }}
        >
          {productAssortments.map((productAssortment: AssortmentGrouptype) => (
            <SwiperSlide
              onClick={() => groupHandler(productAssortment.group)}
              key={productAssortment.id}
              className="  bg-indigo-100 text-fuchsia-700 text-sm sm:text-base border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-max !px-2 !flex !items-center !justify-center"
            >
              {productAssortment.group}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button
        onClick={nextSlideHandler}
        className=" flex-shrink-0 sm:mt-1 w-7 h-7 mt-[10px] sm:w-10 sm:h-10  bg-indigo-300 border border-fuchsia-400 ml-auto  rounded-full  flex items-center justify-center cursor-pointer"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path>
        </svg>
      </button>
    </div>
  );
}
