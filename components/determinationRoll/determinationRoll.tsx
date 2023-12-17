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

  interface DeterminationRollProps{
    isShowModal: boolean;
    setIsShowModal : Dispatch<SetStateAction<boolean>>;
    businessOwnerId : string;
    setIsGrabRollToday : Dispatch<SetStateAction<boolean>>
  }

  interface dataArrayType{
    option: string;
    style:{backgroundColor : string}
  }

 interface informationDiscountType {
    id: string;
    businessOwnerId: string;
    discount: string;
    startTime: string;
    endTime: string;
    address: string;
    brandName: string;
    workPhone: string;
    validDate: Date;
 }

export default function DeterminationRoll({ isShowModal, setIsShowModal , businessOwnerId , setIsGrabRollToday }: DeterminationRollProps) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [minPercentageDiscount, setMinPercentageDiscount] =useState(0);
  const [maxPercentageDiscount , setMaxPercentageDiscount]=useState(0)
  const [numberSlice , setNumberSlice]=useState(0)
  const [dataArray , setDataArray]=useState<dataArrayType[]>([])
  const [discount , setDiscount]=useState(0)
  const [fixedDiscount , setFixedDiscount]=useState(false)
  const {infos , login} = useContext(AuthContext)
  const [isCloseOutModalClick , setIsCloseOutModalClick]=useState(true)
  const {userId} = useGetUserId(infos as InfosProps)
  const queryKey = ['getRollUser', [businessOwnerId && userId]];
  const [inoformationDiscount , setInformationDiscount ]=useState<informationDiscountType | {}>({})
  console.log(userId);

  const {data:getRollData , isLoading}=useQuery(businessOwnerId && userId ? queryKey : [],()=>{
    if (businessOwnerId && userId ) {
      const body = {
        user_id:userId,
        businessOwner_id: businessOwnerId
        }
      return senderWithAuthId("http://localhost:5000/roll/get-roll",body,userId)
    }
    return null
 
  })

  console.log(getRollData);
  

  useEffect(()=>{
    if(getRollData?.data ){
      setMinPercentageDiscount(Number(getRollData.data?.minPercentageDiscount) )
      setMaxPercentageDiscount(Number(getRollData.data?.maxPercentageDiscount) )
    }
  },[getRollData])

  useEffect(()=>{
    
    if(minPercentageDiscount && maxPercentageDiscount && maxPercentageDiscount > minPercentageDiscount){
     return setNumberSlice(maxPercentageDiscount - minPercentageDiscount)
    } else if(minPercentageDiscount && maxPercentageDiscount && minPercentageDiscount === maxPercentageDiscount){
      return setFixedDiscount(true)
    }
  },[minPercentageDiscount , maxPercentageDiscount])

    
  function getRandomLightColor() {
    const minColorValue = 240; // مقدار حداقل برای رنگهای روشن
    const randomColor = Math.floor(Math.random() * (16777215 - minColorValue) + minColorValue).toString(16);
    return "#" + randomColor;
  }

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
     const informationDiscount : informationDiscountType = {
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
      const response = await updaterWithId("http://localhost:5000/users/get-discount-eyeRoll" , userId , informationDiscount )
      if(response?.status === 200){
        console.log(response);
        await login(response?.data.userInfos , response?.data.token)
       await setIsGrabRollToday(true)
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
  
  console.log(inoformationDiscount);
  

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
    <ModalDefault
      isCloseIcon={false}
      isShowModal={isShowModal}
      setIsShowModal={setIsShowModal}
      isClosOuteModalClick={isCloseOutModalClick}
    >
      <div className=" w-full h-max overflow-y-hidden p-2  overflow-x-hidden sm:text-lg text-zinc-500 flex flex-col items-center justify-center ">
           
          { !fixedDiscount ?  <>
          
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
              setIsCloseOutModalClick(true)
            }}
          /> 
          <button className='bg-fuchsia-400 w-full block mx-auto px-6 py-3  rounded-lg text-white font-bold  ' onClick={handleSpinClick}>try your luck</button>  </> :
          <div className=''>
            <p className='text-center text-xl font-semibold '>congratulation</p>
            <p className='py-10 my-2 rounded-lg shadow-lg px-4 border  '>‍‍‍‍From {getRollData?.data.first_time} to {getRollData?.data.last_time} today, all products include a {minPercentageDiscount}% fixed discount.</p>
          </div>
         
          
          }
         
       
      </div>
     
    </ModalDefault>
  );
}