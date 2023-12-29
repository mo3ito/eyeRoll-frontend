import EyeRollSvg from "../svg/eyeRollSvg";
import OnlineMenuSvg from "../svg/onlineMenuSvg";
import ReportShowBox from "./reportShowBox";
interface StatisticsDisplayPropsType {
  onlineMenuPageSeen: string;
  eyeRollPageSeen: string
}

export default function ShowDynamicReports({onlineMenuPageSeen , eyeRollPageSeen }: StatisticsDisplayPropsType) {

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
