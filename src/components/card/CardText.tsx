import React from "react";
import { Box, Card, Stack, TextField } from "@mui/material";
import styled from "@emotion/styled";

const CardText = () => {
  return (
    <Stack>
      {/* 나라+지역 / 별점 */}
      <SpacingStack spacing={"auto"} direction={"row"}>
        <BoldText> 한국 서울특별시 </BoldText>
        <Text> ★ n.nn </Text>
      </SpacingStack>

      {/* 전망 정보 */}
      <SpacingStack>
        <Text>도시 전망</Text>
      </SpacingStack>

      {/* 숙박 일정 */}
      <SpacingStack>
        <Text>12월 9일~14일</Text>
      </SpacingStack>

      {/* 1박 가격 */}
      <SpacingStack>
        <BoldText>\148,000 /박</BoldText>
      </SpacingStack>
    </Stack>
  );
};

export default CardText;

const Text = styled.span`
  font-size: 0.8rem;
`;
const BoldText = styled(Text)`
  font-weight: bold;
`;

const SpacingStack = styled(Stack)`
  padding: 0.1rem;
`;
