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
    