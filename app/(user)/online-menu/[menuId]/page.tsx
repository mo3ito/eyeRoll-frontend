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
import FilteringSection from '@/components/online-menu/filteringSection';

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
  const [isShowFilterClick , setIsShowFilterClick]=useState<boolean>(false)
  const [showFilterCondition , setShowFilterCondition]=useState<string>("default")
  


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
      setShowFilterCondition("most expensive")
      setIsShowFilterClick(false)
    
    }else{
      const mostExpensive = [...filteredProduct].sort((a, b) => {
        return Number(b.productPrice ) - Number(a.productPrice) 
      }
      );
    
      setFilteredProduct(mostExpensive);
      setShowFilterCondition("most expensive")
      setIsShowFilterClick(false)
    }
};

const cheapestHandler = ()=>{
  if(!filteredProduct.length){
    const cheapest = [...allProducts].sort((a, b) => {
      return Number(a.productPrice ) - Number(b.productPrice) 
    }
    );
    setAllProducts(cheapest);
    setShowFilterCondition("cheapest")
    setIsShowFilterClick(false)
  }else{
    const cheapest = [...filteredProduct].sort((a, b) => {
      return Number(a.productPrice ) - Number(b.productPrice) 
    }
    );
  
    setFilteredProduct(cheapest);
    setShowFilterCondition("cheapest")
    setIsShowFilterClick(false)
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
    await setIsShowFilterClick(false)
   await setShowFilterCondition("default")
    await  setInputSearchValue("")
     await setFilteredProduct([])
     await setIsGroupActive(false)
     await setAllProducts(data?.data?.products)
    } else{

      await setIsShowFilterClick(false)
      await setShowFilterCondition("default")
      await setIsFilteredSearch(false)
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
        <div className='w-full h-max mt-24 text-lg font-semibold container mx-auto px-3'>
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

      <FilteringSection
      inputSearchValue={inputSearchValue}
      inputSearchValueHandler={inputSearchValueHandler}
      clearSearchHandler={clearSearchHandler}
      setIsShowFilterClick={setIsShowFilterClick}
      isShowFilterClick={isShowFilterClick}
      showFilterCondition={showFilterCondition}
      defaultHandler={defaultHandler}
      cheapestHandler={cheapestHandler}
      mostExpensiveHandler={mostExpensiveHandler}/>


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