import { ChangeEvent, Dispatch , SetStateAction  } from "react";

export interface ProductType {
    _id: string;
    businessOwnerId: string;
    productDescription: string;
    productAssortment: string;
    productName: string;
    productPrice:string;
    productPricePetty:string;
    product_image_path: string;
  }
  
  
export  interface AssortmentGrouptype {
    id: string;
    group: string;
  }

 export interface ProductDetailsType{
    producName:string;
    productImage:string;
    productPrice:string;
    productPricePetty:string;
    productDescription:string;
    productAssortment:string;
  }
  
    
  export  interface sortedProduct{
      id: string;
      group: string;
      values: ProductType[]
    }
  export  interface ContainerOnlineMenuProps {
    setProductDetails: Dispatch<SetStateAction< ProductDetailsType | null>>
      setIsShowProduct:Dispatch<SetStateAction<boolean>>;
      sortedProduct?: sortedProduct[];
    }

   export interface ContainerFilterMenuProps {
      groupName:string;
      filteredProduct:ProductType[];
      setIsShowProduct:Dispatch<SetStateAction<boolean>>;
      setProductDetails: Dispatch<SetStateAction< ProductDetailsType | null>>
    }

    
  export  interface FilteringSectionProps {
      inputSearchValue :string;
      inputSearchValueHandler: ( event : ChangeEvent<HTMLInputElement>) => void;
      clearSearchHandler : ()=> void;
      setIsShowFilterClick : Dispatch<SetStateAction<boolean>>;
      isShowFilterClick: boolean;
      showFilterCondition : string;
      defaultHandler : ()=> void;
      cheapestHandler : ()=> void;
      mostExpensiveHandler : ()=> void
        
      }


export interface InformationBusinessType {
  logo_image : string;
  phone_number: string;
  work_phone: string;
  work_place_image: string;
  address: string;
  brand_name: string;
}


 export interface SortedProductType{
  id: string;
  group: string;
  values: ProductType[]
}



export interface HeaderOnlineMenuPageProps{
  setIsShowMenu: Dispatch<SetStateAction<boolean>>;
  isShowMenu: boolean;
  defaultHandler:()=>void;
  informationBusiness: InformationBusinessType | null;
}

export interface SwiperOnlineMenuProps{
groupHandler : (groupName : string)=>void;
productAssortments: AssortmentGrouptype[];

}