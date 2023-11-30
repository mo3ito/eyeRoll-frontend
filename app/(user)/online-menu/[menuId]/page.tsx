'use client'
import React, { useRef, useState , useEffect , useCallback , ChangeEvent } from 'react';
import { Swiper, SwiperSlide , SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination  } from 'swiper/modules';
import { Socket } from 'socket.io-client';
import io from "socket.io-client"
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getterWithAuthId from '@/services/getterWithAuthId';
import { v4 as uuidv4 } from 'uuid';
import { ProductType , AssortmentGrouptype  } from '@/types/onlineMenuUser/onlineMenuUser';
import LoadingPage from '@/components/loading/loadingPage';
import InputDefault from '@/components/shared/inputs/inputDefault';
import ContainerOnlineMenu from '@/components/online-menu/containerOnlineMenu';
import ContainerFilterMenu from '@/components/online-menu/containerFilterMenu';
import InfoBusinesOnlineMenu from '@/components/online-menu/infoBusinesOnlineMenu';
import { ProductDetailsType } from '@/types/onlineMenuUser/onlineMenuUser';
import ShowDetailsOnlineMenu from '@/components/online-menu/showDetailsOnlineMenu';

interface informationBusinessType {
  logo_image : string;
  phone_number: string;
  work_phone: string;
  work_place_image: string;
  address: string;
  brand_name: string;
}

interface sortedProduct{
  id: string;
  group: string;
  values: ProductType[]
}



export default function Page({ params }: { params: { menuId: string } }) {
  console.log(params);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isShowMenu , setIsShowMenu]=useState<boolean>(true)
  const [businessOwnerId , setBusinessOwnerId] = useState<string>("")
  const swiperRef = useRef< SwiperRef | null>(null)
  const queryClient = useQueryClient();
  const [allProducts , setAllProducts]=useState<ProductType[]>([])
  const [productAssortments , setProductAssortments]=useState<AssortmentGrouptype[]>([])
  const [informationBusiness , setInformationBusiness]=useState<informationBusinessType | null>(null)
  const [sortedProduct , setSortedProduct]=useState<sortedProduct[]>([])
  const [filteredProduct , setFilteredProduct]=useState<ProductType[]>([])
  const [products , setProducts]=useState<ProductType[]>([])
  const [groupName , setGroupName]=useState<string>("")
  const [inputSearchValue , setInputSearchValue]=useState<string>("")
  const [isGroupActive , setIsGroupActive]=useState<boolean>(false)
  const [isFilteredSearch , setIsFilteredSearch]=useState<boolean>(false)
  const [isShowProduct , setIsShowProduct]=useState<boolean>(false)
  const [productDetails , setProductDetails]=useState<ProductDetailsType | null>(null)
  


  useEffect(() => {
      const newSocket = io("http://localhost:5001");
      console.log(newSocket);
      setSocket(newSocket);
      return ()=>{
        newSocket.disconnect()
      }
  }, []);

  useEffect(()=>{
    if(params){
      setBusinessOwnerId(params?.menuId)
    }
  },[params])
 
  const queryKey = ["all products", businessOwnerId];

  const { data, isLoading } = useQuery(
    businessOwnerId ? queryKey : [],
    () => {
      if (businessOwnerId) {
        return getterWithAuthId(
          "http://localhost:5000/business-owner/online-menu/get-online-menu-info",
          businessOwnerId
        );
      }
      return null;
    }
  );


  console.log(sortedProduct);
  

  useEffect(()=>{
    if(products){
      const assortments : string[] = products.map((product : ProductType )=> product?.productAssortment)
      const allAssortmentSeted = new Set(assortments)
      const allAssortmentArray = Array.from(allAssortmentSeted)
     const allAssortment : AssortmentGrouptype[] = allAssortmentArray.map(group=>({id:uuidv4() , group}))
      setProductAssortments(allAssortment)
    }
  },[products])
  
  console.log(productAssortments);


  useEffect(()=>{
    if(data?.data){
      setAllProducts(data?.data?.products)
      setProducts(data?.data?.products)
      setInformationBusiness(data?.data.informationBusiness)

    }
   
  },[data])
  
  console.log(allProducts);
  console.log(informationBusiness);
  
  

  console.log(socket);
  const prevSlideHandler = ()=>{
    if(swiperRef.current && swiperRef.current.swiper){
      swiperRef.current.swiper.slidePrev();
    }
    
  }

  const nextSlideHandler = ()=>{
    if(swiperRef.current && swiperRef.current.swiper){
      swiperRef.current.swiper.slideNext();
    }
  }

  useEffect(()=>{
    if(allProducts && productAssortments ){
      const groupedProducts = productAssortments.map(assortment => {
        const productsInGroup = allProducts.filter((product : ProductType) => product.productAssortment === assortment.group);
      
        return {
          id: assortment.id,
          group: assortment.group,
          values: productsInGroup,
        };
      });
      
      const sortedGroupedProducts = groupedProducts.sort((a, b) => a.group.localeCompare(b.group));
      setSortedProduct(sortedGroupedProducts)
      
    }
  },[allProducts , productAssortments])


