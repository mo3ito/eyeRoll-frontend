import { Dispatch , SetStateAction } from 'react'
import { InfosProps } from '@/types/authentication'

export interface BoxMenuPropsType {
setShowAside: Dispatch<SetStateAction<boolean>>;
setShowBox: Dispatch<SetStateAction<boolean>>;
setShowRoll: Dispatch<SetStateAction<boolean>>;
showBox : boolean;
showRoll:boolean;
router: any;
setInfos : (infos: InfosProps | undefined) => void;
infos: InfosProps | undefined;
showOnlineMenu: boolean
setShowOnlineMenu: Dispatch<SetStateAction<boolean>>
}