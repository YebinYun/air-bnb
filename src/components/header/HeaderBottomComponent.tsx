"use client";
import React from "react";
import { styled } from "@mui/system";
import { iconData } from "../../utils/HeaderIcon";
import { Stack, Tabs, Tab, tabsClasses, useMediaQuery } from "@mui/material";

type props = {
  value: string;
  handleChange?: (event: any, newValue: string) => void;
};

const HeaderBottomComponent = ({ value, handleChange }: props) => {
  const match: boolean = useMediaQuery("(min-width:600px)");
  return (
    <Stack
      direction="row"
      boxShadow={"0 1px 5px lightgray;"}
      sx={{ background: "white", alignItems: "center", px: match ? "5rem" : 0 }}
    >
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
          }}
        >
          {iconData.map((item, index) => (
            <IconContainer
              key={index}
              value={item.location}
              label={item.location}
              icon={item.icon}
            />
          ))}
        </Tabs>
      </Container>
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
`;

const IconContainer = styled(Tab)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;
  color: #444;
  cursor: pointer;
  font-size: 10px;
  > svg {
    height: 1.5rem;
    width: 1.5rem;
    padding-bottom: 0.1rem;
  }
`;