const groupHandler = async (groupName : string)=>{
// setIsLoadingPage(true)
 await setInputSearchValue("") 
 await setIsFilteredSearch(false) 
 const filteredGroup = allProducts.filter((product : ProductType) => product.productAssortment === groupName )
// setIsShowAssortment(false)
setIsGroupActive(true)
setGroupName(groupName)
setFilteredProduct(filteredGroup)
// setIsLoadingPage(false)
}


console.log(groupName);
console.log(filteredProduct);


  
  const mostExpensiveHandler = () => {
    
    if(!filteredProduct.length){
      const mostExpensive = [...allProducts].sort((a, b) => {
        return Number(b.productPrice ) - Number(a.productPrice) 
      }
      );
    
      setAllProducts(mostExpensive);
    
    }else{
      const mostExpensive = [...filteredProduct].sort((a, b) => {
        return Number(b.productPrice ) - Number(a.productPrice) 
      }
      );
    
      setFilteredProduct(mostExpensive);
    }
};

const chipestHandler = ()=>{
  if(!filteredProduct.length){
    const cheapest = [...allProducts].sort((a, b) => {
      return Number(a.productPrice ) - Number(b.productPrice) 
    }
    );
    setAllProducts(cheapest);
  }else{
    const cheapest = [...filteredProduct].sort((a, b) => {
      return Number(a.productPrice ) - Number(b.productPrice) 
    }
    );
  
    setFilteredProduct(cheapest);
  }
}

const inputSearchValueHandler =useCallback((event : ChangeEvent<HTMLInputElement>)=>{
  setInputSearchValue(event.target.value)
}
,[]) 


useEffect(() => {
  if (inputSearchValue && data && !isGroupActive) {
    const searchedValue = data?.data?.products.filter((product : ProductType) =>
      product.productName.startsWith(inputSearchValue)
    );
    setAllProducts(searchedValue);
    setIsFilteredSearch(true)
  } else if (!isGroupActive) {
    setAllProducts(data?.data?.products);
    setIsFilteredSearch(false)
  }
}, [inputSearchValue, data, isGroupActive]);

