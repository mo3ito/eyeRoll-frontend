import { Dispatch, SetStateAction } from "react";

export interface SpecificSpecialProductsType {
  id: string;
  productName: string;
  discountProduct: number;
}


export interface DeterminationSpecialProductProps {
  title: string;
  showInformation: () => void;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  specificSpecialProducts: SpecificSpecialProductsType[],
  setSpecificSpecialProducts:Dispatch<SetStateAction<SpecificSpecialProductsType[]>>
}

