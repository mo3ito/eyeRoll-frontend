import { ChangeEvent } from "react";

 const handleInputChange = (event: ChangeEvent<HTMLInputElement>, setStateFunction: Function) => {
    setStateFunction(event?.target.value);
  }

  export default handleInputChange;