import React from "react";
import { Box, Button, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type props = {
  isBookingModalOpen: boolean;
  toggleBookingModal: () => void;
};

const BookingModalComponent = ({
  isBookingModalOpen,
  toggleBookingModal,
}: props) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          alignItems: "center",
          p: "2rem",
          borderRadius: "5px",
        }}
      >
        <Stack direction={"row"} sx={{ alignItems: "center" }}>
          <Box sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            객실 찾아보기
          </Box>
          <Button
            onClick={() => {
              toggleBookingModal();
            }}
          >
            <CloseIcon sx={{ color: "black" }} />
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default BookingModalComponent;
