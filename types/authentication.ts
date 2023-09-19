import React,{ ReactNode , Dispatch, SetStateAction } from "react"


  

export interface AuthContextProps {
    [index : string] : string | object | null | boolean
    isVerified: boolean,
    isLoggedIn : boolean,
    token: string | null,
    infos: object | null,
    login: (infos: object, token: string) => void;
    logout: ()=> void,
    setInfos: (infos: object) => void;
    setIsLoggedIn:Dispatch<SetStateAction<boolean>>,
    setIsVerified:Dispatch<SetStateAction<boolean>>,
    isVerifyedHandler:(infos: object, token: string) => void,
}




