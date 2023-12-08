import React, { useState } from "react";

interface KeywordHandlerProps {
  loginModal: boolean;
  setting: boolean;
}

interface UserDataProps {
  userId?: string;
  userName?: string;
  password: string;
  userTel?: string;
  userDate?: string;
  userEmail?: string;
  userCheck: boolean | string;
}

const initUserData = {
  userId: "",
  userName: "",
  userTel: "",
  userDate: "",
  userEmail: "",
  password: "",
  userCheck: "NO",
};

export const useKeywordHandler = ({
  loginModal,
  setting,
}: KeywordHandlerProps) => {
  const [userData, setUserData] = useState<UserDataProps>(initUserData);

  const handleOnChange = (e: any) => {
    if (e?.target?.type !== "checkbox") {
      return setUserData({
        ...userData,
        [e?.target?.name]: [e?.target?.value],
      });
    } else {
      if (e?.target?.checked) {
        setUserData({ ...userData, [e?.target?.name]: ["YES"] });
      } else {
        setUserData({ ...userData, [e?.target?.name]: ["NO"] });
      }
    }
  };

  const onSubmitHandler = () => {
    if (loginModal) {
      alert(
        `
      아이디:  ${userData.userId} 
      비밀번호:  ${userData.password}
      `
      );
    } else if (setting) {
      alert(
        `
      이름:  ${userData.userName} 
      연락처: ${userData.userTel}
      생년월일: ${userData.userDate}
      이메일: ${userData.userEmail}
      비밀번호:  ${userData.password} 
      개인정보 동의: ${userData.userCheck}
      `
      );
    } else {
      alert(
        `
        이름:  ${userData.userName}
        아이디:  ${userData.userId} 
        비밀번호:  ${userData.password}
        `
      );
    }
    setUserData(initUserData);
  };
  return { userData, handleOnChange, onSubmitHandler };
};
