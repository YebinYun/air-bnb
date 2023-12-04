import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Avatar, Box, Button, Stack } from "@mui/material";
import styled from "@emotion/styled";
import Background from "@/layout/Background";
import LoginDropDown from "@/components/modal/LoginDropDown";
import Slidebar from "./Slidebar";

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const onDropDownHandler = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <Background>
      <Stack
        spacing={2}
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        margin={"2rem 0"}
        zIndex={99999}
      >
        <Box sx={{ paddingRight: "6rem" }}>
          <Icon icon="logos:airbnb" width={"102px"} />
        </Box>
        <Button
          sx={{
            display: "flex",
            padding: "10px 20px",
            boxShadow: "1px 1px 1px 1px lightgray",
            borderRadius: "25px",
            color: "black",
          }}
        >
          <Box>
            <ReservationText>어디든지</ReservationText>
            <ReservationCenterText>언제든 일주일</ReservationCenterText>
            <ReservationText>게스트 추가</ReservationText>
          </Box>
          <Box
            sx={{
              background: "red",
              borderRadius: "100%",
              padding: "0.2rem",
              width: "25px",
              height: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "1rem",
            }}
          >
            <Icon icon="ri:search-line" color="white" width={"15px"} />
          </Box>
        </Button>
        <SearchContainer>
          <Stack spacing={4} direction="row" marginRight={"2rem"}>
            <ReservationText>당신의 공간을 에어비앤비하세요</ReservationText>
            <Icon icon="pajamas:earth" />
          </Stack>
          <Button
            onClick={() => {
              onDropDownHandler();
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "5px 10px",
              boxShadow: "1px 1px 1px 1px lightgray",
              borderRadius: "25px",
              color: "black",
            }}
          >
            <Icon icon="ic:round-menu" />
            <Avatar sx={{ marginLeft: "1rem", width: "25px", height: "25px" }}>
              <Icon icon="ph:user-fill" color="white" />
            </Avatar>
          </Button>
          {showDropDown && (
            <LoginDropDown onDropDownHandler={onDropDownHandler} />
          )}
        </SearchContainer>
      </Stack>
      <Slidebar />
    </Background>
  );
};

export default Navbar;

const ReservationText = styled.span`
  font-size: 0.8rem;
  font-weight: bold;
  &:last-child {
    font-weight: normal;
  }
`;

const ReservationCenterText = styled(ReservationText)`
  padding: 0 1rem;
  margin: 0 1rem;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
`;

const SearchContainer = styled(Stack)`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;
