import { Dispatch, SetStateAction, useEffect } from "react";

type SetStateType = Dispatch<SetStateAction<boolean>>;

const useDropDownHandler = <T extends HTMLElement | null>(
  refName: React.RefObject<T>,
  setState: SetStateType
) => {
  useEffect(() => {
    const dropDownHandler = (event: MouseEvent) => {
      if (refName && refName?.current) {
        if (!refName?.current.contains(event.target as Node)) {
          setState(false);
        }
      }
    };

    document.addEventListener("click", dropDownHandler);
    return () => document.removeEventListener("click", dropDownHandler);
  }, []);
};

export default useDropDownHandler;
