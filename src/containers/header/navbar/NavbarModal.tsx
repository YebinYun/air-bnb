import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
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
  background: rgba(50, 50, 50, 0.8);
`;

const NavInfoModalContainer = styled(Box)`
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 50%;
  height: 30rem;
  border: 1px solid lightgray;
  border-radius: 25px;
  padding: 2rem;
  background: white;
`;

const NavbarModal = ({ onNavInfoModal, loginModalHandler }: props) => {
  const [calendarDate, setCalendarDate] = useState<Date>(new Date());
  return (
    <NavInfoModalBackground>
      <NavInfoModalContainer>
        navbarModal
        <Button
          onClick={() => {
            loginModalHandler();
          }}
        >
          닫기
        </Button>
        <Box>
          <Calendar onChange={setCalendarDate} value={calendarDate} />
        </Box>
      </NavInfoModalContainer>
    </NavInfoModalBackground>
  );
};

export default NavbarModal;
