import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import LoginModal from "./LoginModal";

interface props {
  toggleDropDownHandler: () => void;
  closeDropDownHandler: () => void;
}

const LoginToggleDropDown = ({
  toggleDropDownHandler,
  closeDropDownHandler,
}: props) => {
  const [isLoginModal, setIsLoginModal] = useState<boolean>(false);
  const [isSignupModal, setIsSignupModal] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);

  const loginModalHandler = () => {
    setIsLoginModal(!isLoginModal);
  };
  const signupModalHandler = () => {
    setIsSignupModal(!isSignupModal);
  };
  const settingModalHandler = () => {
    setIsSetting(!isSetting);
  };

  const closeModalHandler = () => {
    setIsLoginModal(false);
    setIsSignupModal(false);
    setIsSetting(false);
  };

  // 혹시나... 클릭시 동시 발생되어서 안되나 싶어 만든 함수.. // 역시나 안됨..
  // const clickLoginHandler = () => {
  //   toggleDropDownHandler();
  //   setTimeout(() => {
  //     onModalHandler();
  //   }, 200);
  // };

  return (
    <>
      <DropdownContainer>
        <ButtonWrap>
          <ButtonItem
            onClick={() => {
              settingModalHandler();
            }}
          >
            겨울 업그레이드 기능
            <Box>새소식</Box>
          </ButtonItem>
        </ButtonWrap>
        <ButtonWrap>
          <ButtonItem
            onClick={() => {
              signupModalHandler();
            }}
          >
            회원가입
          </ButtonItem>
          <ButtonItem
            onClick={() => {
              loginModalHandler();
              // closeDropDownHandler();
            }}
          >
            로그인
          </ButtonItem>
        </ButtonWrap>
        <ButtonWrap>
          <ButtonItem>당신의 공간을 에어비앤비하세요.</ButtonItem>
          <ButtonItem>도움말 센터</ButtonItem>
        </ButtonWrap>
      </DropdownContainer>
      {(isLoginModal || isSignupModal || isSetting) && (
        <LoginModal
          loginModalHandler={loginModalHandler}
          signupModalHandler={signupModalHandler}
          closeModalHandler={closeModalHandler}
          loginModal={isLoginModal}
          setting={isSetting}
        />
      )}
    </>
  );
};

export default LoginToggleDropDown;

const DropdownContainer = styled(Box)`
  width: 16rem;
  background: white;
  position: absolute;
  top: 5rem;
  right: 5%;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 15px;
  z-index: 1;
`;

const ButtonWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgray;
  &:first-child {
    flex-direction: row;
  }
`;

const ButtonItem = styled(Button)`
  color: black;
  width: 100%;
  justify-content: flex-start;
  padding: 1rem;
  & div {
    padding-left: 0.5rem;
  }
`;

// Pages - 초기 상태값 받는 용도로만 사용하고..\
// <NewsHead  />
// <NewsBodyContainer  />

// Container - UI제외 모든 ~
// export const NewsHeadContainer = () => {
// const [ isLoading, setIsLoading ] = useState(false)
// const toggler = () => { setIsLoading(!isLoading )}
// return (
// <div>
//    <NewsHeadComponent toggler={toggler} />
//  </div)
//  }

// Component - UI만 담당하는 폴더
//
// export const NewsHeadComponent = ({ toggler }) => {
//  return (
//    <div>

//    </div>
//  )
// }

// code splitting!
