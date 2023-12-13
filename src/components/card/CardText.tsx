import React from "react";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/system";

interface props {
  location: string;
  score: string;
  hotelName: string;
  day: string;
  price: number;
}

const CardText = ({ location, score, hotelName, day, price }: props) => {
  return (
    <Stack sx={{ margin: "0.8rem 0.2rem", padding: "0.5rem" }}>
      {/* 호텔이름 / 별점 */}
      <SpacingStack>
        <BoldText sx={{ height: "3rem", fontSize: "1rem" }}>
          {" "}
          {hotelName}{" "}
        </BoldText>
      </SpacingStack>

      {/* ~시 지역 */}
      <SpacingStack>
        <Text>{location}</Text>
      </SpacingStack>

      {/* 호텔이름 / 별점 */}
      <SpacingStack spacing={1} direction={"row"} alignItems={"center"}>
        <Text> {day} </Text>
        <Box>
          <Text> {`★`} </Text>
          <BoldText>{score}</BoldText>
          <Text> {`/ 10`} </Text>
        </Box>
      </SpacingStack>

      {/* 1박 가격 */}
      <SpacingStack>
        <Box>
          <Text> {`￦`} </Text>
          <BoldText>{Math.trunc(price).toLocaleString()}</BoldText>
          <Text> {`/ 1 Day `} </Text>
        </Box>
      </SpacingStack>
    </Stack>
  );
};

export default CardText;

const Text = styled("span")`
  font-size: 0.8rem;
`;
const BoldText = styled(Text)`
  font-weight: bold;
`;

const SpacingStack = styled(Stack)`
  padding: 0.1rem;
`;
