import { Box, Button, Divider, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import useGetHotelList from "./useGetHotelList";

interface props {
  bookingInformation: any;
  setBookingInformation: () => void;
}

const ReservationDetails = ({
  bookingInformation,
  setBookingInformation,
}: props) => {
  const { fetchData, changeData } = useGetHotelList();

  const onChangeHandler = (e: any) => {
    changeData({
      ...fetchData,
      [e.target.name]: e.target.value,
    });
  };

  const totalCounterHandler = (id: number, value: number) => {
    const totalList = [...bookingInformation];
    bookingInformation[id].quantity += value;
    setBookingInformation(totalList);
  };

  return (
    <Box sx={{ mt: "3rem" }}>
      {bookingInformation.map((item) => (
        <Box key={item.id}>
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
              <Box sx={{ fontWeight: "bold", pb: "0.25rem" }}>
                {item.guests}
              </Box>
              <Box sx={{ fontSize: "0.8rem", color: "gray" }}>{item.age}</Box>
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
                    item.quantity > 0 && totalCounterHandler(item.id, -1);
                  }}
                >
                  -
                </Button>
                <TextField
                  name={item.guests}
                  value={item.quantity}
                  sx={{ width: "60px" }}
                />

                <Button
                  onClick={() => {
                    totalCounterHandler(item.id, 1);
                  }}
                >
                  +
                </Button>
              </Box>
            </Box>
            <Divider />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ReservationDetails;
