import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const sender = async (path: string, body: object): Promise<AxiosResponse | undefined> => {
  try {
    const response = await axios.post(path, body, {
      headers: {
        "Content-Type": "application/json",
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

export default sender;





