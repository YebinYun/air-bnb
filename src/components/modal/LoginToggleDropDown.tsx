import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import LoginModal from "./LoginModal";

const DropdownContainer = styled(Box)<{ hover: boolean }>`
  width: 16rem;
  background: white;
  position: absolute;
  top: 2.2rem;
  right: 0rem;
  display: ${(props) => (props.hover ? "flex" : "none")};
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 15px;
  z-index: 1;
  pointer-events: auto;
`;

const ButtonWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgray;
  &:first-child {
    flex-direction: row;
  }
  &:last-child {
    border-bottom: none;
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

const LoginToggleDropDown = ({ hover }: { hover: boolean }) => {
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

  return (
    <>
      <DropdownContainer hover={hover}>
        <ButtonWrap>
          <ButtonItem
            onClick={() => {
              settingModalHandler();
            }}
          >
            개인정보 입력하기
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
