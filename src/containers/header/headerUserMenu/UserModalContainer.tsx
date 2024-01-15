import React from "react";
import axios from "axios";
import UserModalComponent from "@/components/header/headerUserMenu/UserModalComponent";

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
  const getData = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_IP_API_KEY}/user`)
      .then((res) => {
        console.log("res", res?.data);
      })
      .catch((err) => {
        console.log("err===>", err);
      });
  };

  getData();

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
