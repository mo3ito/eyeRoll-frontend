import { Dispatch , SetStateAction } from "react";
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

 export interface ProductDetails{
    producName:string;
    productImage:string;
    productPrice:string;
    productPricePetty:string;
    productDescription:string
  }
  
    
  export  interface sortedProduct{
      id: string;
      group: string;
      values: ProductType[]
    }
  export  interface ContainerOnlineMenuProps {
    setProductDetails: Dispatch<SetStateAction< ProductDetails | null>>
      setIsShowProduct:Dispatch<SetStateAction<boolean>>;
      sortedProduct?: sortedProduct[];
    }
  