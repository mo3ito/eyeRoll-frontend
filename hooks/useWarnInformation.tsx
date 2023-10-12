import { useEffect } from "react";
import { toast } from "react-toastify";

interface InfosType {
    is_additional_specifications: boolean; 
  }
  

 const useWarnInformation = (infos : InfosType )=>{
    useEffect(() => {
        let interValTime: NodeJS.Timeout;
        if (infos && !infos.is_additional_specifications) {
          interValTime = setInterval(() => {
            toast.warn(
              "please fill you information from menu -> information -> editting information"
            );
          }, 12000);
        }

        // if (infos && !infos.is_businessOwner) {
        //     console.log("is_businessOwner is false");
        //     router.push("/register-business-owner/login");
        // }
    
        return () => clearInterval(interValTime);
      }, [infos]);

}

export default useWarnInformation;