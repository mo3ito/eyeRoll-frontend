'use client'
import { useEffect , createContext , useCallback , useState , ReactElement , ReactNode } from "react";
import { AuthContextProps } from "@/types/authentication";
import {ChildrenType} from "@/types/childrenType"
import Cookies from "js-cookie"
import jwt_decode from "jwt-decode";



export const AuthContext = createContext<AuthContextProps>({
    isLoggedIn : false ,
    isVerified : false,
    token : null, 
    infos : {},
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
    const [infos, setInfos] = useState<object>({});
    
  
    


    const login = useCallback(async(infos: object, newToken: string) => {
       await setToken(newToken);
        await Cookies.set("businessOwnerToken", newToken);
        setInfos(infos);
      }, []);

     
      const logout = useCallback(async () => {
       await setToken(null);
       await setInfos({});
       await Cookies.remove("businessOwnerToken");
    }, []);

   
      

    const isVerifyedHandler = useCallback(async(infos: object, token: string) => {
      await setToken(token);
       await Cookies.set("businessOwnerToken", token);
       setInfos(infos);
    
     }, []);

   

     useEffect(()=>{
       if(!!login || !!isVerifyedHandler){
        const getMe = async ()=>{
          const token =await Cookies.get("businessOwnerToken")
          if(token?.length){
            const decodedToken : object = jwt_decode(token)
            setInfos(decodedToken)
          } else{
            setInfos({})
          }
         }
         getMe()
       } 
     },[login , isVerifyedHandler])
    
    useEffect(()=>{
      if(infos?.is_verified){
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
    },[infos])
    
    console.log(infos);
    console.log(isLoggedIn);
    
    
   return ( <AuthContext.Provider value={{isLoggedIn ,token , infos, login , logout, setInfos ,setIsLoggedIn , isVerifyedHandler , isVerified , setIsVerified  }}>
        {children}
    </AuthContext.Provider>)
 }