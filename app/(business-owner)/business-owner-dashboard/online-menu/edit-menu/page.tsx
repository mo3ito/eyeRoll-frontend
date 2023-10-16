'use client'
import {useContext, useState , useEffect} from 'react';
import { AuthContext } from '@/context/authContext';
import InputDefault from '@/components/shared/inputs/inputDefault';
import getterWithAuthId from '@/services/getterWithAuthId';
import {
  useQuery,useQueryClient,} from '@tanstack/react-query'
import {BUSINESS_OWNER_ONLINE_MENU_ALL_Product,
  BUSINESS_OWNER_ONLINE_MENU_UPDATE_PRODUCT,
  BUSINESS_OWNER_ONLINE_MENU_DELETE_PRODUCT,
  BUSINESS_OWNER_ONLINE_MENU_FINDE_PRODUCT} from '@/routeApi/endpoints';
import Loading from '@/components/loading/loading';
  
 interface ProductsType{
  productName: string;
  productAssortment:string;
  productPrice:string;
  productDescription:string;
 }

export default function EditMenu() {
  const [businessOwnerId, setBusinessOwnerId] = useState<string>("");
  const { infos } = useContext(AuthContext);
  const queryClient = useQueryClient();

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
 
 
  

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-screen overflow-y-auto bg-sky-100 px-8 py-10">
      <div className="container mx-auto">

      <div className='w-full h-10 mb-10'>
        <div className='w-1/5 h-full border-2 border-fuchsia-300 rounded-lg'>
        <svg className='w-4 h-4 inline-block mx-1 fill-zinc-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
          <InputDefault placeholder='search product name' className=' h-full w-11/12 pr-2 outline-none  bg-transparent ' />
        </div>
        </div>

        <div className="flex flex-col h-max items-center ">
          <div className="flex text-center h-16 w-full font-semibold">
            <div className="w-1/6 rounded-l-lg">number</div>
            <div className="w-1/6 break-words">name</div>
            <div className="w-1/6 break-words">assortment</div>
            <div className="w-1/6 break-words">amount</div>
            <div className="w-1/6 break-words">description</div>
            <div className="w-1/6 break-words rounded-r-lg">edit</div>
          </div>
          {products?.data?.map((product: ProductsType , index : number)=>
            <div className="flex border border-fuchsia-300 bg-blue-100 text-center items-center h-max py-4 max-h-max w-full rounded-lg mb-4">
            <div className="w-1/6 break-words  p-2  mx-3">{index+1}</div>
              <div className="w-1/6 break-words  p-2  mx-3">
                {product.productName}
              </div>
              <div className="w-1/6 break-words  p-2  mx-3">{product.productAssortment}</div>
              <div className="w-1/6 break-words  p-2  mx-3">{product.productPrice}</div>
              <div className="w-1/6 break-words  p-2  mx-3">
                <button className="hoverScale w-40 bg-fuchsia-200 py-2 rounded-lg">{product.productDescription}</button>
              </div>
              <div className="w-1/6 break-words  p-2  mx-3">
                <button className="mr-4 pt-2">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z"></path>
                  </svg>
                </button>
                <button className="">
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
      </div>
    </div>
  );
}