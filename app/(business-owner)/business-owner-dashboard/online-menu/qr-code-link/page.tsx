'use client'
import {useState , useEffect , useContext} from 'react'
import { AuthContext } from '@/context/authContext';
import useGetBusinessOwnerId from '@/hooks/useGet‌‌BusinessOwnerId';
import QRCode from 'qrcode.react';

export default function QRCodeLink() {

    const [qrCodeData, setQRCodeData] = useState('');
    const {infos}= useContext(AuthContext)
    const{businessOwnerId} = useGetBusinessOwnerId(infos)
  
    console.log(businessOwnerId);
    
  
    useEffect(() => {
      // این قسمت مربوط به ساخت داده‌هایی است که می‌خواهید در QR code قرار دهید.
      const qrData = `http://localhost:3000/online-menu/${businessOwnerId}`;
  
      setQRCodeData(qrData);
    }, [businessOwnerId]);

  return (
    <div className='mt-44  w-max px-6 mx-auto '>
        <h1 className='text-center mb-20'>your QR Code</h1>
        { qrCodeData && <QRCode className=' max-xs:!w-28 max-xs:!h-28 !w-36 !h-36 md:!w-40 md:!h-40 lg:!w-44 lg:!h-44 xl:!w-48 xl:!h-48 2xl:!w-52 2xl:!h-52' size={300} value={qrCodeData}  imageSettings={{
            src:  "/images/mo3ito.jpg",
            height: 30, // ارتفاع لوگو
            width: 30, // عرض لوگو
            excavate: true, // برش قسمت‌های لوگو که درون کد قرار گیرد
          }}/>}

         

    </div>
  )
}

