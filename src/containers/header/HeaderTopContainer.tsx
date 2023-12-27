import HeaderTopComponent from "@/components/header/HeaderTopComponent";
import React, { useState } from "react";
import BookingModalContainer from "./headerBookingMenu/BookingModalContainer";
import UserToggleDropDownContainer from "./headerUserMenu/UserToggleDropDownContainer";
import BookingModalComponent from "@/components/header/headerBookingMenu/BookingModalComponent";
import UserModalContainer from "./headerUserMenu/UserModalContainer";

const HeaderTopContainer = () => {
  const [isMouseOnUser, setIsMouseOnUser] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  const toggleBookingModal = () => setIsBookingModalOpen(!isBookingModalOpen);
  const toggleMouseOnUser = () => setIsMouseOnUser(!isMouseOnUser);

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);

  const loginModalHandler = () => {
    setIsLogin(!isLogin);
    setIsMouseOnUser(!isMouseOnUser);
  };
  const signupModalHandler = () => {
    setIsSignup(!isSignup);
    setIsMouseOnUser(false);
  };
  const settingModalHandler = () => {
    setIsSetting(!isSetting);
    setIsMouseOnUser(!isMouseOnUser);
  };
  const closeModalHandler = () => {
    setIsLogin(false);
    setIsSignup(false);
    setIsSetting(false);
  };
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
        setIsMouseOnUser={setIsMouseOnUser}
        toggleMouseOnUser={toggleMouseOnUser}
        toggleBookingModal={toggleBookingModal}
      />
      {isBookingModalOpen && (
        <BookingModalComponent
          isBookingModalOpen={isBookingModalOpen}
          toggleBookingModal={toggleBookingModal}
        />
      )}

      {isMouseOnUser && (
        <UserToggleDropDownContainer
          loginModalHandler={loginModalHandler}
          signupModalHandler={signupModalHandler}
          settingModalHandler={settingModalHandler}
        />
      )}

      {(isLogin || isSignup || isSetting) && (
        <UserModalContainer
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