useEffect(() => {
  if (isGroupActive && inputSearchValue && data && allProducts && !isFilteredSearch && groupName) {
    setIsFilteredSearch(false);
    const searchedValue = allProducts.filter((product : ProductType) =>
      product.productAssortment === groupName && product.productName.startsWith(inputSearchValue)
    );
    setFilteredProduct(searchedValue);
  } else if (isGroupActive) {
    setFilteredProduct(allProducts ? allProducts.filter((product : ProductType) => product.productAssortment === groupName ) : [])
  }
}, [inputSearchValue, data, isGroupActive, allProducts, isFilteredSearch, groupName]);


 const clearSearchHandler = ()=>{
  setInputSearchValue("")
 }

  const defaultHandler = async ()=>{
    if(filteredProduct.length>0){
    await  setInputSearchValue("")
     await setFilteredProduct([])
     await setIsGroupActive(false)
     await setAllProducts(data?.data?.products)
    } else{
      setAllProducts(data?.data?.products)
    }
  }
  
  
  
  if(isLoading ){
    return <LoadingPage/>
  }

  return (
    <>
   <div className='w-full h-max pt-24 pb-6'>
        <div className='w-full h-44 bg-black/30 '>
            <img className='w-full h-full object-cover' src={informationBusiness?.work_place_image} alt="" />
            <div className='w-24 h-24 rounded-full  bg-sky-100 -translate-y-12 mx-auto shadow-md '>
                 <img src={informationBusiness?.logo_image} className='text-center object-cover w-full h-full rounded-full text-2xl'></img>
            </div>
            <p className='text-center  -translate-y-12 p-2 text-2xl'>{informationBusiness?.brand_name}</p>
        </div>
        <div className='w-full h-max mt-24 text-lg font-semibold container mx-auto'>
        <button onClick={()=>setIsShowMenu(true)} className={`${isShowMenu ? 'border-fuchsia-700 border-b-2' : 'border-fuchsia-400'} w-1/2  py-2`}>show menu</button>
        <button onClick={()=>setIsShowMenu(false)} className={`${!isShowMenu ? 'border-fuchsia-700 border-b-2' : 'border-fuchsia-400'} w-1/2  py-2`}>show information</button>
        </div>

        <div className='container mx-auto px-3 '>
        { isShowMenu ? <>
        <div className='w-full h-12  bg-sky-50 flex mt-4 rounded-lg '>
        <button onClick={prevSlideHandler} className='ml-2 mt-1 flex-shrink-0 mr-auto w-10 h-10 rounded-full bg-indigo-300 border border-fuchsia-400 flex items-center justify-center cursor-pointer'>
        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path></svg>
        </button>



        <div className=' w-9/12 sm:w-10/12 xl:w-11/12 h-full px-2 py-2'>
        <Swiper
        ref={swiperRef}
        className="  h-full  flex items-center justify-center"
        slidesPerView={8}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
      >

        {productAssortments.map(productAssortment=>
           <SwiperSlide onClick={()=>groupHandler(productAssortment.group)}  key={productAssortment.id} className=' bg-indigo-100 text-fuchsia-700 border border-purple-500 rounded-lg cursor-pointer !shadow-sm !w-max !px-2 !flex !items-center !justify-center'>{productAssortment.group}</SwiperSlide>
          )}
      </Swiper>
        </div>


        <button onClick={nextSlideHandler} className=' flex-shrink-0 mt-1 w-10 h-10 bg-indigo-300 border border-fuchsia-400 ml-auto mr-2 rounded-full  flex items-center justify-center cursor-pointer'>
        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.1714 12.0007L8.22168 7.05093L9.63589 5.63672L15.9999 12.0007L9.63589 18.3646L8.22168 16.9504L13.1714 12.0007Z"></path></svg>
        </button>
        </div>

      <div className='  my-4   flex items-center h-10 gap-x-2'>
        <div className="flex flex-col h-max gap-y-10 items-center w-full container   md:mb-0  py-2 top-32 sticky mx-auto bg-sky-100   ">
      <div className='w-full  h-max '>
  <div className=' flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row '>
        <div className=' w-full sm:w-1/2 md:w-5/12 lg:w-4/12 xl:w-3/12  2xl:w-3/12  border-2 border-fuchsia-300 rounded-lg h-10   flex items-center '>
        <svg className='w-4 h-4 inline-block mx-1 fill-zinc-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
          <InputDefault type='text' value={inputSearchValue} onChange={inputSearchValueHandler} placeholder='search product name' className=' text-sm sm:text-base h-full w-11/12  pr-2 outline-none  bg-transparent ' />
        </div>
        <button onClick={clearSearchHandler} className=' sm:ml-3 px-4 rounded-lg text-sm sm:text-base h-10 bg-fuchsia-300'>clear search</button>
        </div> 
        </div>
        </div>
        <div className='w-1/3 ml-auto   h-full flex items-center px-2 '>
        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3L23 8H20V20H18V8H15L19 3ZM14 18V20H3V18H14ZM14 11V13H3V11H14ZM12 4V6H3V4H12Z"></path></svg>
        <p className='pl-2'>filter</p>

         <div className='ml-4'>
         <button onClick={defaultHandler} className='border-b-2 border-fuchsia-700 px-2 '>default</button>
         <button onClick={chipestHandler} className='border-b-2 border-fuchsia-700 px-2 '>cheapest</button>
        <button onClick={mostExpensiveHandler} className='border-b border-fuchsia-400 px-2'>most expensive</button>
         </div>
      
        </div>
      
      </div>


        { !isFilteredSearch ? <>
        { !isGroupActive ? 
      <ContainerOnlineMenu setIsShowProduct={setIsShowProduct} setProductDetails={setProductDetails} sortedProduct={sortedProduct}/> :
      <ContainerFilterMenu setIsShowProduct={setIsShowProduct} setProductDetails={setProductDetails} groupName={groupName} filteredProduct={filteredProduct} /> 
          }
          </> :   
      <ContainerFilterMenu setIsShowProduct={setIsShowProduct} setProductDetails={setProductDetails}  groupName='search result' filteredProduct={allProducts} />
        }
      </> :
        <InfoBusinesOnlineMenu informationBusiness={informationBusiness}/>
        }

      </div>
   
       
    </div> 
    <ShowDetailsOnlineMenu isShowProduct={isShowProduct} setIsShowProduct={setIsShowProduct} productDetails={productDetails}/>
    </>
  )
}