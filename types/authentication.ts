import React,{ ReactNode , Dispatch, SetStateAction } from "react"

export interface AuthContextProps {
    isLoggedIn : boolean,
    token: string | null,
    BusinessOwnerInfos: [] | null,
    login: (businessOwnerInfos: [], token: string) => void;
    logout: ()=> void,
    setBusinessOwnersInfos: (BusinessOwnerInfos: []) => void;
    setIsLoggedIn:Dispatch<SetStateAction<boolean>>
}

export type ChildrenType = {
    children? : ReactNode 
}

