import React from "react";
import { Icon } from "@iconify/react";
import { Box, Button, Stack } from "@mui/material";
import styled from "@emotion/styled";
import Background from "@/layout/Background";

const Sidebar = () => {
  return (
    <Background>
      <Stack
        spacing={2}
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {/* left */}
        <ArrowButton>
          <Icon icon="ep:arrow-left-bold" />
        </ArrowButton>

        {/* filterCard  */}
        <Button
          sx={{ display: "flex", flexDirection: "column", color: "black" }}
        >
          <Icon icon="icon-park-outline:camp" width={"25px"} />
          <span>캠핑장</span>
        </Button>

        {/* right */}
        <Button>
          <Icon icon="ep:arrow-left-bold" rotate={2} />
        </Button>

        {/* filterButton  */}
        <Button variant="contained">
          <Icon icon="mi:filter" />
          <span>필터</span>
        </Button>
      </Stack>
    </Background>
  );
};

export default Sidebar;

const ArrowButton = styled(Button)`
  width: 15px;
  border: solid 1px lightgray;
  border-radius: 25px;
  padding: 10px 0;
`;
