"use client";

import { Box, Button, Divider, Stack } from "@mui/material";
import React from "react";

type props = {
  guestsInformation: any;
  totalCounterHandler: any;
};

const BookingGuestInput = ({
  guestsInformation,
  totalCounterHandler,
}: props) => {
  return (
    <Box sx={{ m: "2rem 1rem" }}>
      <Stack direction={"row"} sx={{ py: "1rem" }}>
        <Box sx={{ width: "50%" }}>
          <Box sx={{ fontWeight: "bold", pb: "0.25rem" }}>성인</Box>
          <Box sx={{ fontSize: "0.8rem", color: "gray" }}>18세 이상</Box>
        </Box>

        <Stack
          direction={"row"}
          sx={{
            width: "50%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              guestsInformation?.adults_number > 1 &&
                totalCounterHandler("adult", -1);
            }}
          >
            -
          </Button>
          <Box>{guestsInformation?.adults_number}명</Box>
          <Button
            onClick={() => {
              totalCounterHandler("adult", 1);
            }}
          >
            +
          </Button>
        </Stack>
      </Stack>
      <Divider />

      <Stack direction={"row"} sx={{ py: "1rem" }}>
        <Box sx={{ width: "50%" }}>
          <Box sx={{ fontWeight: "bold", pb: "0.25rem" }}>청소년, 어린이</Box>
          <Box sx={{ fontSize: "0.8rem", color: "gray" }}>17세 이하</Box>
        </Box>

        <Stack
          direction={"row"}
          sx={{
            width: "50%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              guestsInformation?.adults_number > 1 &&
                totalCounterHandler("children", -1);
            }}
          >
            -
          </Button>
          <Box>{guestsInformation?.children_number}명</Box>
          <Button
            onClick={() => {
              totalCounterHandler("children", 1);
            }}
          >
            +
          </Button>
        </Stack>
      </Stack>
      <Divider />
    </Box>
  );
};

export default BookingGuestInput;
