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
      <div
        ref={modalRef}
        className=" relative bg-sky-100 w-64 sm:w-96 lg:w-[500px] h-64 flex justify-center items-center rounded-lg"
      >
        <CloseIcon
          onClick={() => setIsShowModal(false)}
          classNameButton="absolute top-3 right-3"
          classNameSvg="w-6 h-6"
        />
        <div className="w-full h-full flex flex-col items-center justify-center">
       <p className="mb-6">{text}</p>
       <div className=" w-full text-center">
       <button onClick={cancelHandler}  className="inline-block hover:bg-red-500 bg-red-400 h-10 rounded-lg mr-2 w-1/3" >no</button>
       <button onClick={confirmHandler}  className="inline-block hover:bg-fuchsia-500 bg-fuchsia-400 h-10 rounded-lg ml-2 w-1/3" >yes</button>
       </div>
       
        </div>
      </div>
    </div>
  );

  return isShowModal
    ? createPortal(modalBody, document.body as HTMLElement)
    : null;
}
