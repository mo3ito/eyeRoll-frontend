import EYEROLL_TOKEN from "@/help/tokenName";
import Cookies from "js-cookie";
import { NextRouter } from "next/router";

const logOutHandler = async (router : NextRouter) => {
  await Cookies.remove(EYEROLL_TOKEN);
  router.push("/");
};

export default logOutHandler;
