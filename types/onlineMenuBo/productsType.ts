import { Dispatch, SetStateAction } from "react";

export interface EditProductsProps {
  producName: string;
  productPrice: string | number;
  productAssortment: string;
  productDescription: string;
  productPricePetty: string | number;
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
}
