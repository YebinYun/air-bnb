import React, { useEffect } from "react";
import HeaderTopContainer from "./HeaderTopContainer";
import HeaderBottomContainer from "./HeaderBottomContainer";
import { useSetRecoilState } from "recoil";
import { userDataSelector } from "@/store/auth/userData";

const HeaderContainer = () => {
  const setUserData = useSetRecoilState(userDataSelector);
  const tokenData: any = localStorage.getItem("token");

  useEffect(() => {
    const getUserInfo = () => {
      if (!tokenData) return;
      if (tokenData) {
        return setUserData(JSON.parse(tokenData));
      }
    };

    return getUserInfo();
  }, [tokenData, setUserData]);

  return (
    <>
      <HeaderTopContainer />
      <HeaderBottomContainer />
    </>
  );
};

export default HeaderContainer;
