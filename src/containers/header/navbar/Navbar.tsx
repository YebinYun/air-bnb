import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Avatar, Box, Button, Modal, Stack } from "@mui/material";
import { styled } from "@mui/system";
import LoginToggleDropDown from "@/components/modal/LoginToggleDropDown";
import NavbarReservationModal from "./navbarReservationModal/NavbarReservationModal";
import { useRecoilValue } from "recoil";
import { countyHandlerSelector } from "@/store/getHotelListQuery";
// import Fun from "./Fun";

interface props {
  onNavInfoModal: boolean;
  loginModalHandler: () => void;
}

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

const Navbar = ({ onNavInfoModal, loginModalHandler }: props) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <>
      <Stack
        position={"absolute"}
        width={"100%"}
        spacing={2}
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"1rem 0"}
        sx={{ background: "white" }}
      >
        <Logo>
          <Icon icon="logos:airbnb" width="6rem" />
        </Logo>

        <Button
          sx={{
            position: "absolute",
            top: "1rem",
            left: "50%",
            transform: "translate(-50%, 0%)",
            display: "flex",
            padding: "10px 20px",
            boxShadow: "1px 1px 1px 1px lightgray",
            borderRadius: "25px",
            color: "black",
          }}
          onClick={() => {
            loginModalHandler();
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
          <Box
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
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
            <LoginToggleDropDown hover={hover} />
          </Box>
        </SearchContainer>
      </Stack>
      {onNavInfoModal && (
        <NavbarReservationModal
          onNavInfoModal={onNavInfoModal}
          loginModalHandler={loginModalHandler}
        />
      )}
    </>
  );
};

export default Navbar;
