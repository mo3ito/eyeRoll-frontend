'use client'
import React, { useState  } from 'react'
import { AccordionProps } from '@/types/accordionType/accordionPropsType'
import { useRouter } from 'next/navigation'




export default function Accordion({title , options , setShowAside }:AccordionProps) {
    const [showAccordion , setShowAccordion]=useState<boolean>(false)
    const [showAccordionChild , setShowAccordionChild]=useState<boolean>(false)
    const router = useRouter()

   
  
    const showChildren = (childOption : object | undefined , href : string )=>{

      if(childOption){
        setShowAccordionChild(prev=> !prev)
      } else{
        router.push(href)
           setShowAside(false)
          setShowAccordion(false)
      }
    }

    const childOptionLinkHandler = (childHref : string )=>{
      router.push(childHref)
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
          {options.map(item=>
             <li key={item.id} onClick={()=>showChildren(item.childOption , item.href)} className='my-3 px-6 cursor-pointer underline  text-neutral-900 decoration-neutral-900 w-full h-full ' >
             <span>{item.name}</span>



             
            
               
               { item.childOption && <> { !showAccordionChild ? <svg className=' fill-neutral-500 w-5 h-5 ml-auto -translate-y-5 mr-6'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"></path></svg>
             :<svg className=' fill-neutral-500 w-5 h-5 ml-auto -translate-y-5 mr-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path></svg>}</>}
            
              
              

              


              { showAccordionChild && <ul>
                {item.childOption && item?.childOption.map(item=>
                  <li key={item.id} onClick={()=>childOptionLinkHandler(item.href)}  className=' px-4 cursor-pointer underline text-neutral-900 decoration-neutral-900 hover:bg-fuchsia-300 py-2 ' >{item.childName}</li>
                  )}
              </ul>}
            </li>
            )}
         </ul>
      </div>

  )
}






