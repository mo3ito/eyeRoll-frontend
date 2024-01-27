import Cookies from "js-cookie";
import EYEROLL_TOKEN from "@/help/tokenName";
import { InfosProps } from "@/types/authentication";
import { Dispatch, SetStateAction } from "react";

const logoutHandler = async (
  router: any,
  setInfos: (infos: InfosProps | undefined) => void,
  setFirstWordUsername?: Dispatch<SetStateAction<string>>
) => {
  await Cookies.remove(EYEROLL_TOKEN);
  await router.push("/");
  await setInfos(undefined);
  if (setFirstWordUsername) {
    setFirstWordUsername("");
  }
};

export default logoutHandler;
