'use client'
import React, { useState , useEffect } from 'react'
import linkHandler from '@/utils/linkHandler';
import { useRouter } from 'next/navigation';
import { Socket } from 'socket.io-client';
import io from "socket.io-client"
import { useQuery} from "@tanstack/react-query";
import getter from '@/services/getter';
import LoadingPage from '@/components/loading/loadingPage';
import useExpireDiscount from '@/hooks/useExpireDiscount';
import { BUSINESSOWNER_SEARCHED_INFOS } from '@/routeApi/endpoints';
import GetDiscountFromUser from '@/components/determinationRoll/getDiscountFromUser';
import EyeSvg from '@/components/svg/eyeSvg';
import RollSvg from '@/components/svg/rollSvg';
import OnlineMenuSvg from '@/components/svg/onlineMenuSvg';

export default function page({params}:{params : {businessOwnerId : string}; searchParams: { search: string }}) {

	const [socket, setSocket] = useState<Socket | null>(null);
    const businessOwnerId = params.businessOwnerId
    const router = useRouter()
	const queryKey = ['businessOwnerInformaton', [businessOwnerId]];
	const [isGetDiscount , setIsGetDiscount]=useState(false)

	useExpireDiscount()
	const{data : businessOwnerInfos , isLoading}=useQuery(businessOwnerId ? queryKey : [] , ()=>{
		if (businessOwnerId ) {
			
			return getter(`${BUSINESSOWNER_SEARCHED_INFOS}/?businessOwnerId=${businessOwnerId}`)
		  }
		  return null
	})

	  useEffect(() => {
      const newSocket = io("http://localhost:5002");
      console.log(newSocket);
      setSocket(newSocket);
      return ()=>{
        newSocket.disconnect()
      }
  }, []);

  console.log("eyeRoll seen",socket);
      
	if(!businessOwnerInfos && isLoading ){
		return <LoadingPage/>
	}
    
  return (
    <div className='translate-y-36  flex justify-center  container mx-auto '>
    <div className=' w-full h-full mx-2 sm:mx-6 p-4 flex flex-col gap-y-20 justify-center  border border-fuchsia-400 rounded-lg'>

      <div className='w-full rounded-lg h-max border bg-sky-50 border-fuchsia-400  p-2 text-sm md:text-base lg:text-lg '>
		<h1 className='w-full bg-fuchsia-400 py-3 text-center font-bold max-xs:text-xs text-sm sm:text-base lg:text-xl  '>{businessOwnerInfos?.data?.brand_name}</h1>
		<p className='py-1'>management : <span className='font-semibold max-xs:text-xs  text-xs md:text-base '>{businessOwnerInfos?.data?.name} {businessOwnerInfos?.data?.last_name}</span> </p>
		<p className='py-1'>country: <span className='font-semibold max-xs:text-xs  text-xs md:text-base '>{businessOwnerInfos?.data?.country_name}</span> </p>
		<p className='py-1'>state: <span className='font-semibold max-xs:text-xs  text-xs md:text-base '>{businessOwnerInfos?.data?.state_name}</span> </p>
		<p className='py-1'>city: <span className='font-semibold max-xs:text-xs  text-xs md:text-base '>{businessOwnerInfos?.data?.city_name}</span> </p>
		<p className='py-1'>work phone: <span className='font-semibold max-xs:text-xs  text-xs md:text-base '>{businessOwnerInfos?.data?.work_phone}</span> </p>
		<p className='py-1'>address: <span className='font-semibold max-xs:text-xs  text-xs md:text-base '>{businessOwnerInfos?.data?.address}</span> </p>
	  </div>

      <ul className='mx-auto w-max max-xs:gap-x-1 gap-x-2 sm:gap-x-6 flex mb-20  text-sm sm:text-base md:text-lg lg:text-xl'>
      	<li className='max-[380px]:w-20 max-[380px]:h-20 w-[112px] h-[112px] sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-60 xl:h-60 2xl:w-64 2xl:h-64 text-center py-10 bg-sky-50 border border-fuchsia-400 cursor-pointer mb-2 rounded-full hoverScale flex flex-col items-center justify-center'>
	  	<EyeSvg className=' w-10 h-10 sm:w-20 sm:h-20  flex-shrink-0 -translate-y-1 md:-translate-y-2'/>
      	<p className=''>Eye</p>
        </li>
        <li onClick={()=>setIsGetDiscount(true) } className='max-[380px]:w-20 max-[380px]:h-20 w-[112px] h-[112px] sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-60 xl:h-60 2xl:w-64 2xl:h-64 text-center py-10 bg-sky-50 border border-fuchsia-400 cursor-pointer mb-2 rounded-full hoverScale flex flex-col items-center justify-center'>
		<RollSvg  className=' w-10 h-10 sm:w-20 sm:h-20  fill-green-500 flex-shrink-0'/>
        <p className='pt-2 '>Roll</p>
        </li>
        <li onClick={()=>linkHandler(`/online-menu/${businessOwnerId}`,router)} className='  overflow-hidden max-[380px]:w-20 max-[380px]:h-20 w-[112px] h-[112px] sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-60 xl:h-60 2xl:w-64 2xl:h-64 text-center py-10 bg-sky-50 border border-fuchsia-400 cursor-pointer mb-2 rounded-full hoverScale flex flex-col items-center justify-center'>
		<OnlineMenuSvg className=' max-[380px]:w-7 max-[380px]:h-7  w-10 h-10 sm:w-20 sm:h-20 flex-shrink-0'/>
        <p className='pt-2  '>Online menu</p>
            </li>
      </ul>
	  <GetDiscountFromUser businessOwnerId={businessOwnerId} isGetDiscount={isGetDiscount} setIsGetDiscount={setIsGetDiscount} />
    </div>
   
    </div>
  )
}
