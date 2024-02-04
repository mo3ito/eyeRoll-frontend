import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

interface InfosType {
  is_complete_information: boolean;
}

const useWarnInformation = (infos: InfosType) => {
  
  const hasWarnedIsCompleteInformationRef = useRef<boolean>(false);

  useEffect(() => {
    const warn = () => {
      if (!hasWarnedIsCompleteInformationRef.current && infos && !infos?.is_complete_information) {
        toast.warn(
          "please fill your information from menu -> information -> editing information"
        );
        hasWarnedIsCompleteInformationRef.current = true;
      }
    };

    let intervalTime: NodeJS.Timeout;
    intervalTime = setInterval(() => {
      warn();
      hasWarnedIsCompleteInformationRef.current = false; 
    }, 60000);

    warn();

    return () => clearInterval(intervalTime);
  }, [infos]);
};

export default useWarnInformation;
