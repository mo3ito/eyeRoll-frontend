import { useState, useEffect, useContext } from 'react';
import ModalDefault from '../modal/modalDefault';
import { Wheel } from 'react-custom-roulette';
import useGetUserId from '@/hooks/useGetUserId';
import { AuthContext } from '@/context/authContext';
import { InfosProps } from '@/types/authentication';
import senderWithAuthId from '@/services/senderWithAuthId';
import LoadingPage from '../loading/loadingPage';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { v4 as uuid } from 'uuid';

export default function DeterminationRoll({ isShowModal, setIsShowModal , businessOwnerId }) {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [minPercentageDiscount, setMinPercentageDiscount] =useState(0);
  const [maxPercentageDiscount , setMaxPercentageDiscount]=useState(0)
  const [numberSlice , setNumberSlice]=useState(0)
  const [dataArray , setDataArray]=useState([])
  const [discount , setDiscount]=useState(0)
  const [fixedDiscount , setFixedDiscount]=useState(false)
  const {infos} = useContext(AuthContext)
  const {userId} = useGetUserId(infos as InfosProps)
  const queryKey = ['getRollUser', [businessOwnerId && userId]];
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
      const data = Array.from({ length: numberSlice+1 }).map((item, index) => ({
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
      const random = await Math.floor(Math.random() * (maxPercentageDiscount - minPercentageDiscount + 1)) + minPercentageDiscount;;
     await setPrizeNumber(random - minPercentageDiscount)
     await setMustSpin(true);
     setDiscount(random)
    }
  };
  

  console.log("discount" , discount);
  
  if(!userId && !businessOwnerId ){
    return <LoadingPage/>
  }

  return (
    <ModalDefault
      closeIconClassName="w-8 h-8 fill-red-400"
      isShowModal={isShowModal}
      setIsShowModal={setIsShowModal}
    >
      <div className=" w-full h-max overflow-y-hidden p-2 overflow-x-hidden sm:text-lg text-zinc-500 flex items-center justify-center ">
        
          { !fixedDiscount ? <Wheel
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
            }}
          /> :
          <p className='pt-10'>‍‍‍‍From {getRollData?.data.first_time} to {getRollData?.data.last_time} today, all products include a {minPercentageDiscount}% fixed discount.</p>
          }
        
       
      </div>
      <button className='bg-indigo-400 block mx-auto px-6 py-2 mb-4 rounded-lg ' onClick={handleSpinClick}>try your luck</button>
    </ModalDefault>
  );
}