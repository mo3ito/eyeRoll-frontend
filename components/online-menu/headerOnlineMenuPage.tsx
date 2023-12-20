import React from 'react'
import { HeaderOnlineMenuPageProps } from '@/types/onlineMenuUser/onlineMenuUser'
import EyeSvg from '../svg/eyeSvg';
import RollSvg from '../svg/rollSvg';

export default function HeaderOnlineMenuPage({setIsShowMenu , isShowMenu , defaultHandler , informationBusiness}: HeaderOnlineMenuPageProps) {
  console.log(informationBusiness);
  
  return (
    <>
    <div className='w-full h-32 sm:h-44 bg-black/30 '>
        <img className='w-full h-full object-cover hoverScale' src={informationBusiness?.work_place_image ? informationBusiness?.work_place_image : "/images/blue-image.jpeg" }  />
        <button onClick={defaultHandler} className=' w-16 h-16 sm:w-24 sm:h-24 rounded-full block bg-sky-100 -translate-y-8 sm:-translate-y-12 mx-auto shadow-md '>
             <img src={informationBusiness?.logo_image ? informationBusiness?.logo_image : "/images/logo-design-1.png"} className='text-center object-cover w-full h-full rounded-full hoverScale text-2xl'></img>
        </button>
        <p className='text-center -translate-y-8 sm:-translate-y-12 p-2 text-sm sm:text-2xl  w-max mx-auto'>{informationBusiness?.brand_name ? informationBusiness?.brand_name  : "your brand name" }</p>
    </div>
    <div className=' container mx-auto flex justify-around  items-center px-4 mt-4 '>
      <button className='shadow-md py-2 w-28 border border-fuchsia-400 rounded-md flex items-center justify-center flex-col'>
        <EyeSvg className='w-16 h-16'/>
        show eye
      </button>
      <button className='text-center h-max  flex items-center justify-center flex-col border border-fuchsia-400 rounded-md shadow-md w-28 py-2'>
        <RollSvg className='w-16 h-16 fill-green-500'/>
        try your roll
        </button>
    </div>
    <div className='w-full h-max mt-10 sm:mt-10 max-xs:text-sm text-base sm:text-lg font-semibold container mx-auto px-3'>
    <button onClick={()=>setIsShowMenu(true)} className={`${isShowMenu ? 'border-fuchsia-700 border-b-2' : 'border-fuchsia-400'} w-1/2  py-2`}>show menu</button>
    <button onClick={()=>setIsShowMenu(false)} className={`${!isShowMenu ? 'border-fuchsia-700 border-b-2' : 'border-fuchsia-400'} w-1/2  py-2 `}>show information</button>
    </div>
    </>
  )
}