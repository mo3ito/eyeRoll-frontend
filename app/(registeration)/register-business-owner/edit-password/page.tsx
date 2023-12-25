import React from "react";
import EditPasswordPage from "@/components/editPasswordPage/editPasswordPage";
import { BUSINESS_OWNER_CHANGE_PASSWORD_FORGOT } from "@/routeApi/endpoints";

export default function EditPassword() {
  return (
    <EditPasswordPage
      pathApi={BUSINESS_OWNER_CHANGE_PASSWORD_FORGOT}
      pathRedirect="/register-business-owner/login"
    />
  );
}
