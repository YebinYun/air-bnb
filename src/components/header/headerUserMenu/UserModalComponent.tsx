import React from 'react'
import { Box, Button, Stack, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type props = {
    closeModalHandler: () => void;
    isSetting: boolean;
  userChoice:string;
};

const UserModalComponent = ({ closeModalHandler,isSetting, userChoice }: props) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.5)",
      }}>
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          alignItems: "center",
          p: "2rem",
        }}>
            
        {/* 로그인,회원가입,수정하기*/}
        <Stack
          direction={"row"}
          sx={{ borderBottom: "1px solid gray", mb: "1rem", p: "1.5rem" }}>
          <Box sx={{ fontSize: "1.5rem", fontWeight: "bold", color: "black" }}>
            {userChoice}하기
          </Box>
          <Button
            onClick={() => {
              closeModalHandler();
            }}
            sx={{ justifyContent: "flex-end" }}>
            <CloseIcon sx={{ color: "black" }} />
          </Button>
        </Stack>

        {/* intro */}
        <Box>환영합니다.</Box>

        {/* 네이버,카카오,구글 */}
        {isSetting
        ? ("")
        : (<Stack>
          <ButtonContainer>네이버 {userChoice}</ButtonContainer>
          <ButtonContainer>카카오 {userChoice}</ButtonContainer>
          <ButtonContainer>구글 {userChoice}</ButtonContainer>
        </Stack>)}
      </Stack>
    </Box>
        
  );
};

const ButtonContainer = styled(Button)`
  width: 20rem;
  padding: 1rem 0;
  color: black;
  font-weight: bold;
  border: 1px solid lightgray;
  margin: 0.5rem 0;
`;

export default UserModalComponent