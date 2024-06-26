import React from "react";
import Login from "@/components/registeration/common/login";

export default function Page() {
  return (
    <Login
      text="login as customer"
      path="/"
      isBusinessOwner={false}
      link="/register-user"
    />
  );
}
