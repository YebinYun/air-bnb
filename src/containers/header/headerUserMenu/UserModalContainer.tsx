import UserModalComponent from '@/components/header/headerUserMenu/UserModalComponent'
import React from 'react'

type props = {
  loginModalHandler: () => void;
  signupModalHandler: () => void;
  closeModalHandler: () => void;
  userChangeHandler: () => void;
  isSetting: boolean;
  isLogin: boolean;
  isSignup: boolean;
  userChoice: string;
};

const UserModalContainer = ({
  loginModalHandler,
  signupModalHandler,
  closeModalHandler,
  userChangeHandler,
  isSetting,
  isLogin,
  isSignup,
  userChoice,
}: props) => {

  return (
    <UserModalComponent
      loginModalHandler={loginModalHandler}
      signupModalHandler={signupModalHandler}
      closeModalHandler={closeModalHandler}
      userChangeHandler={userChangeHandler}
      isSetting={isSetting}
      isLogin={isLogin}
      isSignup={isSignup}
      userChoice={userChoice}
    />
  );
};

export default UserModalContainer