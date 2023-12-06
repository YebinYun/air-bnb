import React, { useState, useRef } from "react";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { Box, TextField, IconButton, Button, Link } from "@mui/material";
import { useKeywordHandler } from "./useKeywordHandler";

// Handler를useHook으로 만들어보세요~
interface props {
  loginModalHandler: () => void;
  signupModalHandler: () => void;
  closeModalHandler: () => void;
  loginModal: boolean;
  setting: boolean;
}

const LoginModal = ({
  loginModalHandler,
  signupModalHandler,
  closeModalHandler,
  loginModal,
  setting,
}: props) => {
  const { userData, handleOnChange } = useKeywordHandler();
  const LOGIN_CHOICE = `${
    loginModal ? "로그인" : setting ? "개인정보 입력" : "회원가입"
  }하기`;
  const loginChangeHandler = () => {
    "회원가입" && loginModalHandler();
    "로그인" && signupModalHandler();
  };

  const onSubmitHandler = () => {
    alert(
      loginModal
        ? `
      아이디: [ ${userData.userId} ] 
      비밀번호: [ ${userData} ]`
        : `
      이름: [ ${userData.userName} ]
      아이디: [ ${userData.userId} ] 
      비밀번호: [ ${userData.password} ]`
    );
    return;
  };

  return (
    <>
      <ModalBackground>
        <ModalContainer>
          <Box
            sx={{
              position: "sticky",
              top: "0",
              right: "0",
              background: "white",
              borderBottom: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 3,
            }}
          >
            <IconButton
              sx={{ position: "absolute", right: " 1.5rem" }}
              onClick={() => {
                closeModalHandler();
              }}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                fontWeight: "bold",
                padding: "2rem 0",
                width: "100%",
                justifyContent: "center",
              }}
            >
              {LOGIN_CHOICE}
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: "3rem 0 ",
              }}
            >
              에어비앤비에 오신 것을 환영합니다.
            </Box>

            {setting ? (
              <Box display={"flex"} flexDirection={"column"}>
                <TextField label="이름" />
                <TextField label="이름" />
                <TextField label="이름" />
                <TextField label="이름" />
                <TextField label="이름" />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderBottom: "1px solid lightgray",
                  paddingBottom: "2rem",
                }}
              >
                {loginModal ? (
                  ""
                ) : (
                  <TextField
                    id="outlined-basic"
                    label="이름"
                    name="userName"
                    value={userData.userName}
                    variant="outlined"
                    onChange={handleOnChange}
                    sx={{ width: "25rem", marginBottom: "1rem" }}
                  />
                )}
                <TextField
                  id="outlined-basic"
                  label="아이디"
                  name="userId"
                  variant="outlined"
                  value={userData.userId}
                  onChange={handleOnChange}
                  sx={{ width: "25rem", marginBottom: "1rem" }}
                />
                <TextField
                  id="outlined-basic"
                  label="비밀번호"
                  type="password"
                  name="password"
                  variant="outlined"
                  value={userData.password}
                  onChange={handleOnChange}
                  sx={{ width: "25rem", marginBottom: "1rem" }}
                />
                <ButtonContainer
                  sx={{
                    border: "1px solid lightgray",
                    background: "lightBlue",
                    width: "25rem",
                    padding: "1rem 0",
                  }}
                  onClick={onSubmitHandler}
                >
                  {LOGIN_CHOICE}
                </ButtonContainer>

                <Box sx={{ marginTop: "1rem" }}>
                  {loginModal ? "계정이 없으신가요?" : "이미 가입하셨나요?"}
                  <Link
                    component="button"
                    sx={{ marginLeft: "0.5rem" }}
                    onClick={() => {
                      loginChangeHandler();
                    }}
                  >
                    {loginModal ? "회원가입" : "로그인"}
                  </Link>
                </Box>
              </Box>
            )}

            {setting ? (
              ""
            ) : (
              <Box
                sx={{
                  padding: "2rem 0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <ButtonContainer>네이버 {LOGIN_CHOICE}</ButtonContainer>
                <ButtonContainer>카카오 {LOGIN_CHOICE}</ButtonContainer>
                <ButtonContainer>구글 {LOGIN_CHOICE}</ButtonContainer>
              </Box>
            )}
          </Box>
        </ModalContainer>
      </ModalBackground>
    </>
  );
};

export default LoginModal;

const ModalBackground = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

const ModalContainer = styled(Box)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 90%;
  overflow-y: auto;
  background: white;
`;

const ButtonContainer = styled(Button)`
  width: 25rem;
  padding: 1rem 0;
  color: black;
  font-weight: bold;
  border: 1px solid lightgray;
  margin: 0.5rem 0;
`;
