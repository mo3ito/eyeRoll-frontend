import React,{ ReactNode , Dispatch, SetStateAction } from "react"

export interface AuthContextProps {
    [index : string] : string | object | null | boolean
    isVerified: boolean,
    isLoggedIn : boolean,
    token: string | null,
    businessOwnerInfos: object | null,
    login: (businessOwnerInfos: object, token: string) => void;
    logout: ()=> void,
    setBusinessOwnersInfos: (BusinessOwnerInfos: object) => void;
    setIsLoggedIn:Dispatch<SetStateAction<boolean>>,
    setIsVerified:Dispatch<SetStateAction<boolean>>,
    isVerifyedHandler:(businessOwnerInfos: object, token: string) => void,
   
}

export type ChildrenType = {
    children? : ReactNode 
}

