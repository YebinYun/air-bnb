import { Box, Button, Divider, TextField } from "@mui/material";
import React  from "react";
import { useNavigatePage } from "@/store/useNavigatePage ";

const ReservationDetails = ()=>{
  const { guestsInformation, setGuestsInformation } = useNavigatePage();

  const totalCounterHandler = (id: number, value: number) => {
    const updatedList = [...guestsInformation];
    updatedList[id].quantity += value;
    setGuestsInformation(updatedList);
  };

  return (
    <Box sx={{ mt: "3rem" }}>
      {guestsInformation.map((item) => (
        <Box key={item.id}>
          <Box
            sx={{
              py: "1rem",
              display: "flex",
              alignItems: "center",
              height: "100%",
              width: "100%",
            }}>
            <Box sx={{ width: "50%" }}>
              <Box sx={{ fontWeight: "bold", pb: "0.25rem" }}>
                {item.guests}
              </Box>
              <Box sx={{ fontSize: "0.8rem", color: "gray" }}>{item.age}</Box>
            </Box>

            <Box
              sx={{
                width: "50%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: " flex-end",
              }}>
              <Box sx={{ display: "flex" }}>
                <Button
                  onClick={() => {
                    item.quantity > 0 && totalCounterHandler(item.id, -1);
                  }}>
                  -
                </Button>
                <TextField
                  name={item.guests}
                  value={item.quantity}
                  sx={{ width: "60px" }}
                />

                <Button
                  onClick={() => {
                    totalCounterHandler(item.id, 1);
                  }}>
                  +
                </Button>
              </Box>
            </Box>
            <Divider />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ReservationDetails;
