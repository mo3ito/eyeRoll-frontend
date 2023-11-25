'use client'
import React, { useRef, useState , useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Socket } from 'socket.io-client';
import io from "socket.io-client"
import Searcher from '@/components/searcher/searcher';



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
    <div className='w-full h-max pt-24'>
        <div className='w-full h-44 bg-black/30 bg-red-200'>
            <img className='w-full h-full object-cover' src="/images/cafe.jpg" alt="" />
            <div className='w-24 h-24 rounded-full  bg-sky-100 -translate-y-12 mx-auto shadow-md '>
                 <p className='text-center  pt-8 text-2xl'>logo</p>
            </div>
            <p className='text-center  -translate-y-12 p-2 text-2xl'>caffe farhang</p>
        </div>
        <div className='w-full h-max mt-24 text-lg font-semibold container mx-auto'>
        <button className='w-1/2  border-b-2 border-fuchsia-700 py-2 '>show menu</button>
        <button className='w-1/2 border-b border-fuchsia-400  py-2'>show information</button>
        </div>


        {/* <div className='w-full h-max  px-6 flex flex-col space-y-1 py-2 '>
        
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
        </div> */}
        <div className='container mx-auto'>

      
        <Swiper
        className=" shadow-md h-12 flex items-center justify-center  mt-8 !px-6 !py-1 border border-purple-400"
        slidesPerView={8}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
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

      {/* <Searcher items={} setAllItems={}/> */}
      <div className='  my-4   flex items-center h-10 gap-x-2'>
        <div className='flex  px-2 items-center border border-fuchsia-400 rounded-lg w-2/3 h-full'>
        <svg className='w-5 h-5 mr-auto fill-zinc-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
        <input className='w-full bg-transparent outline-none pl-2 text-zinc-400' placeholder='search' type="text" />
        </div>
        <div className='w-1/3 ml-auto   h-full flex items-center px-2 '>
        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3L23 8H20V20H18V8H15L19 3ZM14 18V20H3V18H14ZM14 11V13H3V11H14ZM12 4V6H3V4H12Z"></path></svg>
        <p className='pl-2'>filter</p>

         <div className='ml-4'>
         <button className='border-b-2 border-fuchsia-700 px-2 '>cheapest</button>
        <button className='border-b border-fuchsia-400 px-2'>most expensive</button>
         </div>
      
        </div>
      
      </div>

      <div className='w-full bg-sky-50 rounded-lg h-screen px-4 py-2'>

        {/* <p className='text-red-200'>pizza</p> */}
        <div className="flex items-center ">
        <hr className="flex-grow border-t border-fuchsia-400 mr-4" />
        <p className="text-fuchsia-400 text-lg">pizza</p>
        <hr className="flex-grow border-t border-fuchsia-400 ml-4" />
        </div>

        <div className='w-full  h-max flex justify-around flex-wrap gap-y-8 pt-12'>



        <div className='w-5/12 h-44 border border-fuchsia-400 rounded-lg'>

        </div>

        <div className='w-5/12 h-44 border border-fuchsia-400 rounded-lg'>

        </div>

        <div className='w-5/12 h-44 border border-fuchsia-400 rounded-lg'>

</div>

<div className='w-5/12 h-44 border border-fuchsia-400 rounded-lg'>

</div>





        </div>

      </div>

      </div>
       
    </div>
  )
}
