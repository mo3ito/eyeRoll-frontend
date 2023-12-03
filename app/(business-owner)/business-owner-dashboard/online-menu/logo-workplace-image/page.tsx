"use client";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import FormDataHandle from "@/components/FormDataHandle/FormDataHandle";
import {
  BUSINESS_OWNER_SEND_LOGO_IMAGE,
  BUSINESS_OWNER_DELETE_LOGO_IMAGE,
  BUSINESS_OWNER_SEND_WORK_PLACE_IMAGE,
  BUSINESS_OWNER_DELETE_WORK_PLACE_IMAGE,
} from "@/routeApi/endpoints";

export default function page() {
  const { infos } = useContext(AuthContext);

  return (
    <div className="pt-48 container mx-auto ">
      <div className=" max-xs:w-10/12 w-9/12 sm:w-7/12 md:w-1/2 lg:w-5/12 xl:w-5/12 2xl:w-4/12 h-max shadow-lg  mx-auto border border-fuchsia-400 xl:px-20 2xl:px-16 p-4 rounded-lg flex flex-col gap-y-8 mb-10 ">
        <FormDataHandle
          srcImage={infos?.logo_image_path ? infos?.logo_image_path : ""}
          content="import logo"
          fileName="logoImage"
          pathApi={BUSINESS_OWNER_SEND_LOGO_IMAGE}
          pathApiDelete={BUSINESS_OWNER_DELETE_LOGO_IMAGE}
        />

        <FormDataHandle
          srcImage={
            infos?.work_place_image_path ? infos.work_place_image_path : ""
          }
          content="import work place image"
          fileName="workPlaceImage"
          pathApi={BUSINESS_OWNER_SEND_WORK_PLACE_IMAGE}
          pathApiDelete={BUSINESS_OWNER_DELETE_WORK_PLACE_IMAGE}
        />
      </div>
    </div>
  );
}
