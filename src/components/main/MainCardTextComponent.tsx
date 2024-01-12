import { Box, Stack, styled } from "@mui/material";
import React from "react";

type props = {
  location: string;
  score: string;
  hotelName: string;
  price: any;
};

const MainCardTextComponent = ({
  location,
  score,
  hotelName,
  price,
}: props) => {
  return (
    <Stack sx={{ p: "1rem 0.5rem" }}>
      <SpacingStack>
        <BoldText>{hotelName}</BoldText>
      </SpacingStack>

      <SpacingStack>
        <Text>{location}</Text>
      </SpacingStack>

      <SpacingStack spacing={1} direction={"row"} alignItems={"center"}>
        <Box>
          <Text> {`★`} </Text>
          {score ? <BoldText>{score}</BoldText> : <BoldText>-</BoldText>}
          <Text> {`/ 100`} </Text>
        </Box>
      </SpacingStack>

      <SpacingStack>
        <Box>
          <Text> {`￦`} </Text>
          <BoldText>{Math.trunc(price * 1313.94).toLocaleString()}</BoldText>
          <Text> {`/ 1 Day `} </Text>
        </Box>
      </SpacingStack>
    </Stack>
  );
};

export default MainCardTextComponent;

const Text = styled("span")`
  font-size: 0.8rem;
`;
const BoldText = styled(Text)`
  font-weight: bold;
`;
const SpacingStack = styled(Stack)`
  padding: 0.1rem;
`;
