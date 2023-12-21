import { Box, Button, Divider, TextField } from "@mui/material";
import React from "react";
import { useNavigatePage } from "@/store/useNavigatePage ";
import useGetHotelList from "./useGetHotelList";
import { useRecoilState } from "recoil";
import { getHotelListQuery } from "@/store/getHotelListQuery";
import { useQuery } from "@tanstack/react-query";

const ReservationDetails = ({ guestsInformation, setGuestsInformation }) => {
  const totalCounterHandler = (guestType: string, value: number) => {
    const updateList = { ...guestsInformation };

    if (guestType !== "children") updateList.adults_number += value;
    else updateList.children_number += value;

    return setGuestsInformation(updateList);
  };

  return (
    <Box sx={{ mt: "3rem" }}>
      <Box>
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
            <Box sx={{ fontSize: "0.8rem", color: "gray" }}> 18세 이상</Box>
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={() => {
                  guestsInformation?.adults_number > 0 &&
                    totalCounterHandler("adult", -1);
                }}
              >
                -
              </Button>
              <Box sx={{ width: "4rem", textAlign: "center" }}>
                {guestsInformation?.adults_number}
              </Box>

              <Button
                onClick={() => {
                  totalCounterHandler("adult", 1);
                }}
              >
                +
              </Button>
            </Box>
          </Box>
        </Box>
        <Divider />
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
              청소년 (영.유아 포함)
            </Box>
            <Box sx={{ fontSize: "0.8rem", color: "gray" }}>13세 미만</Box>
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                onClick={() => {
                  guestsInformation?.children_number > 0 &&
                    totalCounterHandler("children", -1);
                }}
              >
                -
              </Button>
              <Box sx={{ width: "4rem", textAlign: "center" }}>
                {guestsInformation?.children_number}
              </Box>

              <Button
                onClick={() => {
                  totalCounterHandler("children", 1);
                }}
              >
                +
              </Button>
            </Box>
          </Box>
          <Divider />
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default ReservationDetails;
