import { Stack, styled } from "@mui/material";
import React from "react";

type props = {
  location: string;
  score: string;
  hotelName: string;
  day: string;
  price: number;
};

const MainCardTextComponent = ({
  location,
  score,
  hotelName,
  day,
  price,
}: props) => {
  return (
    <Stack>
      <SpacingStack>
        <BoldText>{hotelName}</BoldText>
      </SpacingStack>

      <SpacingStack>
        <Text>{location}</Text>
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
