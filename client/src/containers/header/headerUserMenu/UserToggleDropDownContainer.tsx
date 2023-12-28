import UserToggleDropDownComponent from "@/components/header/headerUserMenu/UserToggleDropDownComponent";
import React, { useState } from "react";

type props = {
  loginModalHandler: () => void;
  signupModalHandler: () => void;
  settingModalHandler: () => void;
};

const UserToggleDropDownContainer = ({
  loginModalHandler,
  signupModalHandler,
  settingModalHandler,
}: props) => {
  return (
    <UserToggleDropDownComponent
      loginModalHandler={loginModalHandler}
      signupModalHandler={signupModalHandler}
      settingModalHandler={settingModalHandler}
    />
  );
};

export default UserToggleDropDownContainer;
