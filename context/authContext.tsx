'use client'
import { useEffect , createContext , useCallback , useState , ReactElement , ReactNode } from "react";
import { AuthContextProps , ChildrenType } from "@/types/authentication";
import Cookies from "js-cookie"
import axios from "axios";



export const AuthContext = createContext<AuthContextProps>({
    isLoggedIn : false ,
    token : null, 
    BusinessOwnerInfos : null,
    login : ()=>{},
    logout : ()=>{},
    setBusinessOwnersInfos: () => {},
    setIsLoggedIn:()=>{}
})

 export const AuthContextProvider = ({children}: ChildrenType)=>{

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    const [BusinessOwnerInfos, setBusinessOwnersInfos] = useState<object | null>(null);


    const login = useCallback(async(newBusinessOwnerInfos: object, newToken: string) => {
       await setToken(newToken);
      await  setIsLoggedIn(true);
        await Cookies.set("businessOwnerToken", newToken);
        setBusinessOwnersInfos(newBusinessOwnerInfos);
      }, []);

     
      const logout = useCallback(async () => {
       await setToken(null);
       await setBusinessOwnersInfos([]);
       await Cookies.remove("businessOwnerToken");
    }, []);
    
    // useEffect(() => {
    //     const getToken = Cookies.get("businessOwnerToken");
    //     if (getToken) {
    //       axios
    //         .get("http://localhost:5000/auth/me", {
    //           headers: {
    //             Authorization: getToken,
    //           },
    //         })
    //         .then((res) => res.data)
    //         .then((data) => {
    //           console.log(data);
    //           setBusinessOwnersInfos(data);
    //           setIsLoggedIn(true);
    //         })
    //         .catch((error) => {
    //           console.log("Error fetching user data:", error);
    //           setBusinessOwnersInfos(null);
    //           setIsLoggedIn(false);
    //         });
    //     }
    //   }, [login]);
  
   return ( <AuthContext.Provider value={{isLoggedIn ,token , BusinessOwnerInfos, login , logout, setBusinessOwnersInfos ,setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>)
 }