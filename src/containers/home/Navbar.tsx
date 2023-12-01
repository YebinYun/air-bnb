import React from "react";
import { Icon } from "@iconify/react";
import { Box, Button, Card, Stack } from "@mui/material";
import styled from "@emotion/styled";

const Navbar = () => {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      {/* 로고 */}
      <Box>
        <Icon icon="logos:airbnb" width={"102px"} />
      </Box>

      {/* 예약창 */}
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

      {/* 검색창 */}
      <Stack spacing={2} direction="row">
        <Stack spacing={4} direction="row">
          <ReservationText>당신의 공간을 에어비앤비하세요.</ReservationText>
          <Icon icon="pajamas:earth" />
        </Stack>
        <Button
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
          <Box
            sx={{
              background: "gray",
              width: "30px",
              height: "30px",
              marginLeft: "5px",
              borderRadius: "25px",
            }}
          >
            <Icon icon="ph:user-thin" color="#777" />
          </Box>
        </Button>
      </Stack>
    </Stack>
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
