'use client'
import React, { useEffect , useState } from 'react'
import { AuthContext } from '@/context/authContext'
import ButtonDefault from '@/components/shared/button/buttonDefault'
import Modal from '@/components/modal/modal'
import DiscountCalculator from '@/components/discountCalculator/discountCalculator'
import InputDefault from '@/components/shared/inputs/inputDefault'
import ModalDefault from '@/components/modal/modalDefault'


const Page = ()=>{

  const [isShowModalCalculator, setIsShowModalCalculator] = useState<boolean>(false);
  const [isShowCancelModal , setIsShowCancelModal]=useState<boolean>(false)

  const cancelHandler = ()=>{

  }
 

  useEffect(()=>{
  
  },[])

  return(
    

<div className='w-screen h-screen  bg-sky-100 flex items-center gap-x-5 justify-center absolute px-20'>

<section className='w-9/12  h-5/6 -translate-y-9 rounded-3xl  flex-wrap gap-4 overflow-y-auto overflow-x-hidden p-8 bg-sky-50'>
<div className='w-full h-20 bg-indigo-300 rounded-xl flex items-center px-10 mb-4'>
<svg className='w-5 h-5 inline-block fill-white mr-2 stroke-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
  <p className='text-lg text-white font-semibold '>night wolf</p>
  <div className='ml-auto   flex items-center space-x-4 h-full '>
    <ButtonDefault onClick={()=>setIsShowModalCalculator(true)} text='calculater' className=' hover:-translate-y-0.5 hover:duration-500 hover:ease-in-out text-lg w-32 rounded-lg text-white font-semibold bg-fuchsia-400 hover:bg-fuchsia-500  py-1 h-12' />
    <ButtonDefault onClick={()=>setIsShowCancelModal(true)} text='cancel' className=' hover:-translate-y-0.5 hover:duration-500 hover:ease-in-out text-lg w-32 rounded-lg text-white font-semibold py-1 bg-red-500 hover:bg-red-600 h-12' />
    <ButtonDefault text='confirm' className=' hover:-translate-y-0.5  hover:duration-500 hover:ease-in-out text-lg w-32 rounded-lg text-white font-semibold py-1 bg-green-500 hover:bg-green-600 h-12' />
  </div>
</div>









</section>


      
<section className='w-3/12 bg-sky-50 rounded-3xl  -translate-y-9 h-5/6 p-4 overflow-y-auto'>
<div className='bg-indigo-300 w-full h-12 rounded-lg px-4 mb-3 '>
<p className='inline-block pt-3' >sajad lorestani</p>
<svg className='w-4 h-4 inline-block float-right mt-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
</div>
<div className='bg-indigo-300 w-full h-12 rounded-lg px-4 mb-3 '>
<p className='inline-block pt-3' >sajad lorestani</p>
<svg className='w-4 h-4 inline-block float-right mt-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
</div>

</section>
<ModalDefault closeIconClassName='w-6 h-6 fill-red-400' isShowModal={isShowModalCalculator} setIsShowModal={setIsShowModalCalculator}>
<DiscountCalculator/>
</ModalDefault>
<Modal cancelHandler={()=>setIsShowCancelModal(false)} text='Are you sure to delete?' isShowModal={isShowCancelModal} setIsShowModal={setIsShowCancelModal} />

    </div>
    
  )

}

export default Page