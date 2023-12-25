
import axios, { AxiosError, AxiosResponse } from "axios";


const updaterWithPatchWithoutId = async (
  path: string,
  body: {},
): Promise<AxiosResponse | undefined> => {
    
  try {
    const response = await axios.patch(path, body);
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

export default updaterWithPatchWithoutId;
