'use client'
import { useEffect , createContext , useCallback , useState , ReactElement , ReactNode } from "react";
import { AuthContextProps , ChildrenType } from "@/types/authentication";
import Cookies from "js-cookie"
import axios from "axios";
import getterWithAuth from "@/services/getterWithAuth";
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
    getMe:()=>{}
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

    // const getMe =async ()=>{
    //   if(token){
    //     const decodedToken : object =await jwt_decode(token)
    //     setBusinessOwnersInfos(decodedToken)
    //   } else{
    //     setBusinessOwnersInfos({})
    //   }
    
    //  }
      

    const isVerifyedHandler = useCallback(async(businessOwnerInfos: object, token: string) => {
      await setToken(token);
       await Cookies.set("businessOwnerToken", token);
      //  setBusinessOwnersInfos(businessOwnerInfos);
    
     }, []);

     const getMe = async ()=>{
      const token =await Cookies.get("businessOwnerToken")
      if(token?.length){
        const decodedToken : object = jwt_decode(token)
        setBusinessOwnersInfos(decodedToken)
      } else{
        setBusinessOwnersInfos({})
      }
     }
    
    // useEffect(()=>{
    // setTimeout(()=>{
    //   const token = Cookies.get("businessOwnerToken")
    //   if(token?.length){
    //     const decodedToken : object = jwt_decode(token)
    //     setBusinessOwnersInfos(decodedToken)
    //   } else{
    //     setBusinessOwnersInfos({})
    //   }
    // },400)
   
    // },[])



    useEffect(()=>{
      if(businessOwnerInfos?.is_verified){
        setIsLoggedIn(true)
      }else{
        setIsLoggedIn(false)
      }
    },[businessOwnerInfos])
    

    
    

    // useEffect(() => {
     
    //     const checkTokenAndFetchData = async () => {
    //       try {
    //         const getToken = Cookies.get("businessOwnerToken");
    //         if (getToken) {
    //           const response = await getterWithAuth("http://localhost:5000/get-me");
    //           setBusinessOwnersInfos(response?.data);
    //           setIsLoggedIn(true);
    //         } else {
    //           setBusinessOwnersInfos({});
    //           setIsLoggedIn(false);
    //         }
    //       } catch (error) {
    //         console.log("Error fetching user data:", error);
    //         setBusinessOwnersInfos({});
    //         setIsLoggedIn(false);
    //       }
    //     checkTokenAndFetchData();
    //   }

    // },[]);

   

   

    console.log(businessOwnerInfos);
    console.log(isLoggedIn);
    
    
   return ( <AuthContext.Provider value={{isLoggedIn ,token , businessOwnerInfos, login , logout, setBusinessOwnersInfos ,setIsLoggedIn , isVerifyedHandler , isVerified , setIsVerified , getMe }}>
        {children}
    </AuthContext.Provider>)
 }