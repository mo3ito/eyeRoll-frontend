import axios, { AxiosResponse, AxiosError } from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import EYEROLL_TOKEN from "@/help/tokenName";

const getterWithAuth = async (path: string): Promise<AxiosResponse | undefined> => {
    const token = Cookies.get(EYEROLL_TOKEN);

    try {
        if (token) {
            const response = await axios.get(path, {
                headers: {
                    Authorization: token,
                },
            });
            return response;
        } else {
            toast.error("token is empty or invalid");
        }
    } catch (error) {
        console.error(error);
        if (error instanceof AxiosError) {
            console.error("Request failed with status:", error.response?.status);
            console.error("Response data:", error.response?.data);
        }
        toast.error("An error occurred. Please try again later...");
    }
    return undefined; 
};

export default getterWithAuth;