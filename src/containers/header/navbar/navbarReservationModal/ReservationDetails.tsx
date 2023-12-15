import { Box, Button, Divider, TextField } from "@mui/material";
import React, { useState } from "react";

type ReservationInfoInitType = {
  guests: number;
  child: number;
};

interface props {
  peopleChangeHandler: Number;
  totalPeople: Number;
  setTotalPeople: () => void;
}

const reservationInfoInit = {
  guests: 0, // 성인
  child: 0, // 소아 인원
  // 나중에는 좌표를 지도에서 찍어서, 인원과 객실갯수 기준으로 좌표상의 호텔노출
};

const ReservationDetails = ({
  peopleChangeHandler,
  setTotalPeople,
  totalPeople,
}: props) => {
  const [isCounter, setIsCounter] = useState<Number>(0);

  const [bookingInformation, setBookingInformation] =
    useState<ReservationInfoInitType>(reservationInfoInit);

  const bookingInfoChangeHandler = (e: any) => {
    setBookingInformation({
      ...bookingInformation,
      [e.target.name]: e.target.value,
    });

    console.log(e.target.name);
    console.log(e.target.value);
  };

  const [adultCounter, setAdultCounter] = useState<number>(0);

  // const onComplete = () => {
  //   const form = {
  //     guests: adultCounter,
  //     child: childCOunter,
  //     rooms: roomCounter,
  //   }
  // }

  return (
    <Box sx={{ mt: "3rem" }}>
      {/* 성인 */}
      <Box
        sx={{
          py: "1rem",
          display: "flex",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Box sx={{ fontWeight: "bold", pb: "0.25rem" }}>성인</Box>
          <Box sx={{ fontSize: "0.8rem", color: "gray" }}>13세 이상</Box>
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: " flex-end",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Button
              onClick={() => {
                setTotalPeople(totalPeople - 1);
              }}
            >
              -
            </Button>
            <TextField
              // type="number"
              name="guests"
              sx={{ width: "60px" }}
              onChange={bookingInfoChangeHandler}
              value={totalPeople}
              inputProps={{
                min: 0,
                max: 6,
              }}
            />
            <Button
              onClick={() => {
                setTotalPeople(totalPeople + 1);
              }}
            >
              +
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider />

      {/* 어린이 */}
      <Box
        sx={{
          py: "1rem",
          display: "flex",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Box sx={{ fontWeight: "bold", pb: "0.25rem" }}>어린이</Box>
          <Box sx={{ fontSize: "0.8rem", color: "gray" }}>
            12세 이하 (영유아 포함)
          </Box>
        </Box>

        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: " flex-end",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Button
              onClick={() => {
                setTotalPeople(totalPeople - 1);
              }}
            >
              -
            </Button>
            <TextField
              // type="number"
              name="child"
              sx={{ width: "60px" }}
              onChange={bookingInfoChangeHandler}
              value={bookingInformation?.child || 0}
              inputProps={{
                min: 0,
                max: 6,
              }}
            />
            <Button
              onClick={() => {
                setTotalPeople(totalPeople + 1);
              }}
            >
              +
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider />
    </Box>
  );
};

export default ReservationDetails;
