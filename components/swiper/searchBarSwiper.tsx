"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide, SwiperRef  } from "swiper/react";
import {Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";


export default function SearchBarSwiper() {
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



  

  return (
    
   
  

      
        <Swiper
          ref={swiperRef}
          className="  h-max w-full  "
          slidesPerView={1}
          spaceBetween={10}
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
            768: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1000:{
              slidesPerView: 4,
              spaceBetween: 10,
            }
          }}
          pagination={{
            clickable: true,
          }}
        >
        
            <SwiperSlide
              
             
              className ="!h-20  border border-fuchsia-400 "
            >
             <div className="h-full w-full  flex p-1">
                <img className="w-16 h-full bg-red-200 flex-shrink-0" src="" alt="" />
                <div className=" w-32 h-full pl-3 flex flex-col justify-around">
                <p className="truncate  ">cofe farhang ffffffffffffffffffffffffffff</p>
                <p className="truncate">ghodosi street hhhhhhhhhhhhhhhhhhhhhhhhh</p>
                </div>
             </div>
            </SwiperSlide>

            <SwiperSlide
              
             
              className ="!h-20  border border-fuchsia-400 "
            >
             <div className="h-full w-full  flex p-1">
                <img className="w-16 h-full bg-red-200 flex-shrink-0" src="" alt="" />
                <div className=" w-32 h-full pl-3 flex flex-col justify-around">
                <p className="truncate  ">cofe farhang ffffffffffffffffffffffffffff</p>
                <p className="truncate">ghodosi street hhhhhhhhhhhhhhhhhhhhhhhhh</p>
                </div>
             </div>
            </SwiperSlide>

            <SwiperSlide
              
             
              className ="!h-20  border border-fuchsia-400 "
            >
             <div className="h-full w-full  flex p-1">
                <img className="w-16 h-full bg-red-200 flex-shrink-0" src="" alt="" />
                <div className=" w-32 h-full pl-3 flex flex-col justify-around">
                <p className="truncate  ">cofe farhang ffffffffffffffffffffffffffff</p>
                <p className="truncate">ghodosi street hhhhhhhhhhhhhhhhhhhhhhhhh</p>
                </div>
             </div>
            </SwiperSlide>

            <SwiperSlide
              
             
              className ="!h-20  border border-fuchsia-400 "
            >
             <div className="h-full w-full  flex p-1">
                <img className="w-16 h-full bg-red-200 flex-shrink-0" src="" alt="" />
                <div className=" w-32 h-full pl-3 flex flex-col justify-around">
                <p className="truncate  ">cofe farhang ffffffffffffffffffffffffffff</p>
                <p className="truncate">ghodosi street hhhhhhhhhhhhhhhhhhhhhhhhh</p>
                </div>
             </div>
            </SwiperSlide>
          
        </Swiper>
   


  );
}
