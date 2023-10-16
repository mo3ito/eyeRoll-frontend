import { useState , useEffect } from "react";
export default function useGetBusinessOwnerId(infos) {

    const [businessOwnerId, setBusinessOwnerId] = useState<string>('');
     
    useEffect(() => {
        infos && setBusinessOwnerId(infos.id);
    }, [infos]);

    return { businessOwnerId };
}