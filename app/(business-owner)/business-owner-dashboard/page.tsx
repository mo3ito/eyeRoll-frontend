"use client";
import React, {  useState } from "react";
import Modal from "@/components/modal/modal";
import DiscountCalculator from "@/components/discountCalculator/discountCalculator";
import ModalDefault from "@/components/modal/modalDefault";
import Timer from "@/components/timer/timer";

const DiscountSetting = () => {
  const [isShowModalCalculator, setIsShowModalCalculator] =
    useState<boolean>(false);
  const [isShowCancelModal, setIsShowCancelModal] = useState<boolean>(false);

  return (
    <div className="w-screen h-screen  bg-sky-100 flex items-center gap-x-5 justify-center absolute px-20">
      
      <section className="w-9/12  h-5/6 -translate-y-9 rounded-3xl  flex-wrap gap-4 overflow-y-auto overflow-x-hidden p-8 bg-sky-50">
        <div className="w-full h-20 bg-pink-200 rounded-xl flex items-center px-10 mb-4">
          <svg
            className="w-5 h-5 inline-block fill-zinc-500 mr-2 stroke-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
          </svg>
          <p className="text-lg text-zinc-600 font-semibold ">night wolf</p>

          <div className="ml-auto   flex items-center space-x-4 h-full">
            <div className="flex itesm-center space-x-6">
              <div className=" hoverToUp w-14 h-14 bg-green-300 rounded-full font-semibold text-sm border-4 border-white text-white pt-[14px] pl-2">
                13%
              </div>

              <div className="w-14 h-14 bg-indigo-200 hoverToUp  rounded-full flex items-center justify-center flex-col border-4 border-white">
                <svg
                  className="w-4 h-4 fill-violet-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.5049 2.00293C16.4379 2.00293 18.0049 3.56993 18.0049 5.50293C18.0049 6.04014 17.8839 6.54908 17.6676 7.00397L21.0049 7.00293C21.5572 7.00293 22.0049 7.45064 22.0049 8.00293V12.0029C22.0049 12.5552 21.5572 13.0029 21.0049 13.0029H20.0049V21.0029C20.0049 21.5552 19.5572 22.0029 19.0049 22.0029H5.00488C4.4526 22.0029 4.00488 21.5552 4.00488 21.0029V13.0029H3.00488C2.4526 13.0029 2.00488 12.5552 2.00488 12.0029V8.00293C2.00488 7.45064 2.4526 7.00293 3.00488 7.00293L6.34219 7.00397C6.12591 6.54908 6.00488 6.04014 6.00488 5.50293C6.00488 3.56993 7.57189 2.00293 9.50488 2.00293C10.4849 2.00293 11.3708 2.40569 12.0061 3.05471C12.639 2.40569 13.5249 2.00293 14.5049 2.00293ZM18.0049 13.0029H6.00488V20.0029H18.0049V13.0029ZM20.0049 9.00293H4.00488V11.0029H20.0049V9.00293ZM9.50488 4.00293C8.67646 4.00293 8.00488 4.6745 8.00488 5.50293C8.00488 6.28263 8.59977 6.92338 9.36042 6.99606L9.50488 7.00293H11.0049V5.50293C11.0049 4.72323 10.41 4.08248 9.64934 4.0098L9.50488 4.00293ZM14.5049 4.00293L14.3604 4.0098C13.6473 4.07794 13.0799 4.64536 13.0117 5.35847L13.0049 5.50293V7.00293H14.5049L14.6493 6.99606C15.41 6.92338 16.0049 6.28263 16.0049 5.50293C16.0049 4.72323 15.41 4.08248 14.6493 4.0098L14.5049 4.00293Z"></path>
                </svg>
                <span className="text-violet-500 text-xs">4/8</span>
              </div>

              <Timer
                className="w-14 h-14 bg-purple-300 rounded-full flex items-center justify-center  border-4 border-white hoverToUp"
                classNameTime="text-white font-semibold text-[11px]"
                timeMinutes={20}
              />
            </div>

            <button
              onClick={() => setIsShowModalCalculator(true)}
              className=" flex items-center justify-center hoverToUp text-lg rounded-lg w-max h-max  text-white font-semibold "
            >
              <svg
                className="w-16 h-16 fill-sky-300 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
                />
              </svg>
            </button>
            <button
              onClick={() => setIsShowCancelModal(true)}
              className=" hoverToUp text-lg   text-white font-semibold "
            >
              <svg
                className="w-16 h-16 fill-pink-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button className=" hoverToUp text-lg  rounded-lg text-white font-semibold   ">
              <svg
                className=" fill-orange-200 w-16 h-16 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full h-20 bg-indigo-200 rounded-xl flex items-center px-10 mb-4">
          <svg
            className="w-5 h-5 inline-block fill-zinc-500 mr-2 stroke-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
          </svg>
          <p className="text-lg text-zinc-600 font-semibold ">night wolf</p>
          <div className="ml-auto   flex items-center space-x-4 h-full ">
            <button className="hoverToUp text-lg  rounded-lg text-white font-semibold   ">
              <svg
                className="w-16 h-16 fill-green-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="w-3/12 bg-sky-50 rounded-3xl  -translate-y-9 h-5/6 p-4 overflow-y-auto">
        <div className="bg-indigo-300 w-full h-12 rounded-lg px-4 mb-3 ">
          <p className="inline-block pt-3">sajad lorestani</p>
          <svg
            className="w-4 h-4 inline-block float-right mt-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
          </svg>
        </div>
        <div className="bg-indigo-300 w-full h-12 rounded-lg px-4 mb-3 ">
          <p className="inline-block pt-3">sajad lorestani</p>
          <svg
            className="w-4 h-4 inline-block float-right mt-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
          </svg>
        </div>
      </section>
      <ModalDefault
        closeIconClassName="w-6 h-6 fill-red-400"
        isShowModal={isShowModalCalculator}
        setIsShowModal={setIsShowModalCalculator}
      >
        <DiscountCalculator />
      </ModalDefault>
      <Modal
        cancelHandler={() => setIsShowCancelModal(false)}
        text="Are you sure to delete?"
        isShowModal={isShowCancelModal}
        setIsShowModal={setIsShowCancelModal}
      />
    </div>
  );
};

export default DiscountSetting;
