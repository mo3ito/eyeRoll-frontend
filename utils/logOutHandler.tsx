import EYEROLL_TOKEN from "@/help/tokenName";
import Cookies from "js-cookie";


const logOutHandler = async (router : any) => {
  await Cookies.remove(EYEROLL_TOKEN);
  router.push("/");
};

export default logOutHandler;
