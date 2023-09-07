'use client'
import { useEffect , createContext , useCallback , useState , ReactElement , ReactNode } from "react";
import { AuthContextProps , ChildrenType } from "@/types/authentication";
import Cookies from "js-cookie"
import axios from "axios";
import getterWithAuth from "@/services/getterWithAuth";



export const AuthContext = createContext<AuthContextProps>({
    isLoggedIn : false ,
    token : null, 
    businessOwnerInfos : null,
    login : ()=>{},
    logout : ()=>{},
    setBusinessOwnersInfos: () => {},
    setIsLoggedIn:()=>{},
    isVerifyedHandler:()=>{}
})

 export const AuthContextProvider = ({children}: ChildrenType)=>{

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [businessOwnerInfos, setBusinessOwnersInfos] = useState<object | null>(null);


    const login = useCallback(async(newBusinessOwnerInfos: object, newToken: string) => {
       await setToken(newToken);
        await Cookies.set("businessOwnerToken", newToken);
        setBusinessOwnersInfos(newBusinessOwnerInfos);
      }, []);

     
      const logout = useCallback(async () => {
       await setToken(null);
       await setBusinessOwnersInfos([]);
       await Cookies.remove("businessOwnerToken");
    }, []);

    const isVerifyedHandler = useCallback(async(businessOwnerInfos: object, token: string) => {
      await setToken(token);
     await  setIsLoggedIn(true);
       await Cookies.set("businessOwnerToken", token);
       setBusinessOwnersInfos(businessOwnerInfos);
     }, []);


    useEffect(() => {
      const checkTokenAndFetchData = async () => {
        try {
          const getToken = Cookies.get("businessOwnerToken");
          if (getToken) {
            const response = await getterWithAuth("http://localhost:5000/get-me");
            setBusinessOwnersInfos(response?.data);
            setIsLoggedIn(true);
          } else {
            setBusinessOwnersInfos(null);
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.log("Error fetching user data:", error);
          setBusinessOwnersInfos(null);
          setIsLoggedIn(false);
        }
      };
  
      checkTokenAndFetchData();
    }, [isVerifyedHandler]);
    

  
   return ( <AuthContext.Provider value={{isLoggedIn ,token , businessOwnerInfos, login , logout, setBusinessOwnersInfos ,setIsLoggedIn , isVerifyedHandler}}>
        {children}
    </AuthContext.Provider>)
 }