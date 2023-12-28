import { Dispatch, SetStateAction, useEffect } from "react";
import { io, Socket } from "socket.io-client";

const useSeenPage = (
  businessOwnerId: string,
  setSocket: Dispatch<SetStateAction<Socket | null>>,
  pathPort: string
) => {
  useEffect(() => {
    const newSocket = io(pathPort);
    const currentTime = new Date();
    const seenData = {
      businessOwnerId,
      seenUser: 1,
      seenDate: currentTime.toISOString(),
    };

    newSocket.emit("join", seenData);
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, [businessOwnerId]);
};

export default useSeenPage;
