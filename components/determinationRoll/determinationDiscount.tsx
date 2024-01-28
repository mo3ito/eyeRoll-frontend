import { useState, useEffect, useContext, Dispatch, SetStateAction } from 'react';
import ModalDefault from '../modal/modalDefault';
import { Wheel } from 'react-custom-roulette';
import useGetUserId from '@/hooks/useGetUserId';
import { AuthContext } from '@/context/authContext';
import { InfosProps } from '@/types/authentication';
import senderWithAuthId from '@/services/senderWithAuthId';
import LoadingPage from '../loading/loadingPage';
import { useQuery} from "@tanstack/react-query";
import { v4 as uuidv4 } from 'uuid';
import updaterWithId from '@/services/updaterWithId';
import { toast } from 'react-toastify';
import { USERS_GET_DISCOUNT_EYEROLL , GET_ROLL_USER } from '@/routeApi/endpoints';
import { DeterminationRollProps , dataArrayType , InformationDiscountType  } from '@/types/rollType/determinationRoll';



export default function DeterminationDiscount({ isShowModal, setIsShowModal , businessOwnerId , setIsGrabDiscountToday , isActiveDiscount , setIsActiveDiscount , fixedDiscount , setFixedDiscount , isFixedDiscountToSave , setIsFixedDiscountToSave  }: DeterminationRollProps) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [minPercentageDiscount, setMinPercentageDiscount] =useState(0);
  const [maxPercentageDiscount , setMaxPercentageDiscount]=useState(0)
  const [numberSlice , setNumberSlice]=useState(0)
  const [dataArray , setDataArray]=useState<dataArrayType[]>([])
  const [discount , setDiscount]=useState(0)
  const {infos , login} = useContext(AuthContext)
  const [isCloseOutModalClick , setIsCloseOutModalClick]=useState(true)
  const {userId} = useGetUserId(infos as InfosProps)
  const queryKey = ['getRollUser'];
  const [informationDiscount , setInformationDiscount ]=useState<InformationDiscountType | {}>({})
  const [isShowWheelBox , setIsShowWheelBox]=useState<boolean>(true)
  const [isShowReward , setIsShowReward]=useState<boolean>(false)
  console.log(userId);

  const {data:getRollData , isLoading}=useQuery(businessOwnerId && userId ? queryKey : [],()=>{
    if (businessOwnerId && userId ) {
      const body = {
        user_id:userId,
        businessOwner_id: businessOwnerId
        }
      return senderWithAuthId( GET_ROLL_USER ,body,userId)
    }
    return null
 
  })

  useEffect(()=>{
    if(getRollData?.data ){
      if(getRollData?.data?.minPercentageDiscount === null && getRollData?.data?.maxPercentageDiscount === null){
        setIsActiveDiscount(false)
      }else{
        setMinPercentageDiscount(Number(getRollData?.data?.minPercentageDiscount) )
        setMaxPercentageDiscount(Number(getRollData?.data?.maxPercentageDiscount) )
        setIsActiveDiscount(true)
      }
    }
  },[getRollData])

  useEffect(()=>{
    if(minPercentageDiscount && maxPercentageDiscount && maxPercentageDiscount > minPercentageDiscount){
     return setNumberSlice(maxPercentageDiscount - minPercentageDiscount)
    } else if(minPercentageDiscount && maxPercentageDiscount && minPercentageDiscount === maxPercentageDiscount){
      return setFixedDiscount(true)
    }
  },[minPercentageDiscount , maxPercentageDiscount])

    
  // const getRandomLightColor = ()=>{
  //   const minColorValue = 240; // مقدار حداقل برای رنگهای روشن
  //   const randomColor = Math.floor(Math.random() * (16777215 - minColorValue) + minColorValue).toString(16);
  //   return "#" + randomColor;
  // }
  const getRandomLightColor = () => {
    const customColors = ["#fcd34d", "#bef264", "#6ee7b7", "#7dd3fc", "#a5b4fc", "#f9a8d4" , "#d8b4fe" , "#fda4af" , "#fca5a5" , "#fcd34d" , "#86efac" , "#5eead4"];
    const randomIndex = Math.floor(Math.random() * customColors.length);
    return customColors[randomIndex];
  };
  

  useEffect(()=>{
    if(numberSlice > 0){
      const data : dataArrayType[] = Array.from({ length: numberSlice+1 }).map((item, index) => ({
        option: `${minPercentageDiscount + index}%`,
        style: { backgroundColor: getRandomLightColor() },
      }));
      setDataArray(data)
    }
  },[numberSlice])

  
  console.log(minPercentageDiscount);
  console.log(maxPercentageDiscount);
  console.log("numberSlice:",numberSlice);
  console.log(dataArray);
  
  const handleSpinClick = async () => {
    if (!mustSpin) {
      setIsCloseOutModalClick(false)
      const randomDiscount = await Math.floor(Math.random() * (maxPercentageDiscount - minPercentageDiscount + 1)) + minPercentageDiscount;;
     await setPrizeNumber(randomDiscount - minPercentageDiscount)
     await setMustSpin(true);
     setDiscount(randomDiscount)
     const informationDiscount : InformationDiscountType = {
      id: uuidv4(),
      businessOwnerId:getRollData?.data.businessOwnerId,
      discount: `${randomDiscount}%`,
      startTime:getRollData?.data.first_time,
      endTime:getRollData?.data.last_time,
      address:getRollData?.data.address,
      brandName:getRollData?.data.brand_name,
      workPhone:getRollData?.data.work_phone,
      validDate:getRollData?.data.validDate
     }
    await setInformationDiscount(informationDiscount)
     
     try {
      const response = await updaterWithId( USERS_GET_DISCOUNT_EYEROLL , userId , informationDiscount )
      if(response?.status === 200){
        console.log(response);
        await login(response?.data.userInfos , response?.data.token)
       await setIsGrabDiscountToday(true)
      }
     } catch (error : any) {
          if (error?.response.status === 400) {
            const errorMessage = error.response.data.message;
            toast.error(errorMessage);
          } else {
            toast.error("An error occurred while processing your request");
          }
     }
    }
  };

  useEffect(()=>{
    const sendInformation = async ()=>{
      if(isFixedDiscountToSave && getRollData?.data){
        const informationDiscount : InformationDiscountType = {
          id: uuidv4(),
          businessOwnerId:getRollData?.data.businessOwnerId,
          discount: `${getRollData?.data.minPercentageDiscount}%`,
          startTime:getRollData?.data.first_time,
          endTime:getRollData?.data.last_time,
          address:getRollData?.data.address,
          brandName:getRollData?.data.brand_name,
          workPhone:getRollData?.data.work_phone,
          validDate:getRollData?.data.validDate
         }
        await setInformationDiscount(informationDiscount)

        try {
          const response = await updaterWithId( USERS_GET_DISCOUNT_EYEROLL , userId , informationDiscount )
          if(response?.status === 200){
            console.log(response);
            await login(response?.data.userInfos , response?.data.token)
           await setIsGrabDiscountToday(true)
           await setIsFixedDiscountToSave(false)
          }
         } catch (error : any) {
              if (error?.response.status === 400) {
                const errorMessage = error.response.data.message;
                toast.error(errorMessage);
              } else {
                toast.error("An error occurred while processing your request");
              }
         }
    }
  
    }

    sendInformation()

  },[isFixedDiscountToSave , getRollData])
  
  
  console.log(informationDiscount);
  

  console.log(infos);
  

  useEffect(()=>{
    if(!isShowModal){
      setMustSpin(false)
    }
  },[isShowModal])

  console.log("discount" , discount);
  
  if(!userId && !businessOwnerId && isLoading ){
    return <LoadingPage/>
  }

  return (
    <>
    { isActiveDiscount && <ModalDefault
      isCloseIcon={false}
      isShowModal={isShowModal}
      setIsShowModal={setIsShowModal}
      isClosOutModalClick={isCloseOutModalClick}
      isSpinner={true}
    >
      {isShowWheelBox && <div className=" w-full h-max overflow-y-hidden p-2  overflow-x-hidden sm:text-lg text-zinc-500 flex flex-col items-center justify-center ">
           
          { !fixedDiscount && getRollData?.data ?  
          
          <>
          
          <p className='py-3 px-1 w-full text-center border  block bg-green-400 text-white font-bold shadow-md '>Roulette chance discount</p>

           <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            // outerBorderColor={"#e879f9"}
            // radiusLineColor={"#e879f9"}
            
            radiusLineWidth={4}
            outerBorderWidth={4}
            textDistance={70}
            data={dataArray}
            onStopSpinning={() => {
              setMustSpin(false);
              setTimeout(()=>{
                setIsShowWheelBox(false)
                setIsShowReward(true)
              setIsCloseOutModalClick(true)
              },1000)
            }}
          /> 
          <button className='bg-fuchsia-400 w-full block mx-auto px-6 py-3  rounded-lg text-white font-bold  ' onClick={handleSpinClick}>try your luck</button>  </> :
          <div className='w-full h-max p-5 text-sm sm:text-base'>
          <div className='w-full h-full  shadow-lg border border-yellow-400 rounded-lg pb-4'>
          <img src="/images/congratulations.png" className='w-48 block mx-auto   ' />
        <img src="/images/dollar.png" className=' w-16 sm:w-20 block mx-auto mb-6 ' />
        <p className='text-center text-base sm:text-lg md:text-xl px-2 leading-10 '>From<span className='text-yellow-600'> {getRollData?.data.first_time}</span> to <span className='text-yellow-600 '>{getRollData?.data.last_time}</span>  today, all <span className='text-red-600 text-base sm:text-lg md:text-xl '>{getRollData?.data.brand_name}</span> products include a <span className='text-yellow-600 animate-bounce inline-block'>{minPercentageDiscount}%</span> fixed discount</p>
     
        </div>
        </div>}
      </div>}
      { isShowReward && <div className='w-full h-max p-5'>
        <div className='w-full h-full  shadow-lg border border-yellow-400 rounded-lg pb-4'>
        <img src="/images/congratulations.png" className='w-48 block mx-auto   ' />
      <img src="/images/dollar.png" className='w-20 block mx-auto mb-6 ' />
      <div className=' text-base sm:text-lg md:text-xl'>
      <p className='text-center '>You got a <span className='text-yellow-600 text-2xl animate-bounce inline-block'>{ typeof informationDiscount === "object" && "discount" in informationDiscount ? informationDiscount?.discount : ""}</span>  discount from <span className='text-red-600'>{ typeof informationDiscount === "object" && "brandName" in informationDiscount ? informationDiscount?.brandName : ""}</span> </p>
      <p className='text-center' >Deadline to use until   <span className='text-yellow-600'>
    {typeof informationDiscount === 'object' && 'endTime' in informationDiscount
      ? informationDiscount.endTime
      : ''}
  </span> today</p>
      </div>
      </div>
      </div>}
     
    </ModalDefault>}
    </>
  );
}