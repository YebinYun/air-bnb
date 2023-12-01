import React from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Icon } from "@iconify/react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import styled from "@emotion/styled";
import Background from "@/layout/Background";

const Sidebar = () => {
  return (
    <Background>
      <Stack direction="row" alignItems={"center"}>
        <Stack
          width={"100%"}
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* left */}
          <ArrowButton>
            <ArrowBackIosIcon fontSize={"small"} />
          </ArrowButton>

          {/* filterCard  */}
          <Button
            sx={{ display: "flex", flexDirection: "column", color: "black" }}
          >
            <Icon icon="icon-park-outline:camp" width={"25px"} />
            <span>캠핑장</span>
          </Button>

          {/* right */}
          <ArrowButton>
            <ArrowForwardIosIcon fontSize={"small"} />
          </ArrowButton>
        </Stack>

        {/* filterButton  */}
        <Stack>
          <Stack direction={"row"}>
            <FilterListIcon />
            <Box width={"35px"}>필터</Box>
          </Stack>
        </Stack>
      </Stack>
    </Background>
  );
};

export default Sidebar;

const ArrowButton = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 10px;
  box-shadow: 1px 1px 1px 1px lightgray;
  color: black;
  border-radius: 25px;
  padding-left: 1rem;
  cursor: pointer;
`;
