import UserModalComponent from "@/components/header/headerUserMenu/UserModalComponent";
import React from "react";

type props = {
  closeModalHandler: () => void;
  userChangeHandler: () => void;
  isSetting: boolean;
  isLogin: boolean;
  userChoice: string;
};

const UserModalContainer = ({
  closeModalHandler,
  userChangeHandler,
  isSetting,
  isLogin,
  userChoice,
}: props) => {
  return (
    <UserModalComponent
      closeModalHandler={closeModalHandler}
      userChangeHandler={userChangeHandler}
      isLogin={isLogin}
      isSetting={isSetting}
      userChoice={userChoice}
    />
  );
};

export default UserModalContainer;
