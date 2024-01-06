import { Dispatch, SetStateAction } from "react";
import { ProductDetailsType } from "../onlineMenuUser/onlineMenuUser";



export interface EditProductsProps {
  producName: string;
  productPrice: string | number;
  productAssortment: string;
  productDescription: string;
  productPricePetty: string | number;
  imageFile: null | File;
  setProductName: Dispatch<SetStateAction<string>>;
  setProductAssortment: Dispatch<SetStateAction<string>>;
  setProductPrice: Dispatch<SetStateAction<string | number>>;
  setProductPricePetty: Dispatch<SetStateAction<string | number>>;
  setProductDescription: Dispatch<SetStateAction<string>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export interface ProductsType {
  _id: string;
  productName: string;
  productAssortment: string;
  productPrice: string;
  productDescription: string;
  productPricePetty: string;
  product_image_path:string;
}

export interface DescriptionContentProps {
  productName: string | undefined;
  productDescription: string | undefined;
}

export interface EditMenuType {
  allProducts: ProductsType[];
  descriptionHandler: (productName: string, productDescription: string) => void;
  processEditHandler: (
    productName: string,
    productPrice: string,
    productPricePetty: string,
    productAssortment: string,
    productDescription: string,
    productId: string
  ) => void;
  processDeleteHandler: (productId: string) => void;
  setDetailsProduct:Dispatch<SetStateAction<ProductDetailsType | null>>;
  setIsShowProduct:Dispatch<SetStateAction<boolean>>;
  setIsDeleteProductImageModal:Dispatch<SetStateAction<boolean>>;
  setProductId:Dispatch<SetStateAction<string>>;
  setImageFile:Dispatch<SetStateAction<File | null>>;
  setIsChangeImage:Dispatch<SetStateAction<boolean>>; 

}

export interface allRequestType{
  discount: string;
  discountId:string;
  expiration_time: string;
  username:string;
  _id:string;
}

export interface ShowPresenceUserPropsType{
  setIsShowModalCalculator: Dispatch<SetStateAction<boolean>>;
  setIsShowCancelModal:Dispatch<SetStateAction<boolean>>;
  discountId:string;
  username:string;
  discount:string;
  setDiscountValue:Dispatch<SetStateAction<string>>;
  setIdsForDelete:Dispatch<SetStateAction<string[]|[]>>;
  idsForDelete:string[];
  setSingleIdForDelete:Dispatch<SetStateAction<string>>
  }
  
