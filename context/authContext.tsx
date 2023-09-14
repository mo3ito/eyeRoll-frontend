'use client'
import { useEffect , createContext , useCallback , useState , ReactElement , ReactNode } from "react";
import { AuthContextProps , ChildrenType } from "@/types/authentication";
import Cookies from "js-cookie"
import jwt_decode from "jwt-decode";



export const AuthContext = createContext<AuthContextProps>({
    isLoggedIn : false ,
    isVerified : false,
    token : null, 
    businessOwnerInfos : {},
    login : ()=>{},
    logout : ()=>{},
    setBusinessOwnersInfos: () => {},
    setIsLoggedIn:()=>{},
    setIsVerified:()=>{},
    isVerifyedHandler:()=>{},
    
})

 export const AuthContextProvider = ({children}: ChildrenType)=>{

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [businessOwnerInfos, setBusinessOwnersInfos] = useState<object>({});
    
  
    


    const login = useCallback(async(newBusinessOwnerInfos: object, newToken: string) => {
       await setToken(newToken);
        await Cookies.set("businessOwnerToken", newToken);
        setBusinessOwnersInfos(newBusinessOwnerInfos);
      }, []);

     
      const logout = useCallback(async () => {
       await setToken(null);
       await setBusinessOwnersInfos({});
       await Cookies.remove("businessOwnerToken");
    }, []);

   
      

    const isVerifyedHandler = useCallback(async(businessOwnerInfos: object, token: string) => {
      await setToken(token);
       await Cookies.set("businessOwnerToken", token);
       setBusinessOwnersInfos(businessOwnerInfos);
    
     }, []);

   

     useEffect(()=>{
       if(!!login || !!isVerifyedHandler){
        const getMe = async ()=>{
          const token =await Cookies.get("businessOwnerToken")
          if(token?.length){
            const decodedToken : object = jwt_decode(token)
            setBusinessOwnersInfos(decodedToken)
          } else{
            setBusinessOwnersInfos({})
          }
         }
         getMe()
       } 
     },[login , isVerifyedHandler])
    
    useEffect(()=>{
      if(businessOwnerInfos?.is_verified){
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
    },[businessOwnerInfos])
    
    console.log(businessOwnerInfos);
    console.log(isLoggedIn);
    
    
   return ( <AuthContext.Provider value={{isLoggedIn ,token , businessOwnerInfos, login , logout, setBusinessOwnersInfos ,setIsLoggedIn , isVerifyedHandler , isVerified , setIsVerified  }}>
        {children}
    </AuthContext.Provider>)
 }