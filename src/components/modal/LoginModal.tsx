import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { Box, TextField, IconButton, Button } from "@mui/material";
import { lightBlue } from "@material-ui/core/colors";

interface props {
  onModalHandler: () => void;
}

const LoginModal = ({ onModalHandler }: props) => {
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
            <IconButton onClick={onModalHandler}>
              <CloseIcon />
            </IconButton>
            <Box sx={{ display: "flex" }}>로그인 또는 회원가입</Box>
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
                margin: "3rem 0 1.5rem 0",
              }}
            >
              에어비앤비에 오신 것을 환영합니다.
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                id="outlined-basic"
                label="아이디"
                variant="outlined"
                sx={{ width: "20rem" }}
              />
              <TextField
                id="outlined-basic"
                label="비밀번호"
                variant="outlined"
                sx={{ width: "20rem" }}
              />
              <Button
                sx={{
                  border: "1px solid lightgray",
                  background: "lightBlue",
                  width: "20rem",
                }}
              >
                {" "}
                계속하기{" "}
              </Button>
            </Box>
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
  height: 50%;
  background: white;
`;
