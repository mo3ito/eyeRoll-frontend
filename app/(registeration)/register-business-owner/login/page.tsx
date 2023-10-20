import React from "react";
import Login from "@/components/registeration/common/login";

const LoginBusinessOwner = () => {
  return (
    <Login
      text="login as business owner"
      path="/business-owner-dashboard"
      isBusinessOwner={true}
      link="/register-business-owner"
    />
  );
};

export default LoginBusinessOwner;
