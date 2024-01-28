import { useState, useEffect } from "react";
import { InfosProps } from "@/types/authentication";

export default function useGetAdminId(infos: InfosProps) {
const [adminId, setAdminId] = useState<string>("");

  useEffect(() => {
    if(infos && infos.is_admin ){
        setAdminId(infos.id);
    }
  
  }, [infos]);

  return { adminId };
}
