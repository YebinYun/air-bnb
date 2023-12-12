import React, { useState } from "react";
import { styled } from "@mui/system";
import { iconData } from "../utils/dummy/Icon";
import { Box, Stack, Tabs, Tab } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

const Slidebar = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack
      direction="row"
      alignItems={"center"}
      margin={"0 -6%"}
      padding={"0 6%"}
      boxShadow={"0 1px 5px lightgray;"}
    >
      <Container>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {iconData.map((value, index) => (
            <IconContainer
              key={index}
              label={value.location}
              icon={value.icon}
            />
          ))}
        </Tabs>
      </Container>
      <FilterButton>
        <FilterListIcon />
        <Box width={"2rem"} marginLeft={"0.7rem"}>
          필터
        </Box>
      </FilterButton>
    </Stack>
  );
};

export default Slidebar;

const Container = styled(Stack)`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2rem;
`;

const IconContainer = styled(Tab)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;
  color: #444;
  cursor: pointer;
`;

const FilterButton = styled(Stack)`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 0.5rem;
  cursor: pointer;
`;
