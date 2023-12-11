import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Avatar, Box, Button, Stack } from "@mui/material";
import { styled } from "@mui/system";
import Background from "@/layout/Background";
import LoginToggleDropDown from "@/components/modal/LoginToggleDropDown";
import Slidebar from "./Slidebar";
// import Fun from "./Fun";

const ReservationText = styled(Box)`
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
const Logo = styled(Box)`
  height: 2rem;
`;

const SearchButton = styled(Box)`
  background: red;
  border-radius: 100%;
  padding: 0.2rem;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
`;

const Navbar = () => {
  const [hover, setHover] = useState(false);

  return (
    <Background>
      <Stack
        spacing={2}
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        margin={"2rem 0"}
      >
        <Logo>
          <Icon icon="logos:airbnb" width="8rem" />
        </Logo>

        <Button
          sx={{
            display: "flex",
            padding: "10px 20px",
            boxShadow: "1px 1px 1px 1px lightgray",
            borderRadius: "25px",
            color: "black",
          }}
        >
          <ReservationText>어디든지</ReservationText>
          <ReservationCenterText>언제든 일주일</ReservationCenterText>
          <ReservationText>게스트 추가</ReservationText>

          <SearchButton>
            <Icon icon="ri:search-line" color="white" width={"15px"} />
          </SearchButton>
        </Button>
        <SearchContainer>
          <Stack spacing={4} direction="row" marginRight={"2rem"}>
            <ReservationText>당신의 공간을 에어비앤비하세요</ReservationText>
            <Icon icon="pajamas:earth" />
          </Stack>
          <Button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
              display: "flex",
              alignItems: "center",
              boxShadow: "1px 1px 1px 1px lightgray",
              borderRadius: "25px",
              color: "black",
            }}
          >
            <Icon icon="ic:round-menu" />
            <Avatar sx={{ marginLeft: "1rem", width: "25px", height: "25px" }}>
              <Icon icon="ph:user-fill" color="white" />
            </Avatar>
            <LoginToggleDropDown hover={hover} />
          </Button>
        </SearchContainer>
      </Stack>

      <Slidebar />
    </Background>
  );
};

export default Navbar;
