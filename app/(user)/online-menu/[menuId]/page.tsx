'use client'
import React, { useState , useEffect , useCallback , ChangeEvent } from 'react';
import { Socket } from 'socket.io-client';
import io from "socket.io-client"
import { useQuery, useQueryClient } from "@tanstack/react-query";
import getterWithAuthId from '@/services/getterWithAuthId';
import { v4 as uuidv4 } from 'uuid';
import { ProductType , AssortmentGrouptype  } from '@/types/onlineMenuUser/onlineMenuUser';
import LoadingPage from '@/components/loading/loadingPage';
import ContainerOnlineMenu from '@/components/online-menu/containerOnlineMenu';
import ContainerFilterMenu from '@/components/online-menu/containerFilterMenu';
import InfoBusinesOnlineMenu from '@/components/online-menu/infoBusinesOnlineMenu';
import { ProductDetailsType , InformationBusinessType , SortedProductType } from '@/types/onlineMenuUser/onlineMenuUser';
import ShowDetailsOnlineMenu from '@/components/online-menu/showDetailsOnlineMenu';
import FilteringSection from '@/components/online-menu/filteringSection';
import SwiperOnlineMenu from '@/components/online-menu/swiperOnlineMenu';
import HeaderOnlineMenuPage from '@/components/online-menu/headerOnlineMenuPage';
import { BUSINESS_OWNER_ONLINE_MENU_GET_INFO } from '@/routeApi/endpoints';


export default function Page({ params }: { params: { menuId: string } }) {
  console.log(params);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isShowMenu , setIsShowMenu]=useState<boolean>(true)
  const [businessOwnerId , setBusinessOwnerId] = useState<string>("")
  const [allProducts , setAllProducts]=useState<ProductType[]>([])
  const [productAssortments , setProductAssortments]=useState<AssortmentGrouptype[]>([])
  const [informationBusiness , setInformationBusiness]=useState<InformationBusinessType | null>(null)
  const [sortedProduct , setSortedProduct]=useState<SortedProductType[]>([])
  const [filteredProduct , setFilteredProduct]=useState<ProductType[]>([])
  const [products , setProducts]=useState<ProductType[]>([])
  const [groupName , setGroupName]=useState<string>("")
  const [inputSearchValue , setInputSearchValue]=useState<string>("")
  const [isGroupActive , setIsGroupActive]=useState<boolean>(false)
  const [isFilteredSearch , setIsFilteredSearch]=useState<boolean>(false)
  const [isShowProduct , setIsShowProduct]=useState<boolean>(false)
  const [productDetails , setProductDetails]=useState<ProductDetailsType | null>(null)
  const [isShowFilterClick , setIsShowFilterClick]=useState<boolean>(false)
  const [showFilterCondition , setShowFilterCondition]=useState<string>("no filter")

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
          BUSINESS_OWNER_ONLINE_MENU_GET_INFO,
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
 await setInputSearchValue("") 
 await setIsFilteredSearch(false) 
 const filteredGroup = allProducts.filter((product : ProductType) => product.productAssortment === groupName )

setIsGroupActive(true)
setGroupName(groupName)
setFilteredProduct(filteredGroup)
setShowFilterCondition(groupName)
}


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

const inputSearchValueHandler =(event : ChangeEvent<HTMLInputElement>)=>{
  setInputSearchValue(event.target.value)
  if(!isGroupActive){
    setShowFilterCondition(event.target.value)
  }
}

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
   await setShowFilterCondition("no filter")
    await  setInputSearchValue("")
     await setFilteredProduct([])
     await setIsGroupActive(false)
     await setAllProducts(data?.data?.products)
    } else{
      await  setInputSearchValue("")
      await setIsShowFilterClick(false)
      await setShowFilterCondition("no filter")
      await setIsFilteredSearch(false)
      setAllProducts(data?.data?.products)
    }
  }

  useEffect(()=>{
    if(!isGroupActive && inputSearchValue === ""){
      setShowFilterCondition("no filter")
    }
  },[inputSearchValue , isGroupActive])


  
  
  if(isLoading ){
    return <LoadingPage/>
  }

  return (
    <>
   <div className='w-full h-max pt-24 pb-6'>
      <HeaderOnlineMenuPage
         setIsShowMenu={setIsShowMenu}
          isShowMenu={isShowMenu}
          defaultHandler={defaultHandler}
          informationBusiness={informationBusiness}
          businessOwnerId={businessOwnerId}
           />

        <div className='container mx-auto px-3 '>
        { isShowMenu ? <>
       
      <SwiperOnlineMenu groupHandler={groupHandler} productAssortments={productAssortments} />
      <FilteringSection
      inputSearchValue={inputSearchValue}
      inputSearchValueHandler={inputSearchValueHandler}
      clearSearchHandler={clearSearchHandler}
      setIsShowFilterClick={setIsShowFilterClick}
      isShowFilterClick={isShowFilterClick}
      showFilterCondition={showFilterCondition}
      defaultHandler={defaultHandler}
      cheapestHandler={cheapestHandler}
      mostExpensiveHandler={mostExpensiveHandler}
     
      />
        { !isFilteredSearch ? <>
        { !isGroupActive ? 
      <ContainerOnlineMenu
       setIsShowProduct={setIsShowProduct}
       setProductDetails={setProductDetails}
       sortedProduct={sortedProduct}
       /> :
      <ContainerFilterMenu
       setIsShowProduct={setIsShowProduct} 
       setProductDetails={setProductDetails} 
       groupName={groupName} 
       filteredProduct={filteredProduct} /> 
          }
          </> :   
      <ContainerFilterMenu 
      setIsShowProduct={setIsShowProduct} 
      setProductDetails={setProductDetails}  
      groupName='search result' 
      filteredProduct={allProducts} />
        }
      </> :
        <InfoBusinesOnlineMenu informationBusiness={informationBusiness}/>
        }
      </div>
    </div> 
    <ShowDetailsOnlineMenu 
    isShowProduct={isShowProduct} 
    setIsShowProduct={setIsShowProduct} 
    productDetails={productDetails}/>
    </>
  )
}