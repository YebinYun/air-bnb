import React from "react";
import { Box, Button, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BookingProgressContainer from "@/containers/header/headerBookingMenu/BookingProgressContainer";

type props = {
  isBookingModalOpen: boolean;
  toggleBookingModal: () => void;
  pageIndex: number;
  totalQuantity: number;
  prevPage: () => void;
  nextPage: () => void;
  coordsValue: any;
  setCoorsValue: any;
};

const BookingModalComponent = ({
  isBookingModalOpen,
  toggleBookingModal,
  pageIndex,
  totalQuantity,
  prevPage,
  nextPage,
  coordsValue,
  setCoorsValue,
}: props) => {
  console.log(pageIndex);

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
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          객실 찾아보기
        </Box>
        <Button
          sx={{ position: "absolute", top: "2rem", right: "2rem" }}
          onClick={() => {
            toggleBookingModal();
          }}
        >
          <CloseIcon sx={{ color: "black" }} />
        </Button>

        <BookingProgressContainer
          travelMap={0}
          travelDate={1}
          travelGuest={2}
          pageIndex={pageIndex}
        />

        {/* 안내헤더 */}
        <Stack direction={"row"} sx={{ mt: "2rem" }}>
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
            <Button sx={{ flexDirection: "column" }}>
              <Box sx={{ color: "white", fontWeight: "bold" }}>여행지</Box>
              <Box color={"black"}>
                {coordsValue?.lat === 34.5289 ? "여행지 검색" : "선택 완료"}
              </Box>
            </Button>

            {/* index 1 */}
            <Button sx={{ flexDirection: "column" }}>
              <Box sx={{ color: "white", fontWeight: "bold" }}>날짜</Box>
              <Box color={"black"}>
                {coordsValue?.dates === null
                  ? "날짜 추가"
                  : coordsValue?.dates[0].getFullYear() +
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
            <Button sx={{ flexDirection: "column" }}>
              <Box sx={{ color: "white", fontWeight: "bold" }}>여행자</Box>
              <Box color={"black"}>
                {totalQuantity === 0 ? "여행자 입력" : totalQuantity}
              </Box>
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default BookingModalComponent;
