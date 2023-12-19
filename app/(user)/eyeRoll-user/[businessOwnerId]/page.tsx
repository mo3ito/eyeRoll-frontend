'use client'
import React, { useState , useContext , useEffect } from 'react'
import linkHandler from '@/utils/linkHandler';
import { useRouter } from 'next/navigation';
import DeterminationRoll from '@/components/determinationRoll/determinationRoll';
import { AuthContext } from '@/context/authContext';
import useGetUserId from '@/hooks/useGetUserId';
import { InfosProps } from '@/types/authentication';
import { Socket } from 'socket.io-client';
import io from "socket.io-client"
import { useQuery} from "@tanstack/react-query";
import getter from '@/services/getter';
import LoadingPage from '@/components/loading/loadingPage';
import { toast } from 'react-toastify';
import useExpireDiscount from '@/hooks/useExpireDiscount';

export default function page({params}:{params : {businessOwnerId : string}; searchParams: { search: string }}) {

	const [socket, setSocket] = useState<Socket | null>(null);
    const[isShowGetRoll , setIsShowGetRoll]=useState<boolean>(false)
    const businessOwnerId = params.businessOwnerId
    const router = useRouter()
	const {infos} = useContext(AuthContext)
	const {userId} = useGetUserId(infos as InfosProps)
	const queryKey = ['businessOwnerInformaton', [businessOwnerId]];
	const [isGrabDiscountToday , setIsGrabDiscountToday]=useState<boolean>(true)
	const [isActiveDiscount , setIsActiveDiscount]=useState<boolean>(true)
	const [fixedDiscount , setFixedDiscount]=useState(false)
	const [ isFixedDiscountToSave ,setIsFixedDiscountToSave]=useState(false)
	useExpireDiscount()
	const{data : businessOwnerInfos , isLoading}=useQuery(businessOwnerId ? queryKey : [] , ()=>{
		if (businessOwnerId ) {
			
			return getter(`http://localhost:5000/get-businessOwner-infos-searched/?businessOwnerId=${businessOwnerId}`)
		  }
		  return null
	})

	console.log(businessOwnerInfos);
	
		useEffect(()=>{
			const isGrabRoll = async ()=>{
				if(infos && infos.discounts_eyeRoll){
					const isGrabDiscountToday = await infos.discounts_eyeRoll.some(item=>item.businessOwnerId === businessOwnerId )
					setIsGrabDiscountToday(isGrabDiscountToday)
				}
			}
			isGrabRoll()
		},[infos])

	  useEffect(() => {
      const newSocket = io("http://localhost:5002");
      console.log(newSocket);
      setSocket(newSocket);
      return ()=>{
        newSocket.disconnect()
      }
  }, []);

  console.log("eyeRoll seen",socket);
  
    
	const getRollHandler = async ()=>{
		if(!userId){
			router.push("/register-user/login")
		}else{

			if(isGrabDiscountToday){
			return	toast("You have tryed your chance today")
			}else if(!isActiveDiscount){
			return	toast("The chance has expired or the business owner has not offered a discount")
			} else if(fixedDiscount && !isGrabDiscountToday){
				await setIsFixedDiscountToSave(true)
				setIsShowGetRoll(true)
			}
			else{
				setIsShowGetRoll(true)
			}
		}
	}


    
	if(!businessOwnerInfos && isLoading && !infos){
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
       
      <li className='max-[350px]:w-20 max-[350px]:h-20 w-[112px] h-[112px] sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-60 xl:h-60 2xl:w-64 2xl:h-64 text-center py-10 bg-sky-50 border border-fuchsia-400 cursor-pointer mb-2 rounded-full hoverScale flex flex-col items-center justify-center'>
      <svg className=' w-10 h-10 sm:w-20 sm:h-20 !fill-blue-400 flex-shrink-0' version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
	 width="800px" height="800px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" >
<g>
	<path fill="#231F20" d="M63.934,31.645c-0.015-0.037-0.256-0.646-0.74-1.648C60.597,24.627,51.02,8.004,32,8.004
		c-22.568,0-31.842,23.404-31.934,23.641c-0.089,0.231-0.089,0.487,0,0.719C0.158,32.6,9.432,56.004,32,56.004
		c19.01,0,28.587-16.605,31.189-21.983c0.486-1.007,0.729-1.62,0.744-1.657C64.022,32.132,64.022,31.876,63.934,31.645z M32,54.004
		c-19.686,0-28.677-19.123-29.917-22.001C3.321,29.121,12.288,10.004,32,10.004c19.686,0,28.677,19.123,29.917,22.001
		C60.679,34.887,51.712,54.004,32,54.004z"/>
	<path fill="#231F20" d="M32,16.008c-8.837,0-16,7.163-16,16s7.163,16,16,16s16-7.163,16-16S40.837,16.008,32,16.008z M32,46.008
		c-7.732,0-14-6.268-14-14s6.268-14,14-14s14,6.268,14,14S39.732,46.008,32,46.008z"/>
	<path fill="#231F20" d="M32,24.008c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S36.418,24.008,32,24.008z M32,38.008
		c-3.313,0-6-2.687-6-6s2.687-6,6-6s6,2.687,6,6S35.313,38.008,32,38.008z"/>
	<path fill="#231F20" d="M32,28.004c-0.553,0-1,0.447-1,1s0.447,1,1,1c1.104,0,2,0.896,2,2c0,0.553,0.447,1,1,1s1-0.447,1-1
		C36,29.795,34.209,28.004,32,28.004z"/>
</g>
      </svg>
      <p className=''>Eye</p>
        </li>

        <li onClick={getRollHandler } className='max-[350px]:w-20 max-[350px]:h-20 w-[112px] h-[112px] sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-60 xl:h-60 2xl:w-64 2xl:h-64 text-center py-10 bg-sky-50 border border-fuchsia-400 cursor-pointer mb-2 rounded-full hoverScale flex flex-col items-center justify-center'>
        <svg className=' w-10 h-10 sm:w-20 sm:h-20  fill-indigo-400 flex-shrink-0' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 512 512"  >
		<g>
		<path className="st0" d="M464.235,251.211c-0.789-34.448-9.959-66.796-25.517-95.176l0.139-0.074l-2.404-4.15l-2.402-4.143
		l-0.136,0.081c-17.333-28.435-41.227-52.332-69.666-69.666l0.085-0.136l-4.143-2.394l-4.153-2.408l-0.071,0.136
		c-28.378-15.558-60.738-24.728-95.18-25.517v-0.156h-4.789h-4.793v0.156c-34.442,0.79-66.798,9.959-95.166,25.517l-0.078-0.136
		l-4.15,2.408c-0.014,0.007-0.024,0.02-0.037,0.027l-4.102,2.367l0.078,0.136c-28.428,17.334-52.332,41.231-69.662,69.666
		l-0.136-0.081l-2.401,4.143l-2.398,4.15l0.132,0.074c-15.568,28.374-24.738,60.728-25.517,95.176h-0.16V256v4.789h0.16
		c0.779,34.448,9.948,66.802,25.513,95.169l-0.132,0.074l2.398,4.157l2.401,4.142l0.137-0.088
		c17.333,28.442,41.234,52.339,69.663,69.673l-0.079,0.136l4.102,2.368c0.013,0.007,0.024,0.02,0.038,0.027l4.15,2.408l0.082-0.136
		c28.367,15.551,60.724,24.721,95.166,25.516v0.157h4.793h4.789v-0.157c34.442-0.796,66.796-9.966,95.17-25.516l0.072,0.136
		l4.156-2.408l4.143-2.395l-0.079-0.136c28.432-17.334,52.333-41.231,69.666-69.673l0.136,0.088l2.402-4.142l2.404-4.157
		l-0.139-0.074c15.558-28.367,24.728-60.721,25.517-95.169h0.156V256v-4.789H464.235z M378.95,179.476l-35.836,20.687
		c-8.062-12.558-18.735-23.224-31.289-31.279l20.694-35.83C351.321,144.776,367.215,160.681,378.95,179.476z M400.759,260.789
		c-0.752,22.904-6.816,44.415-17.007,63.448l-35.836-20.701c6.708-12.898,10.803-27.374,11.517-42.748H400.759z M260.787,101.504
		V57.348c32.725,0.782,63.411,9.476,90.384,24.231l-22.085,38.238l-0.072,0.136c-20.432-11-43.598-17.538-68.227-18.293V101.504z
		 M251.206,111.246v41.32c-15.37,0.707-29.843,4.809-42.748,11.517l-20.681-35.837C206.791,118.062,228.301,111.994,251.206,111.246
		z M152.54,86.382l22.153,38.367c-20.258,12.578-37.36,29.674-49.938,49.945l-0.139-0.089h-0.004L86.38,152.538
		C102.87,125.572,125.571,102.872,152.54,86.382z M164.081,208.456c-6.708,12.904-10.803,27.381-11.517,42.755H111.24
		c0.752-22.912,6.82-44.415,17.007-63.448l33.088,19.109L164.081,208.456z M119.819,329.088l-38.245,22.081
		c-14.751-26.973-23.445-57.659-24.224-90.38h44.153h0.16c0.755,24.625,7.296,47.795,18.286,68.224l-0.132,0.075H119.819z
		 M133.047,332.517l35.833-20.688c8.068,12.558,18.738,23.224,31.289,31.286l-20.688,35.837
		C160.676,367.224,144.782,351.319,133.047,332.517z M251.206,410.496v44.149c-32.718-0.782-63.407-9.476-90.377-24.224
		l22.153-38.368c20.425,10.994,43.592,17.524,68.224,18.286V410.496z M255.998,350.02c-17.129-0.007-33.116-4.653-46.962-12.66
		c-14.266-8.259-26.139-20.13-34.394-34.394c-8.014-13.85-12.656-29.836-12.66-46.966c0.004-17.129,4.646-33.115,12.66-46.973
		c8.256-14.265,20.129-26.129,34.394-34.387c13.847-8.014,29.833-12.653,46.962-12.66c17.129,0,33.122,4.653,46.962,12.66
		l0.041,0.027c14.248,8.245,26.112,20.108,34.36,34.36c8.006,13.858,12.653,29.844,12.66,46.973
		c-0.007,17.129-4.653,33.115-12.66,46.966c-8.262,14.265-20.133,26.136-34.394,34.394
		C289.114,345.367,273.128,350.013,255.998,350.02z M260.787,400.747v-41.32c15.378-0.7,29.85-4.802,42.752-11.51l20.683,35.836
		C305.199,393.938,283.699,400.006,260.787,400.747z M359.456,425.618l-22.078-38.231h0.007l-0.078-0.136
		c20.262-12.585,37.36-29.674,49.934-49.945l0.137,0.088v-0.007l1.323,0.762l36.922,21.312
		C409.13,386.42,386.42,409.135,359.456,425.618z M410.497,251.211h-0.157c-0.758-24.632-7.306-47.795-18.295-68.23l38.374-22.15
		c14.751,26.972,23.452,57.652,24.234,90.38H410.497z"/>
		<path className="st0" d="M255.998,0.002C114.611,0.009,0.007,114.62,0,256c0.007,141.387,114.611,255.991,255.998,255.998
		C397.378,511.991,511.993,397.387,512,256C511.993,114.62,397.378,0.009,255.998,0.002z M424.306,424.312
		c-43.102,43.095-102.553,69.714-168.308,69.721c-65.761-0.007-125.21-26.626-168.315-69.721
		C44.595,381.21,17.966,321.754,17.962,256c0.004-65.755,26.633-125.203,69.721-168.312
		c43.105-43.095,102.554-69.721,168.315-69.721c65.755,0,125.206,26.626,168.308,69.721
		c43.098,43.108,69.721,102.556,69.728,168.312C494.027,321.754,467.405,381.21,424.306,424.312z"/>
		<path className="st0" d="M321.124,256c0-9.17-7.428-16.592-16.598-16.592c-6.078,0-11.374,3.285-14.262,8.156h-25.826v-25.823
		c4.868-2.891,8.16-8.184,8.16-14.272c0-9.17-7.432-16.591-16.598-16.591c-9.17,0-16.595,7.421-16.595,16.591
		c0,6.088,3.292,11.381,8.156,14.272v25.823h-25.823c-2.888-4.871-8.18-8.156-14.265-8.156c-9.17,0-16.598,7.422-16.598,16.592
		c0,9.17,7.428,16.592,16.598,16.592c6.084,0,11.377-3.286,14.265-8.156h25.823v25.823c-4.864,2.891-8.156,8.184-8.156,14.265
		c0,9.17,7.425,16.598,16.595,16.598c9.166,0,16.598-7.428,16.598-16.598c0-6.081-3.292-11.374-8.16-14.265v-25.823h25.826
		c2.888,4.87,8.184,8.156,14.262,8.156C313.695,272.592,321.124,265.17,321.124,256z"/>
		<path className="st0" d="M224.927,148.715c6.198,0,11.225-5.027,11.225-11.231c0-6.197-5.027-11.224-11.225-11.224
		c-6.204,0-11.228,5.028-11.228,11.224C213.699,143.688,218.723,148.715,224.927,148.715z"/>
		</g>
        </svg>
        <p className='pt-2 '>Roll</p>
      
        </li>
        <li onClick={()=>linkHandler(`/online-menu/${businessOwnerId}`,router)} className='  overflow-hidden max-[350px]:w-20 max-[350px]:h-20 w-[112px] h-[112px] sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-60 xl:h-60 2xl:w-64 2xl:h-64 text-center py-10 bg-sky-50 border border-fuchsia-400 cursor-pointer mb-2 rounded-full hoverScale flex flex-col items-center justify-center'>
           <svg className=' max-[350px]:w-7 max-[350px]:h-7  w-10 h-10 sm:w-20 sm:h-20 flex-shrink-0' viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><rect fill="#ffffff" height="60" rx="10" width="60"/><rect fill="#f1f3f4" height="44" width="36" x="12" y="8"/><path d="M48,53.5H12A1.5,1.5,0,0,1,10.5,52V8A1.5,1.5,0,0,1,12,6.5H48A1.5,1.5,0,0,1,49.5,8V52A1.5,1.5,0,0,1,48,53.5Zm-34.5-3h33V9.5h-33Z" fill="#aaadbf"/><circle cx="22" cy="18" fill="#ffe1a0" r="4"/><path d="M22,23.5A5.5,5.5,0,1,1,27.5,18,5.507,5.507,0,0,1,22,23.5Zm0-8A2.5,2.5,0,1,0,24.5,18,2.5,2.5,0,0,0,22,15.5Z" fill="#f29580"/><circle cx="22" cy="30" fill="#bec6f4" r="4"/><path d="M22,35.5A5.5,5.5,0,1,1,27.5,30,5.507,5.507,0,0,1,22,35.5Zm0-8A2.5,2.5,0,1,0,24.5,30,2.5,2.5,0,0,0,22,27.5Z" fill="#8d9cf4"/><circle cx="22" cy="42" fill="#c1f7fd" r="4"/><path d="M22,47.5A5.5,5.5,0,1,1,27.5,42,5.507,5.507,0,0,1,22,47.5Zm0-8A2.5,2.5,0,1,0,24.5,42,2.5,2.5,0,0,0,22,39.5Z" fill="#7bcdd1"/><path d="M42,19.5H32a1.5,1.5,0,0,1,0-3H42a1.5,1.5,0,0,1,0,3Z" fill="#aaadbf"/><path d="M42,31.5H32a1.5,1.5,0,0,1,0-3H42a1.5,1.5,0,0,1,0,3Z" fill="#aaadbf"/><path d="M42,43.5H32a1.5,1.5,0,0,1,0-3H42a1.5,1.5,0,0,1,0,3Z" fill="#aaadbf"/><path d="M12,53.5A1.5,1.5,0,0,1,10.5,52V8A1.5,1.5,0,0,1,12,6.5H48a1.5,1.5,0,0,1,0,3H13.5V52A1.5,1.5,0,0,1,12,53.5Z" fill="#eac8c9"/></svg>
          <p className='pt-2  '>Online menu</p>
            </li>
      </ul>
	  <DeterminationRoll setIsFixedDiscountToSave={setIsFixedDiscountToSave} isFixedDiscountToSave={isFixedDiscountToSave} fixedDiscount={fixedDiscount} setFixedDiscount={setFixedDiscount} isActiveDiscount={isActiveDiscount} setIsActiveDiscount={setIsActiveDiscount} isShowModal={isShowGetRoll} setIsShowModal={setIsShowGetRoll} businessOwnerId={businessOwnerId} setIsGrabDiscountToday={setIsGrabDiscountToday} />
    </div>
   
    </div>
  )
}
