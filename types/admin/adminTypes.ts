import { Dispatch , SetStateAction } from "react";
import { InfosProps } from "../authentication";

export interface BoxMenuProfileAdminPropsType {
    setShowAside: Dispatch<SetStateAction<boolean>>;
    setShowBox: Dispatch<SetStateAction<boolean>>;
    showBox : boolean;
    router: any;
    setInfos : (infos: InfosProps | undefined) => void;
    infos: InfosProps | undefined;
    }
    

    export interface RequestedRegisterationType {
        address: string;
        brand_name:string;
        city_name:string;
        country_name:string;
        email:string;
        last_name:string;
        name:string;
        phone_number:string;
        postal_code:string;
        registration_date:string;
        state_name:string;
        username:string;
        work_phone:string;
        _id?:string
    }