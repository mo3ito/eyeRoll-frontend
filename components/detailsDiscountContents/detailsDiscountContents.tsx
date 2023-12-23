import React, { Dispatch, SetStateAction } from "react";
import ModalDefault from "../modal/modalDefault";
import { informationDiscountType } from "@/types/rollType/determinationRoll";

interface DetailsDiscountContentsPropsType {
  detailsDiscount: informationDiscountType | {};
  isShowDetails: boolean;
  setIsShowDetails: Dispatch<SetStateAction<boolean>>;
}

export default function DetailsDiscountContents({
  detailsDiscount,
  isShowDetails,
  setIsShowDetails,
}: DetailsDiscountContentsPropsType) {
  return (
    <ModalDefault isShowModal={isShowDetails} setIsShowModal={setIsShowDetails}>
      <div className="w-full h-full pb-4 pt-12 px-4">
        <div className="w-full h-full  border border-fuchsia-400 p-3 shadow-md rounded-lg font-semibold bg-sky-50 ">
          <p className="mb-4 ">
            {" "}
            <span>brand name:</span>{" "}
            <span className="font-semibold break-words text-green-600">
              {"brandName" in detailsDiscount && detailsDiscount?.brandName}
            </span>
          </p>
          <p className="mb-4 ">
            {" "}
            <span>discount:</span>{" "}
            <span className="font-semibold break-words text-yellow-600">
              {"discount" in detailsDiscount && detailsDiscount?.discount}
            </span>
          </p>
          <p className="mb-4 ">
            {" "}
            <span>deadline:</span>{" "}
            <span className="font-semibold break-words text-red-400">
              {"startTime" in detailsDiscount && detailsDiscount?.startTime}-
              {"endTime" in detailsDiscount && detailsDiscount.endTime}
            </span>
          </p>
          <p className="mb-4 ">
            {" "}
            <span>address:</span>{" "}
            <span className="font-semibold break-words text-pink-400">
              {"address" in detailsDiscount && detailsDiscount?.address}
            </span>
          </p>
          <p className="mb-4 ">
            {" "}
            <span>worke phone:</span>{" "}
            <span className="font-semibold break-words text-cyan-600">
              {"workPhone" in detailsDiscount && detailsDiscount?.workPhone}
            </span>
          </p>
        </div>
      </div>
    </ModalDefault>
  );
}
