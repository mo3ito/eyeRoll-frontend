import axios, { AxiosError, AxiosResponse } from "axios";


const removal = async ( path : string,id : string) : Promise<AxiosResponse | undefined> => {
 
    try {
      const response = await axios.delete(path ,{
            headers:{
                Authorization : id
            }
        })
        if (response.status === 200) {
            console.log(response);
            return response;
          } else {
            throw new Error("Request failed with status: " + response.status);
          }
    } catch (error) {
        if(error instanceof AxiosError){
            console.error("Request failed with status:", error.response?.status)
            console.error("Response data:", error.response?.data )
        }
        throw error;
    }

}

export default removal;