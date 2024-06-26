import {ChangeEventHandler} from "react";

export interface CheckBoxType {
    sizeClasses : string;
    circleClasses : string;
    checked : boolean ;
    backgroundClasses : string;
    onChange:ChangeEventHandler<HTMLInputElement>

}
