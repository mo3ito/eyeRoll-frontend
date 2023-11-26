'use client'
import React, { useRef, useState , useEffect } from 'react';
import { Swiper, SwiperSlide , SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination  } from 'swiper/modules';
import { Socket } from 'socket.io-client';
import io from "socket.io-client"




export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isShowMenu , setIsShowMenu]=useState<boolean>(true)
  const swiperRef = useRef< SwiperRef | null>(null)
  
  


  useEffect(() => {
    
      const newSocket = io("http://localhost:5001");
      console.log(newSocket);
      
      setSocket(newSocket);
    
      return ()=>{
        newSocket.disconnect()
      }

  }, []);

  console.log(socket);
  const prevSlideHandler = ()=>{
    if(swiperRef.current && swiperRef.current.swiper){
      swiperRef.current.swiper.slidePrev();
    }
    
  }

  const nextSlideHandler = ()=>{
    if(swiperRef.current && swiperRef.current.swiper){
      swiperRef.current.swiper.slideNext();
    }
  }
  

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
        <button onClick={()=>setIsShowMenu(true)} className={`${isShowMenu ? 'border-fuchsia-700 border-b-2' : 'border-fuchsia-400'} w-1/2  py-2`}>show menu</button>
        <button onClick={()=>setIsShowMenu(false)} className={`${!isShowMenu ? 'border-fuchsia-700 border-b-2' : 'border-fuchsia-400'} w-1/2  py-2`}>show information</button>
        </div>

        <div className='container mx-auto px-3 '>
        { isShowMenu ? <>
        <div className='w-full h-12  bg-sky-50 flex mt-4 rounded-lg '>
        <button onClick={prevSlideHandler} className='ml-2 mt-1 flex-shrink-0 mr-auto w-10 h-10 rounded-full bg-indigo-300 border border-fuchsia-400 flex items-center justify-center cursor-pointer'>
        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
        </button>



        <div className=' w-9/12 sm:w-10/12 xl:w-11/12 h-full px-2 py-2'>
        <Swiper
        ref={swiperRef}
        className="  h-full  flex items-center justify-center"
        slidesPerView={8}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
      >
        
        <SwiperSlide className=' bg-indigo-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-indigo-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-indigo-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-indigo-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-indigo-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-indigo-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-indigo-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-indigo-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-indigo-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-indigo-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-indigo-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
        <SwiperSlide className=' bg-indigo-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-32 !flex !items-center !justify-center'>hot sandwich</SwiperSlide>
       
      </Swiper>
        </div>


        <button onClick={nextSlideHandler} className=' flex-shrink-0 mt-1 w-10 h-10 bg-indigo-300 border border-fuchsia-400 ml-auto mr-2 rounded-full  flex items-center justify-center cursor-pointer'>
        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>
        </button>
        </div>

      <div className='  my-4   flex items-center h-10 gap-x-2'>
        <div className='flex bg-sky-50 px-2 items-center border border-fuchsia-400 rounded-lg w-2/3 h-full'>
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

      <div className='w-full bg-sky-50 rounded-lg h-max mb-10 px-4 py-2 '>

        <div className="flex items-center  px-3 ">
        <hr className="flex-grow border-t border-fuchsia-400 mr-4" />
        <p className="text-fuchsia-400 text-xl">pizza</p>
        <hr className="flex-grow border-t border-fuchsia-400 ml-4" />
        </div>

        <div className='w-full  h-max flex justify-around flex-wrap gap-y-8 pt-12'>


        <div className='w-[480px] h-44 border border-fuchsia-400 rounded-lg p-2 flex bg-indigo-100'>
          <div className='w-5/12 h-full bg-red-50'>
          <img src="/images/pizza.jpg" className='w-full h-full object-cover' alt="" />
          </div>
          <div className='w-8/12 px-2 h-full  pt-8'>
          <p className='pb-3'>pizza peperoni</p>
          <p className='pb-3 truncate'> <span>details:</span> meat cow 70% , red-potato</p>
          <p className='pb-3'>14:5 $</p>
          </div>
        </div>

        <div className='w-[480px] h-44 border border-fuchsia-400 rounded-lg p-2 flex bg-indigo-100'>
          <div className='w-5/12 h-full bg-red-50'>
          <img src="/images/pizza.jpg" className='w-full h-full object-cover' alt="" />
          </div>
          <div className='w-8/12 px-2 h-full  pt-8'>
          <p className='pb-3'>pizza peperoni</p>
          <p className='pb-3 truncate'> <span>details:</span> meat cow 70% , red-potato</p>
          <p className='pb-3'>14:5 $</p>
          </div>
        </div>

        <div className='w-[480px] h-44 border border-fuchsia-400 rounded-lg p-2 flex bg-indigo-100'>
          <div className='w-5/12 h-full bg-red-50'>
          <img src="/images/pizza.jpg" className='w-full h-full object-cover' alt="" />
          </div>
          <div className='w-8/12 px-2 h-full  pt-8'>
          <p className='pb-3'>pizza peperoni</p>
          <p className='pb-3 truncate'> <span>details:</span> meat cow 70% , red-potato</p>
          <p className='pb-3'>14:5 $</p>
          </div>
        </div>

        <div className='w-[480px] h-44 border border-fuchsia-400 rounded-lg p-2 flex bg-indigo-100'>
          <div className='w-5/12 h-full bg-red-50'>
          <img src="/images/pizza.jpg" className='w-full h-full object-cover' alt="" />
          </div>
          <div className='w-8/12 px-2 h-full  pt-8'>
          <p className='pb-3'>pizza peperoni</p>
          <p className='pb-3 truncate'> <span>details:</span> meat cow 70% , red-potato</p>
          <p className='pb-3'>14:5 $</p>
          </div>
        </div>

        <div className='w-[480px] h-44 border border-fuchsia-400 rounded-lg p-2 flex bg-indigo-100'>
          <div className='w-5/12 h-full bg-red-50'>
          <img src="/images/pizza.jpg" className='w-full h-full object-cover' alt="" />
          </div>
          <div className='w-8/12 px-2 h-full  pt-8'>
          <p className='pb-3'>pizza peperoni</p>
          <p className='pb-3 truncate'> <span>details:</span> meat cow 70% , red-potato</p>
          <p className='pb-3'>14:5 $</p>
          </div>
        </div>

        <div className='w-[480px] h-44 border border-fuchsia-400 rounded-lg p-2 flex bg-indigo-100'>
          <div className='w-5/12 h-full bg-red-50'>
          <img src="/images/pizza.jpg" className='w-full h-full object-cover' alt="" />
          </div>
          <div className='w-8/12 px-2 h-full  pt-8'>
          <p className='pb-3'>pizza peperoni</p>
          <p className='pb-3 truncate'> <span>details:</span> meat cow 70% , red-potato</p>
          <p className='pb-3'>14:5 $</p>
          </div>
        </div>


        </div>

      </div>
      </> :

        <div className='w-full h-max  '>

          <div className='divide-y-2 mt-10 border-2 rounded-xl '>
            <div className='py-6 bg-sky-50 px-4 rounded-t-xl'>
            <svg className='w-6 h-6 fill-blue-500 inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
          <span className='ml-3'>0069786857575</span>
            </div>
            <div className='py-6 bg-sky-50 px-4'>
            <svg className='w-6 h-6 fill-yellow-400 inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V0H7V2ZM7 4V9H17V4H7Z"></path></svg>
            <span className='ml-3'>0937884757556</span>
            </div>

            <div className='py-6 bg-sky-50 px-4 rounded-b-xl'>
            <svg className='w-6 h-6 inline-block fill-red-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path></svg>
            <span className='ml-3 break-words'>canada british colombia </span>
            </div>
          
          </div>

        </div>}

      </div>
       
    </div>
  )
}
