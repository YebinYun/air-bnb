import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Box, TextField, IconButton, Button, Link } from "@mui/material";

interface props {
  loginModalHandler: () => void;
  signupModalHandler: () => void;
  closeModalHandler: () => void;
  loginModal: boolean;
}

const LoginModal = ({
  loginModalHandler,
  signupModalHandler,
  closeModalHandler,
  loginModal,
}: props) => {
  const LOGIN_CHOICE = `${loginModal ? "로그인" : "회원가입"}하기`;
  // const OauthLogin = [
  //   {
  //     site: "네이버",
  //   },
  //   {
  //     site: "카카오",
  //   },
  //   {
  //     site: "구글",
  //   },
  // ];

  const onChangeHandler = (e) => {
    console.log("e", e.target.name, e.target.value);
  };

  const onSubmitHandler = () => {
    alert("입력된 값 출력될수 있게~~");
  };

  return (
    <>
      <ModalBackground>
        <ModalContainer>
          <Box
            sx={{
              borderBottom: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              onClick={() => {
                closeModalHandler();
              }}
              sx={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}
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
                  variant="outlined"
                  onChange={onChangeHandler}
                  sx={{ width: "25rem", marginBottom: "1rem" }}
                />
              )}
              <TextField
                id="outlined-basic"
                label="아이디"
                name="userId"
                variant="outlined"
                onChange={onChangeHandler}
                sx={{ width: "25rem", marginBottom: "1rem" }}
              />
              <TextField
                id="outlined-basic"
                label="비밀번호"
                type="password"
                name="password"
                variant="outlined"
                onChange={onChangeHandler}
                sx={{ width: "25rem", marginBottom: "1rem" }}
              />
              <ButtonContainer
                sx={{
                  border: "1px solid lightgray",
                  background: "lightBlue",
                  width: "25rem",
                  padding: "1rem 0",
                }}
              >
                {LOGIN_CHOICE}
              </ButtonContainer>
              {loginModal ? (
                <Box sx={{ marginTop: "1rem" }}>
                  계정이 없으신가요?
                  <Link
                    component="button"
                    sx={{ marginLeft: "0.5rem" }}
                    onClick={() => {
                      signupModalHandler();
                    }}
                  >
                    회원가입
                  </Link>
                </Box>
              ) : (
                <Box>
                  이미 가입하셨나요?
                  <Link
                    component="button"
                    sx={{ marginLeft: "0.5rem" }}
                    onClick={() => {
                      loginModalHandler();
                    }}
                  >
                    로그인
                  </Link>
                </Box>
              )}
            </Box>
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
            {/* <Box>
              {OauthLogin.map((oauth, index) => {
                <ButtonContainer key={index}>
                  {oauth.site} {LOGIN_CHOICE}
                </ButtonContainer>;
              })}
            </Box> */}
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
  height: 80%;
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
