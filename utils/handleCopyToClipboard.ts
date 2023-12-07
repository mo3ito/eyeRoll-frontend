import { toast } from "react-toastify";


const handleCopyToClipboard = async (stateValue : string)=>{
    if(navigator.clipboard && stateValue){
      try {
       await navigator.clipboard.writeText(stateValue)
       toast.success('Link copied!')
      } catch (error) {
        console.error('Copy to clipboard failed: ', error);
      }
    }
  }

  export default handleCopyToClipboard