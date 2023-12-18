import { Box, Divider, styled } from "@mui/material";
import React from "react";

interface props {
  travelDestination: number;
  travelDate: number;
  travelDetail: number;
  currentPage: number;
}

const ProgressComponent = ({
  travelDestination,
  travelDate,
  travelDetail,
  currentPage,
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
          padding: "0 4.5rem",
          width: "100%",
        }}
      >
        {currentPage <= travelDestination ? (
          <CompleteBox />
        ) : (
          <CompleteChange />
        )}
        {currentPage <= travelDate ? <CompleteBox /> : <CompleteChange />}
        {currentPage <= travelDetail ? <CompleteBox /> : <CompleteChange />}
      </Box>
    </Box>
  );
};

export default ProgressComponent;

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
