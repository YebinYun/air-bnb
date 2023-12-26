import { Box, styled } from "@mui/material";
import React from "react";

const BookingModalComponent = () => {
  return (
    <BookingModalBackground>
      <BookingModalContainer>BookingModalComponent</BookingModalContainer>
    </BookingModalBackground>
  );
};

const BookingModalBackground = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const BookingModalContainer = styled(Box)`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 650px;
  min-height: 800px;
  border: 1px solid lightgray;
  border-radius: 25px;
  padding: 0 2rem;
  background: white;
  z-index: 999;
`;
export default BookingModalComponent;
