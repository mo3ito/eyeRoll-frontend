'use client'
import { useEffect , createContext , useCallback , useState , ReactElement } from "react";

type ChildrenType = {
    children? : ReactElement | undefined
}


export const AuthContext = createContext()

 const AuthContextProvider = ({children}: ChildrenType)=>{

    const [user , setUser] = useState(null)
    const [registerError , setRegisterError]=useState(null)
    const [isRegisterLoding , setIsRegisterLoading]=useState<boolean>(false)
    const [registerInfo , setRegisterInfo]=useState

    <AuthContext.Provider value={}>

    </AuthContext.Provider>
 }