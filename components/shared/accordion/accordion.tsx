'use client'
import React, { useState  } from 'react'
import { AccordionProps } from '@/types/accordionType/accordionPropsType'
import { useRouter } from 'next/navigation'



export default function Accordion({title , options , setShowAside }:AccordionProps) {
    const [showAccordion , setShowAccordion]=useState<boolean>(false)
    const [showAccordionChild , setShowAccordionChild]=useState<boolean>(false)
    const router = useRouter()

    const linkHandler = (href : string) : void =>{
      router.push(href)
      setShowAside(false)
      setShowAccordion(false)
    }
  
  
  return (
    <div className={`w-full  ${!showAccordion ? '  h-12 ' : 'h-max '}  text-neutral-500  border-t-2  `}>
          <button onClick={()=>setShowAccordion(prev=> !prev)} className='py-3  flex w-full px-6'>
          <span>{title}</span>
          {!showAccordion ? <svg className='inline-block fill-neutral-500 w-5 h-5 ml-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"></path></svg>
         : <svg className='inline-block fill-neutral-500 w-5 h-5 ml-auto' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg>}
          </button>
          <ul className={` ${showAccordion ? 'visible ' : 'invisible'} last:border-b-2`}>
            {options?.map(option=>
                <li key={option.id} onClick={()=>linkHandler(option.href)} className='my-3 px-6 cursor-pointer underline text-neutral-900 decoration-neutral-900 hover:text-sky-500 hover:decoration-sky-500 hover:-translate-y-0.5 hover:duration-500 hover:ease-in-out '>
                    {option.name}
                </li>
                
                )}
          </ul>
        </div>
  )
}






