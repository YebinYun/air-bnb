import React, { useState } from "react";
import { Box, Button, colors, styled } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface props {
  rangeDate: any;
  dateChangeHandler: () => void;
}

const ReservationCalendar = ({ rangeDate, dateChangeHandler }: props) => {
  console.log(new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000));

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        marginTop={"2rem"}
      >
        <StyledCalendar
          selectRange
          onChange={dateChangeHandler}
          showDoubleView
          minDate={new Date()} // 오늘 이전은 예약할수 없음.
          maxDate={new Date(new Date().getTime() + 90 * 24 * 60 * 60 * 1000)}
          // 정말 작은 초단위로 -> 월/년도를 구하는 방법
          value={rangeDate}
        />
      </Box>
    </>
  );
};

export default ReservationCalendar;

const StyledCalendar = styled(Calendar)`
  .react-calendar__month-view__days {
    /* border: 1px solid gray; */
    margin: 1rem;
    /* border-radius: 15px; */
    overflow: hidden;
  }
  .react-calendar__tile {
    /* border: 0.05rem solid gray; */
  }
  .react-calendar__tile--active {
    background: #ff5a5f;
  }
  .react-calendar__tile:disabled {
    background: #ff5a603e;
  }
`;
