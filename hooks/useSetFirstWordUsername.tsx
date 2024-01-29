import { useEffect, useState } from "react";
import { InfosProps } from "@/types/authentication";

const useSetFirstWordUsername = (infos: InfosProps) => {
  const [firstWordUsername, setFirstWordUsername] = useState<string>("");

  useEffect(() => {
    if (infos && infos.username && !infos.is_admin && !infos.is_businessOwner) {
      const firstWordUsername = infos.username[0].toUpperCase();
      setFirstWordUsername(firstWordUsername);
    }
  }, [infos]);

  return { firstWordUsername , setFirstWordUsername };
};

export default useSetFirstWordUsername;
