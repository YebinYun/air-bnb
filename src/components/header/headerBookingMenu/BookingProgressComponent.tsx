import { Box, Divider } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

type props = {
  pageIndex: number;
  travelMap: number;
  travelDate: number;
  travelGuest: number;
};

const BookingProgressComponent = ({
  pageIndex,
  travelMap,
  travelDate,
  travelGuest,
}: props) => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        marginTop: "2.5rem",
        alignItems: "center",
      }}
    >
      <Divider
        sx={{
          position: "absolute",
          width: "100%",
          border: "2px solid #00A699",
          borderRadius: "50px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {pageIndex <= travelMap ? <CompleteBox /> : <CompleteChange />}
        {pageIndex <= travelDate ? <CompleteBox /> : <CompleteChange />}
        {pageIndex <= travelGuest ? <CompleteBox /> : <CompleteChange />}
      </Box>
    </Box>
  );
};

const CompleteBox = styled(Box)`
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background: white;
  border: 1px solid black;
`;

/* 완료시 */
const CompleteChange = styled(CompleteBox)`
  background: #ff5a5f;
  width: 20px;
  height: 20px;
`;

export default BookingProgressComponent;
