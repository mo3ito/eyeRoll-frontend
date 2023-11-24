'use client'
import React, { useRef, useState , useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Socket } from 'socket.io-client';
import io from "socket.io-client"



export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  const [socket, setSocket] = useState<Socket | null>(null);
  


  useEffect(() => {
    if (!socket) { 
      const newSocket = io("http://localhost:5001");
      console.log(newSocket);
      
      setSocket(newSocket);
    }
  }, [socket]);

  console.log(socket);
  

  return (
    <div className='w-full h-max'>
        <div className='w-full h-44 bg-black/30 '>
            <img className='w-full h-full object-cover' src="/images/cafe.jpg" alt="" />
            <div className='w-44 bg-sky-100 shadow-md rounded-md h-20 -translate-y-8 mx-auto'>
                 <p className='text-center  pt-5 text-2xl'>farhang caffe</p>
            </div>
       
        </div>


        <div className='w-full h-max  px-6 flex flex-col space-y-1 py-2 '>
        
        <div className=''>
        <svg className='w-8 h-8 fill-black/50 inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>
        <p className='inline-block text-black/50 text-xl translate-y-0.5 ml-4 '>64</p>
        </div>

        <div className=''>
        <svg className='w-8 h-8 fill-black/50 inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path></svg>
        <p className='inline-block text-black/50 text-xl translate-y-0.5 ml-4 '>11:30 - 22:15</p>
        </div>

        <div className=''>
        <svg className='w-8 h-8 fill-black/50 inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path></svg>
        <p className='inline-block text-black/50 text-xl translate-y-0.5 ml-4 '>Arak ghdosi street</p>
        </div>

        
        <div>
       
        </div>
        </div>

        <Swiper
        
        slidesPerView={8}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
       
        className=" shadow-md h-12 flex items-center justify-center   !px-6 !py-1 border border-purple-400"
      >
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-blue-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
      </Swiper>
       
    </div>
  )
}
