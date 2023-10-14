import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import EYEROLL_TOKEN from "@/help/tokenName";

const senderWithAuth = async (
  path: string,
  body: {},
): Promise<AxiosResponse | undefined> => {
    const token = Cookies.get(EYEROLL_TOKEN);
  try {
    const response = await axios.post(path, body, {
      headers: {
        Authorization: token,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("Request failed with status:", error.response?.status);
      console.error("Response data:", error.response?.data);
    }
    throw error;
  }
};

export default senderWithAuth;
