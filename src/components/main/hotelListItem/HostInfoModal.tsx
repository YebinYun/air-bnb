import { Box, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const HostInfoModal = ({ data, isModalOpen, setIsModalOpen }: any) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "#00000090",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          height: "90%",
          border: "1px solid red",
          background: "#00000090",
          zIndex: 1,
          display: "flex",
          placeItems: "center",
          color: "white",
        }}
      >
        <Button
          sx={{ position: "absolute", top: "2rem", right: "2rem" }}
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          <CloseIcon sx={{ color: "white" }} />
        </Button>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <div>
            <Image
              src={data?.host?.host_picture_url}
              alt="host_photo"
              width="100"
              height="100"
            />
          </div>
          <div>{data?.host?.host_location}</div>
          <div>{data?.host?.host_about}</div>
          <div>{data?.host?.host_neiborhood}</div>
        </Box>
      </Box>
    </Box>
  );
};

export default HostInfoModal;
