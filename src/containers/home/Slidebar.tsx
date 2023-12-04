import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { iconData } from "../../utils/dummy/Icon";
import { Box, Stack, Tabs, Tab } from "@mui/material";
import FilterListIcon from "@material-ui/icons/FilterList";

const Slidebar = () => {
  const sideRef = useRef<HTMLDivElement>(null);
  const [slideScroll, setSlideScroll] = useState<boolean>(false);

  const sideButtonClick = () => {
    sideRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Stack direction="row" alignItems={"center"}>
        <Container>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {/* filterCard  */}
            {iconData.map((value, index) => (
              <IconContainer
                key={index}
                label={value.location}
                icon={value.icon}
              />
            ))}
          </Tabs>
        </Container>

        {/* filterButton  */}
        <FilterButton>
          <FilterListIcon />
          <Box width={"2rem"} marginLeft={"0.7rem"}>
            필터
          </Box>
        </FilterButton>
      </Stack>
    </>
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
  /* overflow: auto; */
`;

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

const IconContainer = styled(Tab)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  color: #444;
  cursor: pointer;
`;

const CategoryText = styled.span`
  font-size: 0.7rem;
  margin: 0.5rem 0;
  white-space: nowrap;
`;

const FilterButton = styled(Stack)`
  display: flex;
  flex-direction: row;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 0.5rem;
  cursor: pointer;
`;
