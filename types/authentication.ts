import  {  Dispatch, SetStateAction } from "react";



interface InfosProps {
  address: string;
  brand_name: string;
  city_name: string;
  country_name: string;
  email: string;
  id: string;
  is_additional_specifications: boolean;
  is_businessOwner:boolean;
  is_verified:boolean;
  last_name: string;
  name:string;
  password?:string;
  phone_number:string;
  registration_date:string;
  state_name:string;
  username:string
}

export interface AuthContextProps {
  [index: string]: string | object | null | boolean;
  isVerified: boolean;
  isLoggedIn: boolean;
  token: string | null;
  infos: InfosProps | null;
  login: (infos: object, token: string) => void;
  logout: () => void;
  setInfos: (infos: object) => void;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  setIsVerified: Dispatch<SetStateAction<boolean>>;
  isVerifyedHandler: (infos: object, token: string) => void;
}
