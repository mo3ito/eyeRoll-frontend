import { Dispatch, SetStateAction } from "react";

export interface DeterminationSpecialProductProps {
  title: string;
  showInformation: () => void;
  isChecked: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
}

export interface SpecificSpecialProductsType {
  id: string;
  productName: string;
  discountProduct: number;
}
