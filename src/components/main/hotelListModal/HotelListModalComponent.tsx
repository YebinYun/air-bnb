import { Box, Button, styled } from "@mui/material";
import React, { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";

type HotelListModalComponentPropType = {
  setIsImgError: (props: boolean) => void;
  children: ReactNode;
  setIsModalOpen: (props: boolean) => void;
};

const HotelListModalComponent = ({
  children,
  setIsModalOpen,
  setIsImgError,
}: HotelListModalComponentPropType) => {
  return (
    <Container>
      <Box>
        <Box sx={{ p: "5rem", position: "relative" }}>{children}</Box>
      </Box>
      <Box sx={{ position: "relative" }}>
        <CloseButton
          onClick={() => {
            setIsModalOpen(false);
            setIsImgError(false);
          }}
        >
          <CloseIcon sx={{ color: "black" }} />
        </CloseButton>
      </Box>
    </Container>
  );
};

export default HotelListModalComponent;

const Container = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: #00000088;
  backdrop-filter: blur(0.2rem);
  color: #444;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(Box)`
  position: fixed;
  top: 0;
  right: 0;
  transform: translate(-2rem, 2rem);
  display: flex;
  align-items: center;
  background: #ffffffbb;
  border-radius: 50%;
  padding: 0.25rem;
  cursor: pointer;
  &:hover {
    background: #ddddddbb;
  }
`;
