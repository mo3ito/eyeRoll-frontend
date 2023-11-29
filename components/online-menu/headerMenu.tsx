import React from 'react'

export default function HeaderMenu({content}:{content: string}) {
  return (
    <div className="flex items-center pb-4  px-2 ">
           <hr className="flex-grow border-t border-fuchsia-400 mr-4" />
           <p className="text-fuchsia-400 text-xl">{content}</p>
           <hr className="flex-grow border-t border-fuchsia-400 ml-4" />
           </div>
  )
}
