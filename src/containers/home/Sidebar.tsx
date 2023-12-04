import React from "react";
import styled from "@emotion/styled";
import Background from "@/layout/Background";
import { iconData } from "../../utils/dummy/Icon";
import { Box, Stack } from "@mui/material";
import FilterListIcon from "@material-ui/icons/FilterList";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Sidebar = () => {
  return (
    <Background>
      <Stack direction="row" alignItems={"center"}>
        <Container>
          {/* left */}
          <ArrowButton>
            <ArrowBackIosIcon fontSize={"small"} />
          </ArrowButton>

          {/* filterCard  */}
          <Container width={"100%"}>
            {iconData.map((value, index) => (
              <IconContainer key={index}>
                {value.icon}
                <CategoryText>{value.location}</CategoryText>
              </IconContainer>
            ))}
          </Container>

          {/* right */}
          <ArrowButton>
            <ArrowForwardIosIcon fontSize={"small"} />
          </ArrowButton>
        </Container>

        {/* filterButton  */}
        <FilterButton>
          <FilterListIcon />
          <Box width={"35px"} marginLeft={"0.7rem"}>
            필터
          </Box>
        </FilterButton>
      </Stack>
    </Background>
  );
};

export default Sidebar;

const Container = styled(Stack)`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2rem;
  overflow: auto;
  z-index: 1;
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

const IconContainer = styled(Stack)`
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
