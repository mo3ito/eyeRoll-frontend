import EyeRollSvg from "../svg/eyeRollSvg";
import OnlineMenuSvg from "../svg/onlineMenuSvg";
import ReportShowBox from "./reportShowBox";
import { showNumberReports } from "@/types/reports/reportsType";

export default function ShowDynamicReports({onlineMenuPageSeen , eyeRollPageSeen , discountTaken }: showNumberReports) {

  return (
  
    <section className=" w-full sm:w-9/12 md:w-7/12 xl:w-8/12  2xl:w-9/12 h-5/6  -translate-y-9 rounded-3xl flex justify-center flex-wrap gap-4 overflow-y-auto overflow-x-hidden px-2 py-8 bg-sky-50">

    <ReportShowBox
    text="view my EyeRoll page"
    reportContent={eyeRollPageSeen}
    icon={<EyeRollSvg className="fill-indigo-600 h-24 w-24"/>}
    />


    <ReportShowBox
    text="view my online menu page"
    reportContent={onlineMenuPageSeen}
    icon={<OnlineMenuSvg className=" w-14 h-14 xl:w-16 xl:h-16  "/>}
    />

<ReportShowBox
    text="number discounts used by the customer"
    reportContent={discountTaken}
    icon={<svg className="w-14 h-14 xl:w-16 xl:h-16 fill-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M10.0544 2.0941C11.1756 1.13856 12.8248 1.13855 13.9461 2.09411L15.2941 3.24286C15.4542 3.37935 15.6533 3.46182 15.8631 3.47856L17.6286 3.61945C19.0971 3.73663 20.2633 4.9028 20.3805 6.37131L20.5214 8.13679C20.5381 8.34654 20.6205 8.54568 20.757 8.70585L21.9058 10.0539C22.8614 11.1751 22.8614 12.8243 21.9058 13.9456L20.757 15.2935C20.6206 15.4537 20.538 15.6529 20.5213 15.8627L20.3805 17.6281C20.2633 19.0967 19.0971 20.2628 17.6286 20.3799L15.8631 20.5208C15.6533 20.5376 15.4542 20.6201 15.2941 20.7566L13.9461 21.9053C12.8248 22.8609 11.1756 22.8608 10.0543 21.9053L8.70631 20.7566C8.54615 20.6201 8.34705 20.5376 8.1373 20.5209L6.37184 20.3799C4.9033 20.2627 3.73716 19.0966 3.61997 17.6281L3.47906 15.8627C3.46232 15.6529 3.37983 15.4538 3.24336 15.2936L2.0946 13.9455C1.13905 12.8243 1.13904 11.1752 2.09458 10.0539L3.24334 8.70589C3.37983 8.54573 3.46234 8.34654 3.47907 8.13678L3.61996 6.3713C3.73714 4.90278 4.90327 3.73665 6.3718 3.61946L8.13729 3.47857C8.34705 3.46183 8.54619 3.37935 8.70636 3.24286L10.0544 2.0941ZM12.6488 3.61632C12.2751 3.29782 11.7253 3.29781 11.3516 3.61632L10.0036 4.76509C9.5231 5.17456 8.92568 5.42201 8.29637 5.47223L6.5309 5.61312C6.04139 5.65219 5.65268 6.04089 5.61362 6.53041L5.47272 8.29593C5.4225 8.92521 5.17505 9.52259 4.76559 10.0031L3.61683 11.3511C3.29832 11.7248 3.29831 12.2746 3.61683 12.6483L4.76559 13.9963C5.17506 14.4768 5.4225 15.0743 5.47275 15.7035L5.61363 17.469C5.65268 17.9585 6.04139 18.3473 6.53092 18.3863L8.29636 18.5272C8.92563 18.5774 9.5231 18.8249 10.0036 19.2344L11.3516 20.3831C11.7254 20.7016 12.2751 20.7016 12.6488 20.3831L13.9969 19.2343C14.4773 18.8249 15.0747 18.5774 15.704 18.5272L17.4695 18.3863C17.959 18.3472 18.3478 17.9585 18.3868 17.469L18.5277 15.7035C18.5779 15.0742 18.8253 14.4768 19.2349 13.9964L20.3836 12.6483C20.7022 12.2746 20.7021 11.7249 20.3836 11.3511L19.2348 10.0031C18.8253 9.52259 18.5779 8.92519 18.5277 8.2959L18.3868 6.53041C18.3478 6.0409 17.959 5.65219 17.4695 5.61312L15.704 5.47224C15.0748 5.42203 14.4773 5.17455 13.9968 4.76508L12.6488 3.61632ZM14.8284 7.75718L16.2426 9.1714L9.17154 16.2425L7.75733 14.8282L14.8284 7.75718ZM10.2322 10.232C9.64641 10.8178 8.69667 10.8178 8.11088 10.232C7.52509 9.6463 7.52509 8.69652 8.11088 8.11073C8.69667 7.52494 9.64641 7.52494 10.2322 8.11073C10.818 8.69652 10.818 9.6463 10.2322 10.232ZM13.7677 15.8889C14.3535 16.4747 15.3032 16.4747 15.889 15.8889C16.4748 15.3031 16.4748 14.3534 15.889 13.7676C15.3032 13.1818 14.3535 13.1818 13.7677 13.7676C13.1819 14.3534 13.1819 15.3031 13.7677 15.8889Z"></path></svg>}
    />
   
    {/* <div className=' max-xs:w-full w-44   lg:w-56 xl:w-72 xl:h-[330px]  bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center justify-around  flex-col py-10 px-4'>
    <div className='text-4xl font-semibold'>12345</div>
    <svg className='w-20 h-20 fill-red-500' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
    <p className='w-full h-max text-center font-semibold'>Number of people who added me to their favorites</p>
    </div>

    <div className=' max-xs:w-full w-44   lg:w-56 xl:w-72 xl:h-[330px]  bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center justify-around  flex-col py-10 px-4'>
    <div className='text-4xl font-semibold'>12345</div>
    <div>
    <svg  className='inline-block h-10 w-10 fill-yellow-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
    <svg  className='inline-block h-12 w-12 fill-yellow-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
    <svg  className='inline-block h-10 w-10 fill-yellow-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
    </div>
    <p className='w-full h-max text-center font-semibold'>The number of people who get a discount</p>
    </div>

    <div className=' max-xs:w-full w-44   lg:w-56 xl:w-72 xl:h-[330px]  bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center justify-around  flex-col py-10 px-4'>
    <div className='text-4xl font-semibold'>25128</div>
    
    <svg className='w-16 h-16 fill-zinc-700' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
    
    <p className='w-full h-max text-center font-semibold'>The number of people who have searched me</p>
    </div>

    <div className=' max-xs:w-full w-44   lg:w-56 xl:w-72 xl:h-[330px]  bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center justify-around  flex-col py-10 px-4'>
    <div className='text-4xl font-semibold'>12519</div>
    <svg className="w-16 h-16 fill-none stroke-zinc-700"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5}  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
    <p className='w-full h-max text-center font-semibold'>Number of people who have used my QR</p>
    </div> */}
    
    <div className=' max-xs:w-full w-44   lg:w-56 xl:w-72 xl:h-[330px]  bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center justify-around  flex-col py-10 px-4'>coming soon</div>
    <div className=' max-xs:w-full w-44   lg:w-56 xl:w-72 xl:h-[330px]  bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center justify-around  flex-col py-10 px-4'>coming soon</div>
    <div className=' max-xs:w-full w-44   lg:w-56 xl:w-72 xl:h-[330px]  bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center justify-around  flex-col py-10 px-4'>coming soon</div>
    <div className=' max-xs:w-full w-44   lg:w-56 xl:w-72 xl:h-[330px]  bg-indigo-100 cursor-pointer rounded-2xl hover:scale-105 duration-200 flex items-center justify-around  flex-col py-10 px-4'>coming soon</div>
    </section>

  
  )
}
