"use client";
import React, { useEffect, useState, useRef, SetStateAction, Dispatch } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "../shared/icon/closeIcon";

interface ModalProps {
    content : string ;
    isShowModal : boolean ;
    setIsShowModal : Dispatch<SetStateAction<boolean>>
}

export default function Modal({content , isShowModal , setIsShowModal}: ModalProps) {

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
      <div
        ref={modalRef}
        className=" relative bg-white w-64 sm:w-96 lg:w-[700px] h-96 flex justify-center items-center rounded-lg"
      >
        <CloseIcon
          onClick={() => setIsShowModal(false)}
          classNameButton="absolute top-3 right-3"
          classNameSvg="w-6 h-6"
        />
        <div>{content}</div>
      </div>
    </div>
  );

  return isShowModal
    ? createPortal(modalBody, document.body as HTMLElement)
    : null;
}