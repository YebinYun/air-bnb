import HeaderTopComponent from "@/components/header/HeaderTopComponent";
import React, { useState } from "react";
import BookingModalContainer from "./headerBookingMenu/BookingModalContainer";
import UserToggleDropDownContainer from "./headerUserMenu/UserToggleDropDownContainer";
import BookingModalComponent from "@/components/header/headerBookingMenu/BookingModalComponent";
import UserModalContainer from "./headerUserMenu/UserModalContainer";
import UserToggleDropDownComponent from "@/components/header/headerUserMenu/UserToggleDropDownComponent";
import UserModalComponent from "@/components/header/headerUserMenu/UserModalComponent";

const HeaderTopContainer = () => {
  const [isUserDataModalOpen, setIsUserDataModalOpen] =
    useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  const toggleBookingModal = () => setIsBookingModalOpen(!isBookingModalOpen);
  const toggleUserDataModal = () =>
    setIsUserDataModalOpen(!isUserDataModalOpen);

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);

  const loginModalHandler = () => {
    setIsLogin(!isLogin);
    setIsUserDataModalOpen(false);
  };

  const signupModalHandler = () => {
    setIsSignup(!isSignup);
    setIsUserDataModalOpen(false);
  };

  const settingModalHandler = () => {
    setIsSetting(!isSetting);
    setIsUserDataModalOpen(false);
  };

  const closeModalHandler = () => {
    setIsLogin(false);
    setIsSignup(false);
    setIsSetting(false);
  };

  // 로그인/회원가입 전환 핸들러
  const userChangeHandler = () => {
    if (isLogin) {
      setIsLogin(false);
      setIsSignup(true);
    } else if (isSignup) {
      setIsLogin(true);
      setIsSignup(false);
    }
  };

  const userChoice = `${isLogin ? "로그인" : isSignup ? "회원가입" : "수정"}`;

  return (
    <>
      <HeaderTopComponent
        setIsUserDataModalOpen={setIsUserDataModalOpen}
        toggleUserDataModal={toggleUserDataModal}
        toggleBookingModal={toggleBookingModal}
      />

      {isBookingModalOpen && (
        <BookingModalComponent
          isBookingModalOpen={isBookingModalOpen}
          toggleBookingModal={toggleBookingModal}
        />
      )}

      {isUserDataModalOpen && (
        <UserToggleDropDownComponent
          loginModalHandler={loginModalHandler}
          signupModalHandler={signupModalHandler}
          settingModalHandler={settingModalHandler}
        />
      )}

      {(isLogin || isSignup || isSetting) && (
        <UserModalComponent
          closeModalHandler={closeModalHandler}
          userChangeHandler={userChangeHandler}
          isLogin={isLogin}
          isSetting={isSetting}
          userChoice={userChoice}
        />
      )}
    </>
  );
};

export default HeaderTopContainer;
