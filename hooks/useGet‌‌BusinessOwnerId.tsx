import { useState, useEffect } from "react";
import { InfosProps } from "@/types/authentication";

export default function useGetBusinessOwnerId(infos: InfosProps) {
const [businessOwnerId, setBusinessOwnerId] = useState<string>("");

  useEffect(() => {
    infos && setBusinessOwnerId(infos.id);
  }, [infos]);

  return { businessOwnerId };
}
