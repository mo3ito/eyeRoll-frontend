import Cookies from "js-cookie";
import EYEROLL_TOKEN from "@/help/tokenName";
import { InfosProps } from "@/types/authentication";

const useLogoutHandler = async (
  router: any,
  setInfos: (infos: InfosProps | undefined) => void
) => {
  await Cookies.remove(EYEROLL_TOKEN);
  await router.push("/");
  setInfos(undefined);
};

export default useLogoutHandler;