import axios, { AxiosError, AxiosResponse } from "axios";


const updaterWithId = async (
  path: string,
  id : string,
  body: {},
): Promise<AxiosResponse | undefined> => {
    
  try {
    const response = await axios.put(path, body, {
      headers: {
        Authorization: id,
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

export default updaterWithId;
