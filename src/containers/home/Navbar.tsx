import React from "react";
import { Icon } from "@iconify/react";
import { Box, Card } from "@mui/material";
import styled from "@emotion/styled";

const Navbar = () => {
  return (
    <BoxWrap>
      {/* 로고 */}
      <Box>
        <Icon icon="logos:airbnb" width={"102px"} />
      </Box>

      {/* 예약창 */}
      <FlexCard>
        <Box>
          <ReservationText>언제든지</ReservationText>
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
      </FlexCard>

      {/* 검색창 */}
      <FlexBox className="searchWrap">
        <Box>
          <span>당신의 공간을 에어비앤비하세요.</span>
          <Icon icon="pajamas:earth" />
        </Box>
        <Box>
          <Icon icon="ic:round-menu" />
          <Icon icon="ph:user-thin" color="#777" />
        </Box>
      </FlexBox>
    </BoxWrap>
  );
};

export default Navbar;

const FlexBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FlexCard = styled(Card)`
  height: 3rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  &:hover {
    box-shadow: 2px 2px 2px 2px gray;
  }
`;

const BoxWrap = styled(FlexBox)`
  justify-content: space-between;
`;

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
