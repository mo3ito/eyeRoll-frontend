"use client";
import React, { useEffect, useState, useRef, SetStateAction, Dispatch } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "../shared/icon/closeIcon";

interface ModalProps {
    text : string ;
    isShowModal : boolean ;
    setIsShowModal : Dispatch<SetStateAction<boolean>>;
    confirmHandler? : ()=> void;
    cancelHandler?: ()=> void;

}

export default function Modal({text , isShowModal , setIsShowModal , confirmHandler , cancelHandler  }: ModalProps) {

  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setIsShowModal(false);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  const modalBody = (
    <div
      onClick={handleBackdropClick}
      className="w-screen h-screen  fixed flex items-center justify-center bg-black/40 backdrop-blur-sm  inset-0 z-50  "
    >

<div className="container max-xs:px-2   mx-auto flex items-center justify-center">
<div
        ref={modalRef}
        className=" relative bg-white -translate-y-20 text-sm sm:text-base max-xs:w-full w-11/12 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 h-2/4 py-10  flex justify-center items-center rounded-lg"
      >
        <CloseIcon
          onClick={() => setIsShowModal(false)}
          classNameButton="absolute top-2 right-2 "
          classNameSvg= "w-5 h-5 fill-red-400 sm:w-6 sm:h-6 lg:w-8 lg:h-8 "
        />
        <div className="w-full h-full flex flex-col items-center justify-center">
       <p className="mb-6 text-center ">{text}</p>
       <div className=" w-full text-center">
       <button onClick={cancelHandler}  className="inline-block bg-rose-300 hover:bg-rose-400 h-8  sm:h-10 rounded-lg mr-2 w-1/3" >No</button>
       <button onClick={confirmHandler}  className="inline-block  bg-green-300 hover:bg-green-400 h-8 sm:h-10 rounded-lg ml-2 w-1/3" >Yes</button>
       </div>
       
        </div>
      </div>
      </div>
    </div>
  );

  return isShowModal
    ? createPortal(modalBody, document.body as HTMLElement)
    : null;
}
