import UserToggleDropDownComponent from '@/components/header/headerUserMenu/UserToggleDropDownComponent'
import React, { useState } from 'react'

const UserToggleDropDownContainer = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);

  const loginModalHandler = () => {
    setIsLogin(!isLogin);
  };
  const signupModalHandler = () => {
    setIsSignup(!isSignup);
  };
  const settingModalHandler = () => {
    setIsSetting(!isSetting);
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
    <UserToggleDropDownComponent
      isLogin={isLogin}
      isSignup={isSignup}
      isSetting={isSetting}
      loginModalHandler={loginModalHandler}
      signupModalHandler={signupModalHandler}
      settingModalHandler={settingModalHandler}
      closeModalHandler={closeModalHandler}
      userChangeHandler={userChangeHandler}
      userChoice={userChoice}
    />
  );
}

export default UserToggleDropDownContainer