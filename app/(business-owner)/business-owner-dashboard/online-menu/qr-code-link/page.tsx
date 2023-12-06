'use client'
import {useState , useEffect , useContext} from 'react'
import { AuthContext } from '@/context/authContext';
import useGetBusinessOwnerId from '@/hooks/useGet‌‌BusinessOwnerId';
import QRCode from 'qrcode.react';
import { toast } from 'react-toastify';
import { InfosProps } from '@/types/authentication';

export default function QRCodeLink() {

    const [qrCodeData, setQRCodeData] = useState('');
    const {infos}= useContext(AuthContext)
    const{businessOwnerId} = useGetBusinessOwnerId(infos as InfosProps)
  
    useEffect(() => {
      if(businessOwnerId){
        const path = `${process.env.NEXT_PUBLIC_BASE_URL}/online-menu/${businessOwnerId}`
        setQRCodeData(path);
      }
    }, [businessOwnerId]);

    const handleCopyToClipboard = async ()=>{
      if(navigator.clipboard && qrCodeData){
        try {
         await navigator.clipboard.writeText(qrCodeData)
         toast.success('Link copied!')
        } catch (error) {
          console.error('Copy to clipboard failed: ', error);
        }
      }
    }


    const handleDownload = () => {
      const canvas = document.getElementById('qrcode')?.getElementsByTagName('canvas')[0];
      canvas?.toBlob(function(blob) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'qrcode.png';
        link.click();
      });
    };
    

  return (
    <div className='mt-64  w-max px-6 mx-auto border flex items-center justify-center flex-col gap-y-3 py-6 shadow-lg rounded-lg border-fuchsia-400'>
       
        { qrCodeData && 
            <div id='qrcode'>
        <QRCode className=' max-xs:!w-28 max-xs:!h-28 !w-36 !h-36 md:!w-40 md:!h-40 lg:!w-44 lg:!h-44 xl:!w-48 xl:!h-48 2xl:!w-52 2xl:!h-52' size={300} value={qrCodeData}  imageSettings={{
            src:  "/images/mo3ito.jpg",
            height: 30, 
            width: 30, 
            excavate: true,
          }}/>
          </div>
          }
          
          <button className='border border-fuchsia-400 p-2 rounded-lg cursor-pointer' onClick={handleDownload}>
        Download QR Code
      </button>

          <div className='mt-4'>
          <p className='text-center font-semibold mb-1'>your link</p>
          <button title='click to copy' onClick={handleCopyToClipboard} className='border bg-fuchsia-400 border-fuchsia-400 p-2 rounded-lg cursor-pointer'>{`${process.env.NEXT_PUBLIC_BASE_URL}/online-menu/${businessOwnerId}`}</button>
          </div>
        

         

    </div>
  )
}

