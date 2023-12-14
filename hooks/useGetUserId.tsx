import { useState, useEffect } from "react";
import { InfosProps } from "@/types/authentication";

export default function useGetUserId(infos: InfosProps) {
const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    if(infos && !infos.is_businessOwner ){
        setUserId(infos.id);
    }
  
  }, [infos]);

  return { userId };
}
