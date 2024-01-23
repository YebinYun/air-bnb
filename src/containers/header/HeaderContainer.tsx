import React, { useEffect } from "react";
import HeaderTopContainer from "./HeaderTopContainer";
import HeaderBottomContainer from "./HeaderBottomContainer";
import { useSetRecoilState } from "recoil";
import { useLoginDataState, userDataSelector } from "@/store/auth/userData";

const HeaderContainer = () => {
  const setUserData = useSetRecoilState(userDataSelector);
  const tokenData: any = localStorage.getItem("token");

  // const { isLoginData } = useLoginDataState();
  useEffect(() => {
    const getUserInfo = () => {
      if (tokenData) {
        return setUserData(JSON.parse(tokenData));
      }
      // isLoginData;
    };

    return getUserInfo();
  }, [setUserData, tokenData]);

  return (
    <>
      <HeaderTopContainer />
      <HeaderBottomContainer />
    </>
  );
};

export default HeaderContainer;
