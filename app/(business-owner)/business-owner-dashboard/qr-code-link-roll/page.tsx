"use client";
import { useContext } from "react";
import { AuthContext } from "@/context/authContext";
import useGetBusinessOwnerId from "@/hooks/useGet‌‌BusinessOwnerId";
import { InfosProps } from "@/types/authentication";
import LoadingPage from "@/components/loading/loadingPage";
import QRCodeLinkShower from "@/components/qrCodeLink/qrCodeLinkShower";

export default function QRCodeLinkRoll() {
  const { infos } = useContext(AuthContext);
  const { businessOwnerId } = useGetBusinessOwnerId(infos as InfosProps);
  if (!businessOwnerId) {
    return <LoadingPage />;
  }

  return (
    <QRCodeLinkShower
      QRCodePath={`${process.env.NEXT_PUBLIC_BASE_URL}/get-roll/${businessOwnerId}`}
    />
  );
}
