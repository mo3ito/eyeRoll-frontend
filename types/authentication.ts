import React,{ ReactNode , Dispatch, SetStateAction } from "react"

export interface AuthContextProps {
    isLoggedIn : boolean,
    token: string | null,
    BusinessOwnerInfos: object | null,
    login: (businessOwnerInfos: object, token: string) => void;
    logout: ()=> void,
    setBusinessOwnersInfos: (BusinessOwnerInfos: object) => void;
    setIsLoggedIn:Dispatch<SetStateAction<boolean>>
}

export type ChildrenType = {
    children? : ReactNode 
}

