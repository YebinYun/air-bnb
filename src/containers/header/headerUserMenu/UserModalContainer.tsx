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
  // const data = { userName: "userName", userId: "userId", password: "password" };

  // const getData = async () => {
  //   await axios
  //     .post("http://localhost:8000/user", data)
  //     .then((res) => {
  //       console.log("res", res?.data);
  //     })
  //     .catch((err) => {
  //       console.log("err===>", err);
  //     });
  // };

  // getData();

  const getData = async () => {
    await axios
      .get("http://localhost:8000/user")
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
      getData={getData}
    />
  );
};

export default UserModalContainer;
