import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const getter = async (path: string): Promise<AxiosResponse | undefined> => {
  try {
    const response = await axios.get(path);
    return response;
  } catch (error) {
    console.error(error);
    if (error instanceof AxiosError) {
      console.error("Request failed with status:", error.response?.status);
      console.error("Response data:", error.response?.data);
    }
    toast.error("An error occurred. Please try again later...");
    return undefined;
  }
};

export default getter;
