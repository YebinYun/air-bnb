import React from "react";
import { Box, styled } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface props {
  rangeDate: any;
  dateChangeHandler: (e: any) => void;
}

const ReservationCalendar = ({ rangeDate, dateChangeHandler }: props) => {
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
          formatDay={(locale, date) =>
            date.toLocaleString("en", { day: "numeric" })
          }
        />
      </Box>
    </>
  );
};

export default ReservationCalendar;

const StyledCalendar = styled(Calendar)`
  .react-calendar__month-view__days {
    margin: 0 1rem 1rem 1rem;
    overflow: hidden;
    border-radius: 0 0 5px 5px;
    background: #ff5a6011;
  }
  .react-calendar__navigation {
    margin: 1rem;
  }

  .react-calendar__tile:disabled {
    background: #0000003d;
  }
  .react-calendar__tile--active {
    background: #ff5a5f;
  }
  .react-calendar__tile--now {
    background: #f38d9089;
    /* border: 1px solid gray; */
    /* border-radius: 2px; */
    color: black;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #00a699;
  }
  .react-calendar__month-view__weekdays {
    background: #00a69849;
    margin: 0 1rem;
    border-radius: 5px 5px 0 0;
  }
  abbr[title] {
    text-decoration: none;
  }
`;
