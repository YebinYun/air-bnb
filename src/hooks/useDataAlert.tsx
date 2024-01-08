import axios from "axios";
import React, { useState } from "react";

type props = {
  isLogin: boolean;
  isSetting: boolean;
};

type UserDataProps = {
  userId?: string;
  userName?: string;
  password: string;
  userTel?: string;
  userDate?: string;
  userEmail?: string;
  userCheck: boolean | string;
  loggedIn: boolean;
};

const initUserData = {
  userId: "",
  userName: "",
  birthDay: "",
  userDate: "",
  email: "",
  password: "",
  phoneNumber: "",
  userCheck: "NO",
  loggedIn: false,
};

export const useDataAlert = ({ isLogin, isSetting }: props) => {
  const [userAlertData, setUserAlertData] =
    useState<UserDataProps>(initUserData);

  const onChangeHandler = (e: any) => {
    if (e?.target?.type !== "checkbox") {
      return setUserAlertData({
        ...userAlertData,
        [e?.target?.name]: e?.target?.value,
      });
    } else {
      if (e?.target?.checked) {
        setUserAlertData({ ...userAlertData, [e?.target?.name]: ["YES"] });
      } else {
        setUserAlertData({ ...userAlertData, [e?.target?.name]: ["NO"] });
      }
    }
  };

  const registerUser = async () => {
    await axios
      .post("http://localhost:8000/user", userAlertData)
      .then((res) => {
        if (res.data.resultCode === 200) {
          alert("회원가입에 성공하였습니다.");
        } else {
          alert("회원가입에 실패하였습니다.");
        }
      });
  };

  const loginUser = async () => {
    await axios
      .post("http://localhost:8000/login", userAlertData)
      .then((res) => {
        if (res.data.resultCode === 200) {
          setUserAlertData({
            ...userAlertData,
            loggedIn: true,
          });
          alert("로그인에 성공하였습니다.");
        } else {
          alert("로그인에 실패하였습니다.");
        }
      });
  };
  const onSubmitHandler = () => {
    if (isLogin) {
      loginUser();
    } else {
      registerUser();
    }
    setUserAlertData(initUserData);
  };

  return { userAlertData, onChangeHandler, onSubmitHandler };
};
