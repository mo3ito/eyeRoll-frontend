"use client";
import { useState, useContext } from "react";
import getterWithAuthId from "@/services/getterWithAuthId";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "@/context/authContext";
import useGetAdminId from "@/hooks/useGetAdminId";
import { InfosProps } from "@/types/authentication";
import LoadingPage from "@/components/loading/loadingPage";
import InfosRequestsBox from "@/components/admin/infosRequestsBox";
import { RequestedRegisterationType } from "@/types/admin/adminTypes";
import RequestsPageScreenMode from "@/components/admin/requestsPageScreenMode";
import RequestsPageMoblieMode from "@/components/admin/requestsPageMoblieMode";
import senderWithAuthId from "@/services/senderWithAuthId";
import { toast } from "react-toastify";
import Modal from "@/components/modal/modal";
import { ADMIN_CONFIRM_REGISTERATION_REQUEST , ADMIN_GET_REGISTERATION_REQUESTS } from "@/routeApi/endpoints";

export default function Requests() {
  const [isShowInfos, setIsShowInfos] = useState<boolean>(false);
  const [allInfosRequested, setAllInfosRequested] = useState<null | RequestedRegisterationType>(null);
  const [isShowModalConfirm, setIsShowModalConfirm] = useState<boolean>(false);
  const [businessOwnerId, setBusinessOwnerId] = useState<string>("");
  const { infos } = useContext(AuthContext);
  const { adminId } = useGetAdminId(infos as InfosProps);
  const queryKey = ["allRequest"];
  const queryClient = useQueryClient();
  const { data: requests, isLoading } = useQuery(
    adminId ? queryKey : [],
    () => {
      if (adminId) {
        return getterWithAuthId(
          ADMIN_GET_REGISTERATION_REQUESTS,
          adminId
        );
      }

      return null;
    }
  );

  const showInfosHandler = async (
    _id: string,
    name: string,
    last_name: string,
    username: string,
    email: string,
    phone_number: string,
    country_name: string,
    state_name: string,
    city_name: string,
    address: string,
    brand_name: string,
    postal_code: string,
    work_phone: string,
    registration_date: string
  ) => {
    await setAllInfosRequested({
      _id,
      name,
      last_name,
      username,
      email,
      phone_number,
      country_name,
      state_name,
      city_name,
      address,
      brand_name,
      postal_code,
      work_phone,
      registration_date,
    });
    setIsShowInfos(true);
  };

  const confirmRegisterHandler = async () => {
    const body = {
      businessOwnerId,
    };

    try {
      if (adminId && businessOwnerId) {
        const response = await senderWithAuthId(
          ADMIN_CONFIRM_REGISTERATION_REQUEST,
          body,
          adminId
        );
        if (response?.status === 200) {
          await queryClient.invalidateQueries(queryKey);
          setIsShowModalConfirm(false);
          toast.success(response.data.message);
        }
      }
    } catch (error: any) {
      if (error?.response.status === 400) {
        const errorMessage = error.response.data.message;
        setIsShowModalConfirm(false);
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred while processing your request");
      }
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <RequestsPageScreenMode
        requests={requests}
        showInfosHandler={showInfosHandler}
        setIsShowModalConfirm={setIsShowModalConfirm}
        setBusinessOwnerId={setBusinessOwnerId}
      />

      <RequestsPageMoblieMode
        requests={requests}
        showInfosHandler={showInfosHandler}
        setIsShowModalConfirm={setIsShowModalConfirm}
        setBusinessOwnerId={setBusinessOwnerId}
      />

      <InfosRequestsBox
        isShowInfos={isShowInfos}
        setIsShowInfos={setIsShowInfos}
        allInfosRequested={allInfosRequested as RequestedRegisterationType}
      />

      <Modal
        text="Are you sure to confirm?"
        isShowModal={isShowModalConfirm}
        setIsShowModal={setIsShowModalConfirm}
        confirmHandler={confirmRegisterHandler}
        cancelHandler={() => setIsShowModalConfirm(false)}
      />
    </>
  );
}
