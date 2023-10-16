import axios, { AxiosResponse, AxiosError } from "axios";
import { toast } from "react-toastify";


const getterWithAuthId = async (path: string , id : string): Promise<AxiosResponse | undefined> => {
   
    try {
        if (id) {
            const response = await axios.get(path, {
                headers: {
                    Authorization: id,
                },
            });
            return response;
        } else {
            toast.error("id is empty or invalid");
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

export default getterWithAuthId;