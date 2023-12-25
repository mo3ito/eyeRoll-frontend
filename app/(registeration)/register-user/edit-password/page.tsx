import React from "react";
import EditPasswordPage from "@/components/editPasswordPage/editPasswordPage";
import { USERS_CHANGE_PASSWORD_FORGOT } from "@/routeApi/endpoints";

export default function EditPassword() {
  return (
    <EditPasswordPage
      pathApi={USERS_CHANGE_PASSWORD_FORGOT}
      pathRedirect="/register-user/login"
    />
  );
}
