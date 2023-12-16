'use client'
import { useEffect , createContext , useCallback , useState , ReactElement , ReactNode } from "react";
import { AuthContextProps ,InfosProps } from "@/types/authentication";
import {ChildrenType} from "@/types/childrenType"
import Cookies from "js-cookie"
import jwt_decode from "jwt-decode";




export const AuthContext = createContext<AuthContextProps>({
    isLoggedIn : false ,
    isVerified : false,
    token : null, 
    infos: {
      address: "",
      brand_name: "",
      city_name: "",
      country_name: "",
      email: "",
      id: "",
      is_complete_information: false,
      is_businessOwner: false,
      is_verified: false,
      last_name: "",
      name: "",
      phone_number: "",
      registration_date: "",
      state_name: "",
      username: "",
      postal_code: "",
      work_phone: "",
      work_place_image_path:"",
      logo_image_path:"",
      profile_image_path:"",
      discounts_eyeRoll:[]
  },
    login : ()=>{},
    logout : ()=>{},
    setInfos: () => {},
    setIsLoggedIn:()=>{},
    setIsVerified:()=>{},
    isVerifyedHandler:()=>{},
    
})

 export const AuthContextProvider = ({children}: ChildrenType)=>{

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [infos, setInfos] = useState<InfosProps | undefined>(undefined);
    
  
    


    const login = useCallback(async(infos: object, newToken: string) => {
      console.log(infos);
      
       await setToken(newToken);
        await Cookies.set("eyeRollToken", newToken);
        setInfos(infos as InfosProps);
      }, []);

   
      
     
      const logout = useCallback(async () => {
       await setToken(null);
       await setInfos(undefined);
       await Cookies.remove("eyeRollToken");
    }, []);

   
      

    const isVerifyedHandler = useCallback(async(infos: object, token: string) => {
      await setToken(token);
       await Cookies.set("eyeRollToken", token);
       setInfos(infos as InfosProps);
    
     }, []);

   

     useEffect(()=>{
       if(!!login || !!isVerifyedHandler){
        const getMe = async ()=>{
          const token =await Cookies.get("eyeRollToken")
          if(token?.length){
            const decodedToken : object = jwt_decode(token)
            setInfos(decodedToken as InfosProps)
          } else{
            setInfos( undefined)
          }
         }
         getMe()
       } 
     },[login , isVerifyedHandler])

  
    
    useEffect(()=>{
      if(infos && 'is_verified' in infos && infos?.is_verified){
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
    },[infos])
    
   return ( <AuthContext.Provider value={{isLoggedIn ,token , infos, login , logout, setInfos ,setIsLoggedIn , isVerifyedHandler , isVerified , setIsVerified  }}>
        {children}
    </AuthContext.Provider>)
 }