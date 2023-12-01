import React from 'react'

export default function HeaderOnlineMenuPage({setIsShowMenu , isShowMenu , defaultHandler , informationBusiness}) {
  return (
    <>
    <div className='w-full h-32 sm:h-44 bg-black/30 '>
        <img className='w-full h-full object-cover hoverScale' src={informationBusiness?.work_place_image} alt="work place image" />
        <button onClick={defaultHandler} className=' w-16 h-16 sm:w-24 sm:h-24 rounded-full block bg-sky-100 -translate-y-8 sm:-translate-y-12 mx-auto shadow-md '>
             <img src={informationBusiness?.logo_image} className='text-center object-cover w-full h-full rounded-full hoverScale text-2xl'></img>
        </button>
        <p className='text-center -translate-y-8 sm:-translate-y-12 p-2 text-sm sm:text-2xl'>{informationBusiness?.brand_name}</p>
    </div>
    <div className='w-full h-max mt-16 sm:mt-24 max-xs:text-sm text-base sm:text-lg font-semibold container mx-auto px-3'>
    <button onClick={()=>setIsShowMenu(true)} className={`${isShowMenu ? 'border-fuchsia-700 border-b-2' : 'border-fuchsia-400'} w-1/2  py-2`}>show menu</button>
    <button onClick={()=>setIsShowMenu(false)} className={`${!isShowMenu ? 'border-fuchsia-700 border-b-2' : 'border-fuchsia-400'} w-1/2  py-2 `}>show information</button>
    </div>
    </>
  )
}
