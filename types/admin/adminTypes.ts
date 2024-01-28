import { Dispatch, SetStateAction } from "react";
import { InfosProps } from "../authentication";
import { AxiosResponse } from "axios";

export interface BoxMenuProfileAdminPropsType {
  setShowAside: Dispatch<SetStateAction<boolean>>;
  setShowBox: Dispatch<SetStateAction<boolean>>;
  showBox: boolean;
  router: any;
  setInfos: (infos: InfosProps | undefined) => void;
  infos: InfosProps | undefined;
}

export interface RequestedRegisterationType {
  address: string;
  brand_name: string;
  city_name: string;
  country_name: string;
  email: string;
  last_name: string;
  name: string;
  phone_number: string;
  postal_code: string;
  registration_date: string;
  state_name: string;
  username: string;
  work_phone: string;
  _id: string ;
}

export interface RequestsPagePropsType {
  requests: AxiosResponse<any, any> | null | undefined;
  showInfosHandler: (
    _id:string,
    name: string,
    last_name: string,
    username: string,
    email: string,
    phone_number: string,
    country_name: string,
    state_name: string,
    city_name: string,
    address: string,
    brand_name: string,
    postal_code: string,
    work_phone: string,
    registration_date: string
  ) => void;
  setBusinessOwnerId: Dispatch<SetStateAction<string>>;
  setIsShowModalConfirm: Dispatch<SetStateAction<boolean>>;
}
