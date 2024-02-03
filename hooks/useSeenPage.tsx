import { Dispatch, SetStateAction, useEffect } from "react";
import { io, Socket } from "socket.io-client";

const useSeenPage = (
  businessOwnerId: string,
  setSocket: Dispatch<SetStateAction<Socket | null>>,
  pathPort: string,
  nameEvent:string
) => {
  useEffect(() => {
    console.log('pathPort => ', pathPort)
    const newSocket = io(pathPort);

    newSocket.on('connection',()=>{
      console.log('socket connected ')
    })


    newSocket.on('error',(err)=>{
      console.log('socket errored ', err)
    })
    const currentTime = new Date();
    const seenData = {
      businessOwnerId,
      seenUser: 1,
      seenDate: currentTime.toISOString(),
    };

    newSocket.emit(nameEvent, seenData);
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, [businessOwnerId , nameEvent]);
};

export default useSeenPage;
