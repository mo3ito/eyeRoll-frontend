
import { Dispatch, SetStateAction } from "react";

const linkHandler = (path : string , router : any , setState?:Dispatch<SetStateAction<boolean>>)=>{
    if(router){
        router.push(path)
        if(setState){
            setState(false)
        }
    }

}


export default linkHandler