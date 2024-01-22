import { useLoginDataState, userDataSelector } from "@/store/auth/userdata";
import axios from "axios";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

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

  const [userData, setUserData] = useRecoilState(userDataSelector);
  const { tokenData, isLoginData } = useLoginDataState();

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
      .post(`${process.env.NEXT_PUBLIC_IP_API_KEY}/user`, userAlertData)
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
      .post(`${process.env.NEXT_PUBLIC_IP_API_KEY}/login`, userAlertData, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.resultCode === 200) {
          setUserData(res.data.data);
          localStorage.setItem("token", JSON.stringify(res.data.data));
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
