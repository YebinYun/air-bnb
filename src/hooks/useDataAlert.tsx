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
};
const initUserData = {
  userId: "",
  userName: "",
  userTel: "",
  userDate: "",
  userEmail: "",
  password: "",
  userCheck: "NO",
};

export const useDataAlert = ({ isLogin, isSetting }: props) => {
  const [userAlertData, setUserAlertData] =
    useState<UserDataProps>(initUserData);

  const onChangeHandler = (e: any) => {
    if (e?.target?.type !== "checkbox") {
      return setUserAlertData({
        ...userAlertData,
        [e?.target?.name]: [e?.target?.value],
      });
    } else {
      if (e?.target?.checked) {
        setUserAlertData({ ...userAlertData, [e?.target?.name]: ["YES"] });
      } else {
        setUserAlertData({ ...userAlertData, [e?.target?.name]: ["NO"] });
      }
    }
  };

  const onSubmitHandler = () => {
    if (isLogin) {
      alert(
        `
      아이디:  ${userAlertData.userId} 
      비밀번호:  ${userAlertData.password}
      `
      );
    } else if (isSetting) {
      alert(
        `
      이름:  ${userAlertData.userName} 
      연락처: ${userAlertData.userTel}
      생년월일: ${userAlertData.userDate}
      이메일: ${userAlertData.userEmail}
      비밀번호:  ${userAlertData.password} 
      개인정보 동의: ${userAlertData.userCheck}
      `
      );
    } else {
      alert(
        `
        이름:  ${userAlertData.userName}
        아이디:  ${userAlertData.userId} 
        비밀번호:  ${userAlertData.password}
        `
      );
    }
    setUserAlertData(initUserData);
  };

  return { userAlertData, onChangeHandler, onSubmitHandler };
};
