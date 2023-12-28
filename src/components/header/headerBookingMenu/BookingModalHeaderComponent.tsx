import { Box, Button, Stack } from "@mui/material";
import React from "react";

type props = {
  coordsValue: any;
  totalQuantity: number;
  pageIndex: number;
  setPageIndex: any;
};

const BookingModalHeaderComponent = ({
  coordsValue,
  totalQuantity,
  pageIndex,
  setPageIndex,
}: props) => {
  return (
    <>
      <Stack direction={"row"} sx={{ mt: "2rem", height: "4rem" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            px: "2rem",
            border: "1px solid lightgray",
            borderRadius: "50px",
            background: "#ff5a5f",
          }}
        >
          {/* index 0 */}
          <Button
            onClick={() => {
              setPageIndex(0);
            }}
            sx={{ flexDirection: "column" }}
          >
            <Box sx={{ color: "white", fontWeight: "bold" }}>여행지</Box>
            <Box color={"black"}>
              {coordsValue?.lat === 34.5289 ? "여행지 검색" : "선택 완료"}
            </Box>
          </Button>

          {/* index 1 */}
          <Button
            onClick={() => {
              setPageIndex(1);
            }}
            sx={{ flexDirection: "column" }}
          >
            <Box sx={{ color: "white", fontWeight: "bold" }}>날짜</Box>
            <Box color={"black"}>
              {coordsValue?.dates[0].getFullYear() +
                "년" +
                (coordsValue?.dates[0].getMonth() + 1) +
                "월" +
                coordsValue?.dates[0].getDate() +
                "일 ~ " +
                coordsValue?.dates[1].getFullYear() +
                "년" +
                (coordsValue?.dates[1].getMonth() + 1) +
                "월" +
                coordsValue?.dates[1].getDate() +
                "일"}
            </Box>
          </Button>

          {/* index 2 */}
          <Button
            onClick={() => {
              setPageIndex(2);
            }}
            sx={{ flexDirection: "column" }}
          >
            <Box sx={{ color: "white", fontWeight: "bold" }}>여행자</Box>
            <Box color={"black"}>
              {totalQuantity === 2 ? "여행자 입력" : totalQuantity + "명"}
            </Box>
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default BookingModalHeaderComponent;
