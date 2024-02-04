'use client'
import {useState , useEffect , useContext} from 'react'
import { AuthContext } from '@/context/authContext';
import useGetBusinessOwnerId from '@/hooks/useGet‌‌BusinessOwnerId';
import QRCode from 'qrcode.react';
import { InfosProps } from '@/types/authentication';
import LoadingPage from '@/components/loading/loadingPage';
import handleCopyToClipboard from '@/utils/handleCopyToClipboard';

export default function QRCodeLinkShower({QRCodePath , content}:{QRCodePath:string , content:string}) {

    const [qrCodeData, setQRCodeData] = useState('');
    const {infos}= useContext(AuthContext)
    const{businessOwnerId} = useGetBusinessOwnerId(infos as InfosProps)
  
    useEffect(() => {
      if(businessOwnerId && QRCodePath){
        const path = QRCodePath
        setQRCodeData(path);
      }
    }, [businessOwnerId , QRCodePath]);

    const handleDownload = () => {
      const canvas = document.getElementById('qrcode')?.getElementsByTagName('canvas')[0];
      canvas?.toBlob((blob)=>{
         if(blob){
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'qrcode.png';
          link.click();
         }
      });
    };

    if(!qrCodeData){
      return <LoadingPage/>
    }
    

  return (
    <div className='container mx-auto'>
      <p className='translate-y-48 font-semibold text-center max-xs:text-sm text-base md:text-lg lg:text-xl xl:text-2xl'>{content}</p>
    <div className='mt-52  px-6 mx-auto border flex items-center justify-center flex-col gap-y-3 py-12 shadow-lg rounded-lg border-fuchsia-400 w-11/12 sm:w-8/12 md:w-8/12 lg:w-7/12   xl:w-6/12 2xl:w-5/12'>
       
        { qrCodeData && 
        <div className=' max-xs:!w-28  !w-36  md:!w-40  lg:!w-44  xl:!w-48  2xl:!w-52 '>
            <div id='qrcode'>
        <QRCode className='  max-xs:!h-28 !w-full !h-36  md:!h-40  lg:!h-44  xl:!h-48  2xl:!h-52' size={300} value={qrCodeData}  imageSettings={{
            src:  "/images/eyeRoll_logo.png",
            height: 60, 
            width: 70, 
            excavate: true,
          }}/>
          </div>
          <button className='border bg-fuchsia-400 border-fuchsia-400 py-1 rounded-lg cursor-pointer w-full text-[10px] sm:text-sm md:text-base mt-2 sm:mt-4' onClick={handleDownload}>
        Download QR Code
      </button>
          </div>
          }
          <div className='mt-4'>
          <p className='text-center text-xs  sm:text-sm md:text-base font-semibold mb-2'>your link</p>
          <button title='click to copy' onClick={()=>handleCopyToClipboard(qrCodeData)} className='border bg-fuchsia-400 border-fuchsia-400 py-1 px-2 rounded-lg cursor-pointer text-[10px] sm:text-sm md:text-base '>{QRCodePath}</button>
          </div>
    </div>
    </div>
  )
}

