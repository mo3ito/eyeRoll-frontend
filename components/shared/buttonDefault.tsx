
import React from 'react'
import Loading from '../loading/loading'
import { ButtonDefaultProps } from '@/types/buttonsType'

const ButtonDefault = ({className , text , title , loading=false , onClick} : ButtonDefaultProps) => {
  return (
    <button
      title={title}
      className={`p-2 bg-purple-600  hover:bg-purple-700 flex items-center justify-center gap-x-2 text-white ${className}`}
      onClick={onClick}
    >
      {text}
      {loading && <Loading />}
    </button>
  )
}

export default ButtonDefault;