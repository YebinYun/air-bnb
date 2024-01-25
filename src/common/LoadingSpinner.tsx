import { Box } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";

const LoadingSpinner = () => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          zIndex: 100,
          width: "100vw",
          height: "calc(100vh - 200px)",
        }}
      >
        <Image
          style={{ placeItems: "center" }}
          src={"/images/loading.gif"}
          alt={"로딩중"}
          width={100}
          height={100}
        />
      </Box>
    </Fragment>
  );
};

export default LoadingSpinner;
