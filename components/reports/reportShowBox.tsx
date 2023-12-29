import React, { ReactNode } from 'react'
interface ReportShowBoxPropsType{
  reportContent:string;
  icon?:ReactNode;
  text:string;
}

export default function ReportShowBox({reportContent , icon , text} :ReportShowBoxPropsType ) {
  return (
    <div className=' max-xs:w-full w-44   lg:w-56 xl:w-72 xl:h-[330px]  bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center justify-around  flex-col py-10 px-4'>
    <div className='text-4xl font-semibold'>{reportContent}</div>
    {icon}
    <p className='w-full h-max text-center font-semibold'>{text}</p>
    </div>
  )
}
