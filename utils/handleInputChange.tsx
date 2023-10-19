import { ChangeEvent } from "react";

export const handleInputChange = (event: ChangeEvent<HTMLInputElement>, setStateFunction: Function) => {
    setStateFunction(event?.target.value);
  }