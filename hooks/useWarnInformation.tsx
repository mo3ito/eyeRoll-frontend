import { useEffect } from "react";
import { toast } from "react-toastify";

interface InfosType {
    is_furtherـinformation: boolean; 
  }
  

 const useWarnInformation = (infos : InfosType )=>{
    // useEffect(() => {
    //     let interValTime: NodeJS.Timeout;
    //     if (infos && !infos.is_furtherـinformation) {
    //       interValTime = setInterval(() => {
    //         toast.warn(
    //           "please fill you information from menu -> information -> editting information"
    //         );
    //       }, 1200000);
    //     }

      
    
    //     return () => clearInterval(interValTime);
    //   }, [infos]);

}

export default useWarnInformation;