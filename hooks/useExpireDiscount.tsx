
'use client'
import EYEROLL_TOKEN from "@/help/tokenName"
import Cookies from "js-cookie"
import { useEffect, useState , useContext } from "react"
import { AuthContext } from "@/context/authContext"
import updaterWithId from "@/services/updaterWithId"
import useGetUserId from "./useGetUserId"
import { InfosProps } from "@/types/authentication"

const useExpireDiscount = ()=>{

    const [discounts , setDiscounts]=useState()
    // const [discounts, setDiscounts] = useState([
    //     { id: 1, endTime: "12:30" },
    //     { id: 2, endTime: "14:45" },
    //     // ...
    //   ])
    const {infos , login} = useContext(AuthContext)
    const [expiredDiscounts , setExpiredDiscounts]=useState([])
    const {userId} = useGetUserId(infos as InfosProps)
    const [mustLogin , setMustLogin] = useState(false)
    const [isExpireDiscount , setIsExpireDiscount]=useState(false)
    console.log(userId);
    

    useEffect(()=>{
        if(infos){
            setDiscounts(infos.discounts_eyeRoll)
        }
    },[infos])

  
    console.log("discounts" , discounts);
    
  

    useEffect(()=>{
        if(discounts?.length > 0 &&  infos){

            const removeDiscountExpire = async ()=>{
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();

            const expiredDiscounts = await discounts?.filter(item=>{
                const endTimeArray = item.endTime.split(':');
                const endHour = parseInt(endTimeArray[0]);
                const endMinute = parseInt(endTimeArray[1]);
              return (currentHour >= endHour && currentMinute >= endMinute)

            })
            // setTimeout(()=>{
            //     console.log("Expired Discounts:", expiredDiscounts);
            // },1000)
            
            setExpiredDiscounts(expiredDiscounts)
            setIsExpireDiscount(true)
            }





            removeDiscountExpire()

        }
    },[discounts , infos])
      

    useEffect(()=>{
        
    const sendApi = async ()=>{
        if(isExpireDiscount && userId){
           
            const expiredDiscountsIds = await expiredDiscounts.map(item=> item.id)
            console.log(expiredDiscountsIds);
            
            const body ={
                dicountIds : expiredDiscountsIds
            } 
            console.log(body);
            
          const response = await  updaterWithId("http://localhost:5000/users/remove-expire-discount-eyeRoll" , userId , body)
            console.log(response);
            if(response?.status === 200 && isExpireDiscount ){
            //    await login(response?.data.userInfos , response?.data.token )
            //     setIsExpireDiscount(false)
            }
        }
    }

    sendApi()

    },[expiredDiscounts , userId , isExpireDiscount])


    

}




export default useExpireDiscount