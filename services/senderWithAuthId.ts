import axios, { AxiosError, AxiosResponse } from "axios";



const senderWithAuthId = async (
  path: string,
  body: {},
  id : string
): Promise<AxiosResponse | undefined> => {
    
  try {
    const response = await axios.post(path, body, {
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

export default senderWithAuthId;
