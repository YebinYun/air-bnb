"use client";
import React from "react";
import { styled } from "@mui/system";
import { iconData } from "../../hooks/dummys/HeaderIcon";
import { Box, Stack, Tabs, Tab, tabsClasses } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

type props = {
  value: number;
  handleChange?: (event: React.SyntheticEvent, newValue: number) => void;
};

const HeaderBottomComponent = ({ value, handleChange }: props) => {
  return (
    <Stack
      direction="row"
      boxShadow={"0 1px 5px lightgray;"}
      sx={{ background: "white", alignItems: "center", px: "5rem" }}>
      <Container>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0.3 },
            },
          }}>
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
        <Box sx={{ width: "2rem", ml: "0.7rem" }}>필터</Box>
      </FilterButton>
    </Stack>
  );
};

export default HeaderBottomComponent;

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
