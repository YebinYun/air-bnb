import { Box, Button, Divider, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import useGetHotelList from "./useGetHotelList";

interface props {
  peopleChangeHandler: number;
  totalPeople: number;
  setTotalPeople: () => void;
}

const ReservationDetails = ({
  peopleChangeHandler,
  setTotalPeople,
  totalPeople,
}: props) => {
  const { fetchData, options, changeDate } = useGetHotelList();

  useEffect(() => {
    changeDate({ guests: "2", child: "1" });
    fetchData();
  }, []);

  const [bookingInformation, setBookingInformation] = useState([
    { id: 0, guests: "성인", age: " 13세 이상", quantity: 0 },
    {
      id: 1,
      guests: "어린이",
      age: "  12세 이하 (영유아 포함)",
      quantity: 0,
    },
  ]);

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
                    totalCounterHandler(item.id, -1);
                  }}
                >
                  -
                </Button>
                <TextField
                  name={item.guests}
                  value={item.quantity}
                  onChange={item.quantity}
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
