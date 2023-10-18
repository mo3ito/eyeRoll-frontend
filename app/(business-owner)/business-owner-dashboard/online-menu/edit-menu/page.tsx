'use client'
import {useContext, useState , useEffect , FormEvent, useCallback, ChangeEvent} from 'react';
import { AuthContext } from '@/context/authContext';
import InputDefault from '@/components/shared/inputs/inputDefault';
import getterWithAuthId from '@/services/getterWithAuthId';
import {useQuery , useQueryClient} from '@tanstack/react-query'
import {BUSINESS_OWNER_ONLINE_MENU_UPDATE_PRODUCT, BUSINESS_OWNER_ONLINE_MENU_DELETE_PRODUCT, BUSINESS_OWNER_ONLINE_MENU_FINDE_PRODUCT} from '@/routeApi/endpoints';
import Loading from '@/components/loading/loading';
import ModalDefault from '@/components/modal/modalDefault';
import DescriptionContent from '@/components/descriptionContent/descriptionContent';
import EditProducts from '@/components/editProducts/editProducts';
import Modal from '@/components/modal/modal';
import removal from '@/services/removal';
import { toast } from 'react-toastify';
import updaterWithId from '@/services/updaterWithId';
import { ProductsType , DescriptionContentProps } from '@/types/onlineMenuBo/productsType';

 
export default function EditMenu() {
  const [businessOwnerId, setBusinessOwnerId] = useState<string>("");
  const { infos } = useContext(AuthContext);
  const [isShowModalDescription , setIsShowModalDescription]=useState<boolean>(false)
  const [descriptionInfos , setDescriptionInfos]=useState<DescriptionContentProps | null>(null)
  const [isShowDeleteProduct , setIsShowDeleteProduct]=useState<boolean>(false)
  const [isShowEditProdct , setIsShowEditProduct]=useState<boolean>(false)
  const [productId , setProductId]=useState<string>('')
  const [productName, setProductName] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string | number>("");
  const [productPricePetty , setProductPricePetty]=useState<string | number>("")
  const [productDescription, setProductDescription] = useState<string>("");
  const [productAssortment , setProductAssortment] = useState<string>("")
  const [inputSearchValue , setInputSearchValue]=useState<string>('')
  const [allProducts , setAllProducts]=useState([])
  const queryClient = useQueryClient();

  console.log("productName",productName);
  console.log("productPrice",productPrice);
  console.log("productPricePetty",productPricePetty);
  console.log("productDescription",productDescription);
  console.log("productAssortment" , productDescription);
  
  
  
  
  

  useEffect(() => {
    if (infos && infos.id) {
      setBusinessOwnerId(infos.id);
    }
  }, [infos]);

  console.log(businessOwnerId);

  const queryKey = ['all products', businessOwnerId];
  
  const { data: products, isLoading } = useQuery(businessOwnerId ? queryKey : [], () => {
    if (businessOwnerId) {
      return getterWithAuthId(BUSINESS_OWNER_ONLINE_MENU_FINDE_PRODUCT, businessOwnerId);
    }
    return null;
  });

  useEffect(()=>{
    products && setAllProducts(products?.data)
  },[products])

  const descriptionHandler = async (productName : string , productDescription:string)=>{
   await setDescriptionInfos({
      productName,
      productDescription
    })
    setIsShowModalDescription(true)
  }
  console.log(products);
  
  const processDeleteHandler = async (productId : string)=>{
    await setProductId(productId)
    setIsShowDeleteProduct(true)
  }
 
  
  
  const deleteProductHandler = async ()=>{  
    try {
      if(productId){
        const response = await removal(BUSINESS_OWNER_ONLINE_MENU_DELETE_PRODUCT , productId )
        if(response?.status === 200){
          await queryClient.invalidateQueries(queryKey);
          setIsShowDeleteProduct(false);
          toast.success("Product deleted successfully");
        }
      }
    } catch (error : any) {
      if(error?.response.status === 400){
        const errorMessage = error.response.data.message;
          toast.error(errorMessage);
      } else{
        toast.error("An error occurred while processing your request");
      }
    }
  }

  const processEditHandler = (producName: string ,productPrice : string , productPricePetty : string , productAssortment : string ,productDescription:string , productId : string )=>{
    setIsShowEditProduct(true)
    setProductName(producName)
    setProductAssortment(productAssortment)
    setProductDescription(productDescription)
    setProductPrice(productPrice)
    setProductPricePetty(productPricePetty)
    setProductId(productId)
  }
  
  const submitHandler= async (event : FormEvent)=>{
    event.preventDefault()
    const body = {
      productName,
      productPricePetty,
      productAssortment,
      productPrice,
      productDescription
    }

    try {
        const response = await updaterWithId(BUSINESS_OWNER_ONLINE_MENU_UPDATE_PRODUCT , productId , body)
        if(response?.status === 200){
          queryClient.invalidateQueries(queryKey)
          setIsShowEditProduct(false)
          toast.success("product updated successfully")
        }
    } catch (error : any) {
      if(error?.response.status === 400 ){
        const errorMessage = error.response.data.message;
          toast.error(errorMessage);
      }else{
        toast.error("An error occurred while processing your request");
      }
        
    }
    
  }

  const inputSearchValueHandler =useCallback((event : ChangeEvent<HTMLInputElement>)=>{
    setInputSearchValue(event.target.value)
  }
 ,[]) 
  
 console.log(inputSearchValue);
 useEffect(()=>{
  if(inputSearchValue && products){
   const searchedValue = products?.data.filter((product : ProductsType)=> product.productName.startsWith(inputSearchValue))
    setAllProducts(searchedValue)
  }
  if(inputSearchValue === ""){
    setAllProducts(products?.data)
  }
 },[inputSearchValue , products])

 
 const clearSearchHandler = ()=>{
  setInputSearchValue("")
  setAllProducts(products?.data)
 }
 

 

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
    <div className="w-full h-screen overflow-y-auto pb-40 bg-sky-100 px-8 ">
      {allProducts && allProducts.length > 0 ? <div className="container mx-auto">

      <div className="flex flex-col h-max gap-y-10 items-center w-full  bg-sky-100 pt-4 sticky top-0">
      <div className='w-full h-max '>
      <div className='w-max  h-10   pt-2'>
          <span>Total number of goods: {products?.data.length}</span>
        </div>
        <div className='w-1/5  border-2 inline-block border-fuchsia-300 rounded-lg h-10 '>
        <svg className='w-4 h-4 inline-block mx-1 fill-zinc-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
          <InputDefault type='text' value={inputSearchValue} onChange={inputSearchValueHandler} placeholder='search product name' className=' h-full w-11/12  pr-2 outline-none  bg-transparent ' />
        </div>
        <button onClick={clearSearchHandler} className='inline-block ml-3 px-4 rounded-lg h-10 bg-fuchsia-300'>clear search</button>
      
        </div>
        
        <div className="flex text-center h-16 w-full font-semibold">
            <div className="w-1/6 rounded-l-lg">number</div>
            <div className="w-1/6 break-words">name</div>
            <div className="w-1/6 break-words">assortment</div>
            <div className="w-1/6 break-words">amount</div>
            <div className="w-1/6 break-words">description</div>
            <div className="w-1/6 break-words rounded-r-lg">edit</div>
          </div>
        </div>

        <div className="flex flex-col h-max items-center">
          {allProducts?.map((product: ProductsType , index : number)=>
            <div key={product._id} className="flex border border-fuchsia-300 bg-blue-100 text-center items-center h-max py-4 max-h-max w-full rounded-lg mb-4">
            <div className="w-1/6 break-words  p-2  mx-3">{index+1}</div>
              <div className="w-1/6 break-words  p-2  mx-3">
                {product.productName}
              </div>
              <div className="w-1/6 break-words  p-2  mx-3">{product.productAssortment}</div>
              { product.productPricePetty  ? <div className="w-1/6 break-words  p-2  mx-3"> {product.productPrice}.{product.productPricePetty} $</div>
             : <div className="w-1/6 break-words  p-2  mx-3"> {product.productPrice} $</div>
              }
              <div className="w-1/6 break-words  p-2  mx-3">
                <button onClick={()=>descriptionHandler(product.productName , product.productDescription)} className="w-40 bg-fuchsia-300 py-2 rounded-lg">show description</button>
              </div>
              <div className="w-1/6 break-words  p-2  mx-3">
                <button onClick={()=>processEditHandler(product.productName , product.productPrice , product.productPricePetty , product.productAssortment , product.productDescription, product._id)} className="mr-4 pt-2">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"></path>
                  </svg>
                </button>
                <button onClick={()=>processDeleteHandler(product._id)} className="">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM13.4142 13.9997L15.182 15.7675L13.7678 17.1817L12 15.4139L10.2322 17.1817L8.81802 15.7675L10.5858 13.9997L8.81802 12.232L10.2322 10.8178L12 12.5855L13.7678 10.8178L15.182 12.232L13.4142 13.9997ZM9 4V6H15V4H9Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            )}
        </div>
      </div> : <p className='text-center text-lg mt-20'>there is no product in your online menu</p>}
    </div>
    <ModalDefault
        closeIconClassName="w-8 h-8 fill-red-400"
        isShowModal={isShowModalDescription}
        setIsShowModal={setIsShowModalDescription}
      >
        <DescriptionContent  productName={descriptionInfos?.productName}
         productDescription={descriptionInfos?.productDescription} /> 
      </ModalDefault>
      <Modal
        cancelHandler={() => setIsShowDeleteProduct(false)}
        text="Are you sure to delete?"
        isShowModal={isShowDeleteProduct}
        setIsShowModal={setIsShowDeleteProduct}
        confirmHandler={deleteProductHandler}
      />
       <ModalDefault
        closeIconClassName="w-8 h-8 fill-red-400"
        isShowModal={isShowEditProdct}
        setIsShowModal={setIsShowEditProduct}
      >
       <EditProducts onSubmit={submitHandler}
      setProductName={setProductName}
      setProductAssortment={setProductAssortment}
      setProductPrice={setProductPrice}
      setProductPricePetty={setProductPricePetty}
      setProductDescription={setProductDescription}
      producName={productName}
      productPrice={productPrice}
      productPricePetty={productPricePetty}
      productDescription={productDescription}
      productAssortment={productAssortment} />
      </ModalDefault>
    </>
  );
}