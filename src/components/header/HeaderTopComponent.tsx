import React from "react";
import { Box, Button, Stack } from "@mui/material";
import LuggageIcon from "@mui/icons-material/Luggage";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

const HeaderTopComponent = () => {
  return (
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          py: "1rem",
        }}>
        <Box sx={{ width: "5rem" }}>
          <LuggageIcon sx={{ color: "#FF5A5F", fontSize: 50 }} />
        </Box>

        <Button>
          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
              color: "black",
              fontWeight: "bold",
              padding: " 0.5rem 1.5rem",
              boxShadow: "1px 1px 1px 1px lightgray",
              borderRadius: "25px",
            }}>
            <Box sx={{ borderRight: "2px solid lightgray", pr: "1rem" }}>
              위치 추가
            </Box>
            <Box sx={{ borderRight: "2px solid lightgray", px: "1rem" }}>
              날짜 추가
            </Box>
            <Box sx={{ px: "1rem" }}>게스트 추가</Box>
            <SearchIcon
              sx={{
                background: "#FF5A5F",
                color: "ivory",
                padding: 0.5,
                borderRadius: "25px",
              }}
            />
          </Stack>
        </Button>

        <Button
          sx={{
            padding: "0.6rem 1rem",
            alignItems: "center",
            width: "5rem",
            boxShadow: "1px 1px 1px 1px lightgray",
            borderRadius: "25px",
            color: "gray",
          }}>
          <MenuIcon sx={{ mr: "0.5rem" }} />
          <AccountCircleIcon />
      </Button>
      </Stack>
  );
};

export default HeaderTopComponent;
