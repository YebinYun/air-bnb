import React from "react";
import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";

const DropDown = () => {
  return (
    <DropdownContainer>
      <ButtonWrap>
        <ButtonItem>
          겨울 업그레이드 기능
          <Box>새소식</Box>
        </ButtonItem>
      </ButtonWrap>
      <ButtonWrap>
        <ButtonItem>회원가입</ButtonItem>
        <ButtonItem>로그인</ButtonItem>
      </ButtonWrap>
      <ButtonWrap>
        <ButtonItem>당신의 공간을 에어비앤비하세요.</ButtonItem>
        <ButtonItem>도움말 센터</ButtonItem>
      </ButtonWrap>
    </DropdownContainer>
  );
};

export default DropDown;

const DropdownContainer = styled(Box)`
  width: 16rem;
  background: white;
  position: absolute;
  top: 2.5rem;
  right: 0;
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
    background: ;
  }
`;
