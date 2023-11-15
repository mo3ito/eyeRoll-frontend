"use client";
import InputDefault from "@/components/shared/inputs/inputDefault";
import ButtonDefault from "@/components/shared/button/buttonDefault";
import {FormEvent, useContext, useEffect, useRef, useState, useCallback, ChangeEvent,} from "react";
import { AuthContext } from "@/context/authContext";
import LoadingPage from "@/components/loading/loadingPage";
import handleInputChange from "@/utils/handleInputChange";
import { BUSINESS_OWNER_UPDATE_INFORMATION , BUSINESS_OWNER_PROFILE_IMAGE , BUSINESS_OWNER_IS_PASSWORD_DELETE_PROFILE_IMAGE  } from "@/routeApi/endpoints";
import updaterWithPatch from "@/services/updaterWihPatch";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import EYEROLL_TOKEN from "@/help/tokenName";
import { useRouter } from "next/navigation";
import InputPassword from "@/components/shared/inputs/inputPassword";
import senderFormDataWithId from "@/services/senderFormDataWithId";
import removal from "@/services/removal";
import Modal from "@/components/modal/modal";


export default function Information() {
  const { infos, login } = useContext(AuthContext);
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [brandName, setBrandName] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [workPhone, setWorkPhone] = useState<string>("");
  const [isBorderBold, setIsBorderBold] = useState<boolean>(false);
  const [profileImage , setProfileImage]=useState<File | null>(null)
  const [isShowInputsForImageProfile , setIsShowInputsForImageProfile]=useState<boolean>(false)
  const [isLoadingForApi , setIsLosdingForApi]=useState<boolean>(false)
  const [isShowDeleteProfileImageModal , setIsShowDeleteProfileImageModal]=useState<boolean>(false)
  const phoneNumberRef = useRef<null | HTMLDivElement>(null);
  const { businessOwnerId } = useGetBusinessOwnerId(infos);
  const token = Cookies.get(EYEROLL_TOKEN);
  const router = useRouter();

  console.log(businessOwnerId);
  console.log(token);

  useEffect(() => {
    const handleOutSidePhoneNumberRef = (event: MouseEvent) => {
      if (
        phoneNumberRef.current &&
        !phoneNumberRef.current.contains(event.target as Node)
      ) {
        setIsBorderBold(false);
      }
    };

    document.addEventListener("click", handleOutSidePhoneNumberRef);

    return () => {
      document.removeEventListener("click", handleOutSidePhoneNumberRef);
    };
  }, []);

  console.log(infos);

  useEffect(() => {
    if (infos) {
      setName(infos?.name);
      setLastName(infos?.last_name);
      setUsername(infos?.username);
      setEmail(infos?.email);
      setPhoneNumber(infos?.phone_number);
      setCountry(infos?.country_name);
      setState(infos?.state_name);
      setCity(infos?.city_name);
      setAddress(infos?.address);
      setBrandName(infos?.brand_name);
      setPostalCode(infos.postal_code);
      setWorkPhone(infos?.work_phone);
    }
  }, [infos]);
  console.log(infos);

  console.log(phoneNumber);

  const informationSubmitHandler = async (event: FormEvent) => {
    event.preventDefault();

    const body = {
      name,
      last_name: lastName,
      phone_number: phoneNumber,
      username,
      email,
      country_name: country,
      state_name: state,
      city_name: city,
      address,
      brand_name: brandName,
      postal_code: postalCode,
      work_phone: workPhone,
      password,
    };
    if (
      !email ||
      !name.length ||
      !lastName.length ||
      !phoneNumber ||
      !username.length
    ) {
      toast.warn("Please Fill in the empty inputs");
      return;
    } else if (password !== "" && password.length < 8) {
      toast.warn("the password must be at least 8 characters long");
      return;
    } else if (password !== repeatPassword) {
      toast.warn("Repeating the password is not the same as the password");
      return;
    }
    try {
      const response = await updaterWithPatch(
        BUSINESS_OWNER_UPDATE_INFORMATION,
        businessOwnerId,
        body
      );
      if (response?.status === 200) {
        console.log(response);

        await login(response.data.userInfos, response.data.token);
        toast.success("information updated successfully");
        router.refresh();
      }
    } catch (error: any) {
      if (error.response?.status === 400) {
        const errorMessage = error?.response.data.message;
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred while processing your request");
      }
    }
  };

  const onInputChange = (event : ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0].type);
      if(event.target.files[0].type === "image/jpeg" || event.target.files[0].type === "image/jpg"){
        const selectedFile = event.target.files[0];
        setProfileImage(selectedFile);
      }else{
        toast.warn("Only photos in jpg and jpeg format are allowed")
      }
     
      
    }
  };

  const submitImage = async () => {
    if (profileImage) {
      const formData = new FormData();
      formData.append("profileImage", profileImage);
      try {
        setIsLosdingForApi(true)
        const response = await senderFormDataWithId( BUSINESS_OWNER_PROFILE_IMAGE , businessOwnerId , formData )
        console.log(response?.data); 
        if(response?.status === 200){
          await login(response?.data.userInfos , response?.data.token )
          router.refresh()
          toast.success("Avatar updated successfully")
          setIsLosdingForApi(false)
          setIsShowInputsForImageProfile(false)
        
        }
      } catch (error : any) {
        if (error.response?.status === 400) {
          setIsLosdingForApi(false)
          setIsShowInputsForImageProfile(false)
          const errorMessage = error?.response.data.message;
          toast.error(errorMessage);
        } else {
          setIsLosdingForApi(false)
          setIsShowInputsForImageProfile(false)
          toast.error("An error occurred while processing your request");
        }
      }
    }
  };

  const DeleteProfileImageHandler = async ()=>{
    try {
      const response = await removal(BUSINESS_OWNER_IS_PASSWORD_DELETE_PROFILE_IMAGE , businessOwnerId)
      if(response?.status === 200){
        await login(response?.data.userInfos , response?.data.token )
      router.refresh()
      setIsShowDeleteProfileImageModal(false)
      toast.success("Avatar deleted successfully")
      }
    } catch (error : any) {
      if (error.response?.status === 400) {
        const errorMessage = error?.response.data.message;
        setIsShowDeleteProfileImageModal(false)
        toast.error(errorMessage);
      } else {
        setIsShowDeleteProfileImageModal(false)
        toast.error("An error occurred while processing your request");
      }
    }
  
  }

  console.log(profileImage);
  console.log(infos);
  
  if (!infos) {
    return <LoadingPage />;
  }
  return (
    <div className="bg-sky-100 w-full min-h-screen h-max pb-20 pt-28">
      <div className="container px-4  h-max mx-auto">
        <div  className="max-[350px]:w-11/12  max-w-xs h-max mx-auto mb-5 ">
        <label onClick={()=>setIsShowInputsForImageProfile(true)} className="cursor-pointer flex items-center justify-center flex-col gap-y-3"  htmlFor="changImage">
          <div className=" w-24 h-24 sm:w-32 sm:h-32 rounded-full relative">
            <img src={infos.profile_image_path ? infos.profile_image_path : "/images/defaultPerson.png"} alt="" className="w-full h-full rounded-full bg-fuchsia-400  mx-auto object-cover"/>
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-white absolute bottom-3 right-0 ">
            <svg className="w-6 h-6  fill-fuchsia-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path></svg>
            </div>
            </div>
            {isShowInputsForImageProfile && <> <div className="border w-full text-sm sm:text-base border-fuchsia-400 min-h-10 h-max flex  justify-start items-center p-1 rounded-lg ">
    
            <p className="mr-auto w-full sm:w-max truncate px-1"> <span className="font-semibold">file name:</span> {profileImage?.name}</p>
           
            </div>
            <input  onChange={onInputChange} className=" bg-transparent border border-fuchsia-400 rounded-lg invisible hidden" id="changImage" type="file" /> </>}
           
            </label>
           <div className=" w-full h-max mt-4 flex items-center justify-center gap-x-5 mx-auto  max-[350px]:text-sm  ">
           { isShowInputsForImageProfile && <ButtonDefault onClick={submitImage} loading={isLoadingForApi} className="bg-fuchsia-400  sm:px-2  py-1 rounded-md hoverScale " text="confirm image" />}
           { infos.profile_image_path && <ButtonDefault onClick={()=>setIsShowDeleteProfileImageModal(true)} className="bg-fuchsia-400  sm:px-2 py-1  rounded-md hoverScale " text="delete image" />}
            </div>
            
        </div>
        
        <form onSubmit={informationSubmitHandler}>
          <div className=" max-[450px]:w-11/12 w-8/12 sm:w-10/12  md:w-full  lg:w-10/12  xl:w-7/12 2xl:w-2/4 h-max mx-auto  ">
           
         
            <div className="w-full flex flex-col sm:flex-row justify-around gap-x-5">
              <div className="mb-4 w-full sm:w-1/2 ">
                <p className="mb-3 starBefore ">name</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setName),[])}
                  value={name}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-full sm:w-1/2 ">
                <p className=" starBefore mb-3">last name</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setLastName),[])}
                  value={lastName}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-around gap-x-5">
              <div className="mb-4 w-full sm:w-1/2 ">
                <p className="mb-3 starBefore ">username</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setUsername),[])}
                  value={username}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div ref={phoneNumberRef} className="mb-4 w-full sm:w-1/2">
                <p className="mb-3 starBefore ">phone number</p>
                <div
                  onClick={() => setIsBorderBold(true)}
                  className={`w-full h-10 border border-fuchsia-400 rounded-lg pl-2 ${
                    isBorderBold && "border-2"
                  }`}
                >
                  <PhoneInput
                    defaultCountry="US"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                  />
                </div>
              </div>
            </div>

            <div className="w-full   flex flex-col md:flex-row justify-around gap-x-5">
              <div className="mb-4 w-full md:w-1/3 ">
                <p className="mb-3 starBefore">email</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setEmail),[])}
                  value={email}
                  disabled={false}
                  type="email"
                  className="inputInformationForm"
                />
              </div>
                
              
                

              {/* <div className="flex flex-col sm:flex-row md:w-2/3 gap-x-5">
              <div className="mb-4 w-full sm:w-1/2 ">
                <InputPassword
                  placeholder="if you want to change"
                  className="mb-4 w-full"
                  label="password"
                  labelClassName="mb-3 starBefore"
                  value={password}
                  onChange={useCallback(
                    (event) => handleInputChange(event, setPassword),
                    []
                  )}
                  disabled={false}
                />
              </div>

              <div className="mb-4 w-full sm:w-1/2 ">
                <InputPassword
                  className="mb-4 w-full"
                  label="repeat password"
                  labelClassName="mb-3 starBefore"
                  value={repeatPassword}
                  onChange={useCallback(
                    (event) => handleInputChange(event, setRepeatPassword),
                    []
                  )}
                  disabled={false}
                />
              </div>
              </div> */}
            </div>

            <div className="w-full flex flex-col md:flex-row justify-around gap-x-5">
            <div className="mb-4 w-full md:w-1/3 ">
                <p className="mb-3 starBefore">country</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setCountry),[])}
                  value={country}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="flex flex-col sm:flex-row md:w-2/3 gap-x-5">        
              <div className="mb-4 w-full sm:w-1/2 ">
                <p className="mb-3 starBefore">state</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setState),[])}
                  value={state}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>

              <div className="mb-4 w-full sm:w-1/2 ">
                <p className="mb-3 starBefore">city</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setCity),[])}
                  value={city}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>
              </div>
            </div>

            <div className="w-full flex justify-around gap-x-5 ">
              <div className="mb-4 w-full ">
                <p className="mb-3 starBefore">address</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setAddress),[])}
                  value={address}
                  disabled={false}
                  type="text"
                  className="inputInformationForm  "
                />
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row justify-around gap-x-5">
            <div className="flex flex-col sm:flex-row md:w-2/3 gap-x-5">  
            <div className="mb-4 w-full sm:w-1/2 ">
                <p className="mb-3 starBefore">brand name</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setBrandName),[])}
                  value={brandName}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>
                

              <div className="mb-4 w-full sm:w-1/2 ">
                <p className="mb-3 starBefore">Postal code</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setPostalCode),[])}
                  value={postalCode}
                  disabled={false}
                  type="text"
                  className="inputInformationForm"
                />
              </div>
              </div>

              <div className="mb-4 w-full md:w-1/3 ">
                <p className="mb-3 ">work phone</p>
                <InputDefault
                  onChange={useCallback((event) => handleInputChange(event, setWorkPhone),[])}
                  value={workPhone}
                  disabled={false}
                  type="text"
                  className="inputInformationForm !invalid:bg-red-200"
                />
              </div>
            </div>

            <ButtonDefault
              text="send"
              className="hoverScale w-full mt-4 bg-fuchsia-400 h-12 rounded-lg"
            />
          </div>
        </form>
      </div>
      <Modal
        cancelHandler={() => setIsShowDeleteProfileImageModal(false)}
        text="Are you sure to delete?"
        isShowModal={isShowDeleteProfileImageModal}
        setIsShowModal={setIsShowDeleteProfileImageModal}
        confirmHandler={DeleteProfileImageHandler}
      />
    </div>
  );
}
