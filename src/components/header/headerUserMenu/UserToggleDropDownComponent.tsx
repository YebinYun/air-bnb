import { Box, Button, Stack } from "@mui/material";
import React from "react";

const UserToggleDropDownComponent = () => {
  return (
    <Stack
      direction={"column"}
      sx={{
        position: "absolute",
        top: 45,
        right: 0,
        width: "10rem",
        border: "solid 1px lightgray",
        borderRadius: "10px",
        background: "white",
        zIndex: 1,
      }}>
      <Button
        sx={{
          color: "black",
          borderBottom: "1px solid lightgray",
          borderRadius: 0,
        }}>
        회원가입
      </Button>
      <Button
        sx={{
          color: "black",
          borderBottom: "1px solid lightgray",
          borderRadius: 0,
        }}>
        로그인
      </Button>
      <Button
        sx={{
          color: "black",
        }}>
        비회원
      </Button>
    </Stack>
  );
};

export default UserToggleDropDownComponent;
