"use client";
import React, { useEffect, useState } from "react";
import HeaderTopContainer from "./HeaderTopContainer";
import HeaderBottomContainer from "./HeaderBottomContainer";
import { useSetRecoilState } from "recoil";
import { useLoginDataState, userDataSelector } from "@/store/auth/userData";

const HeaderContainer = () => {
  const [tokenData, setTokenData] = useState<any>();
  const setUserData = useSetRecoilState(userDataSelector);
  const { token } = useLoginDataState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("token");
      setTokenData(data);
    } else {
      return undefined;
    }

    const getUserInfo = () => {
      if (tokenData) {
        return setUserData(JSON.parse(tokenData));
      }
    };

    return getUserInfo();
  }, [token, setUserData, tokenData]);

  return (
    <>
      <HeaderTopContainer />
      <HeaderBottomContainer />
    </>
  );
};

export default HeaderContainer;
