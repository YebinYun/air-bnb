import React from "react";
import { BlockLayout } from "./HostInfoComponent";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const HotelInfoComponent = ({ data }: any) => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <BlockLayout
        sx={{ mt: "1rem", display: "flex", flexDirection: "column" }}
      >
        <Box sx={{ fontSize: "1.5rem", fontWeight: "bold", py: "0.5rem" }}>
          {data?.name}
        </Box>
        <Box sx={{ fontSize: "1rem", fontWeight: "semiBold" }}>
          {data?.address?.country}
        </Box>
        <Box
          sx={{
            my: "1rem",
            p: "1rem",
            border: "1px solid",
            borderRadius: "10px",
          }}
        >
          {data?.summary}
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", my: "30px" }}>
          {data?.amenities.map((amenities: string, idx: number) => (
            <AmenitiesBox key={idx}>{amenities}</AmenitiesBox>
          ))}
        </Box>
      </BlockLayout>
    </Box>
  );
};

export default HotelInfoComponent;

const AmenitiesBox = styled(Box)`
  /* width: 75px;
  height: 25px; */
  font-size: 0.8rem;
  margin: 0.25rem;
  background: #ffffff;
  padding: 0.5rem;
  border-radius: 10px;
  /* box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3); */
`;
