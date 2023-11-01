"use client";
import React, { useState, useRef, useEffect } from "react";
import LeftMenu from "./leftMenu";
import LinkDefault from "@/components/link/linkDefault";
import HeaderTitleLi from "../headerTitleLi";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import Loading from "@/components/loading/loading";
import logOutHandler from "@/utils/logOutHandler";
import { useRouter } from "next/navigation";


const LayoutDashboard = () => {
  const [showAside, setShowAside] = useState<boolean>(false);
  const leftMenuRef = useRef<HTMLDivElement | null>(null);
  const [showBox , setShowBox] = useState<boolean>(false)
  const { infos } = useContext(AuthContext);
  const router = useRouter()



  


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        leftMenuRef.current &&
        !leftMenuRef.current.contains(event.target as Node)
      ) {
        setShowAside(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showAside]);

  return (
<>
    <header className='h-24 bg-gradient-to-b from-indigo-300 to-sky-100   flex items-center justify-center '>
    <div className=' w-full h-full mx-auto  flex items-center justify-between  px-20 '>
   
    <div className='flex items-center   text-xl h-full space-x-12 w-full '>
    
        <button
          className="iniline-block text-xl   mr-8"
          onClick={() => setShowAside(true)}
        >
          <svg
            className="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </button>


        <ul className="flex space-x-12 h-full">
          
        <li onMouseEnter={()=>setShowBox(true)} className='relative group hover:border-b-4  border-purple-400 h-full flex items-center justify-center cursor-pointer  w-max'>
          <div className='w-max'>
          <img className="w-12 h-12 bg-green-200 inline-block rounded-full mr-2 object-cover" src={infos?.profile_image_path} alt="" />
        <span className=' inline-block mr-1 text-stone-600'>{infos.username}</span>
        <svg className='w-4 h-4 fill-zinc-700 inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 16L6 10H18L12 16Z"></path></svg>
          </div>
          <ul className={`hidden ${ showBox && 'group-hover:block'} text-lg absolute border p-1 border-purple-500 bg-blue-100 z-50 shadow-md  top-24 left-0 h-max  min-w-[176px] w-max  rounded-xl `}>
           
            <li className='px-6 py-2 group/item relative hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white '>
            switch the other account
            <svg className="inline-block w-4 h-4 ml-2 fill-fuchsia-700 group-hover/item:fill-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 12L10 18V6L16 12Z"></path></svg>
            <ul className="absolute  hidden group-hover/item:block left-full min-w-xl max-w-max border border-purple-500 bg-blue-100 p-1 top-0 rounded-lg">
              <li className="px-4 py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white">mostafa</li>
              <li className="px-4 py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white">saj</li>
              <li className="px-4 py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white">rez</li>
            </ul>
              </li>
                <li onClick={()=>logOutHandler(router)} className='px-6 py-2  hover:bg-pink-300 rounded-lg text-fuchsia-700 hover:font-semibold hover:text-white '>
            log out
              </li>
          </ul>
          
        </li>

        <HeaderTitleLi title="Nearest stores" options={[{id:"3" , name:"Ali cafe" , path:"/" } , {id:"4" , name:"joe black" , path:"/"  } ]} />
     
        </ul>
     

    </div>
    <div className='h-10 w-24 text-3xl text-white '>logo</div>
    </div>
  </header>
  <LeftMenu leftMenuRef={leftMenuRef} setShowAside={setShowAside} showAside={showAside} />
  </>
  );
};

export default LayoutDashboard;
