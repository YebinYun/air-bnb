import React, { useState } from "react";
import { Box, Button, colors, styled } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface props {
  onNavInfoModal: boolean;
  loginModalHandler: () => void;
}

const NavInfoModalBackground = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const NavInfoModalContainer = styled(Box)`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 50%;
  height: 30rem;
  border: 1px solid lightgray;
  border-radius: 25px;
  padding: 0 2rem;
  background: white;
`;

const SelectMenubar = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin: 1rem 0;
  border: 1px solid lightgray;
  border-radius: 50px;
  background: #ff939c52;
`;

const NavbarModal = ({ onNavInfoModal, loginModalHandler }: props) => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [calendarDate, setCalendarDate] = useState<Value>(new Date());
  return (
    <NavInfoModalBackground>
      <NavInfoModalContainer>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <SelectMenubar>
            <Button sx={{ flexDirection: "column" }}>
              <Box color={"black"} fontWeight={"bold"}>
                여행지
              </Box>
              <Box color={"gray"}>여행지 검색</Box>
            </Button>

            <Button sx={{ flexDirection: "column" }}>
              <Box color={"black"} fontWeight={"bold"}>
                날짜
              </Box>
              <Box color={"gray"}>날짜 추가</Box>
            </Button>

            <Button sx={{ flexDirection: "column" }}>
              <Box color={"black"} fontWeight={"bold"}>
                여행자
              </Box>
              <Box color={"gray"}>게스트 추가</Box>
            </Button>

            <Button
              onClick={() => {
                loginModalHandler();
              }}
            >
              <Box color={"black"} fontWeight={"bold"}>
                X
              </Box>
            </Button>
          </SelectMenubar>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            marginTop={"2rem"}
          >
            <Calendar onChange={setCalendarDate} value={calendarDate} />
            <Calendar onChange={setCalendarDate} value={calendarDate} />
          </Box>
        </Box>
      </NavInfoModalContainer>
    </NavInfoModalBackground>
  );
};

export default NavbarModal;
