"use client";
import React, { useRef, SetStateAction, Dispatch } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "../shared/icon/closeIcon";

interface ModalProps {
    children : any ;
    isShowModal : boolean ;
    closeIconClassName: string ;
    setIsShowModal : Dispatch<SetStateAction<boolean>>
}

export default function ModalDefault({children , isShowModal , setIsShowModal , closeIconClassName}: ModalProps) {

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
      className="w-screen h-screen  fixed flex items-center justify-center bg-black/40 backdrop-blur-sm  inset-0 z-50 "
    >
      <div className="container max-xs:px-2   mx-auto flex items-center justify-center">

     
      <div
        ref={modalRef}
        className=" relative bg-white -translate-y-20 text-sm sm:text-base max-xs:w-full w-11/12 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 h-2/4   flex justify-center items-center rounded-lg"
      >
        <CloseIcon
          onClick={() => setIsShowModal(false)}
          classNameButton="absolute top-2 right-2 "
          classNameSvg= "w-5 h-5 fill-red-400 sm:w-6 sm:h-6 lg:w-8 lg:h-8 "
        /> 
       <div className="w-full h-full" >{children}</div>
       </div>
       </div>
    </div>
  );

  return isShowModal
    ? createPortal(modalBody, document.body as HTMLElement)
    : null;
}
