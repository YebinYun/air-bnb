import React from "react";
import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BookingModalHeaderComponent from "./BookingModalHeaderComponent";
import BookingProgressComponent from "./BookingProgressComponent";
import BookingMapSearch from "@/components/header/headerBookingMenu/bookingMap/BookingMapSearch";
import BookingDateInput from "@/components/header/headerBookingMenu/bookingCalender/BookingDateInput";
import BookingGuestInput from "@/components/header/headerBookingMenu/bookingGuest/BookingGuestInput";

type props = {
  isBookingModalOpen?: boolean;
  toggleBookingModal: () => void;
  pageIndex: number;
  setPageIndex?: any;
  totalQuantity: number;
  prevPage: () => void;
  nextPage: () => void;
  coordsValue?: any;
  setCoorsValue?: any;
  handleOnBookingInfoChange?: any;
  bookingInfo?: any;
};

const BookingModalComponent = ({
  toggleBookingModal,
  pageIndex,
  setPageIndex,
  totalQuantity,
  prevPage,
  nextPage,
  coordsValue,
  setCoorsValue,
  handleOnBookingInfoChange,
  bookingInfo,
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
          height: "80%",
          width: "80%",
          overflow: "hidden",
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
          onClick={toggleBookingModal}
        >
          <CloseIcon sx={{ color: "black" }} />
        </Button>

        <BookingProgressComponent
          travelMap={0}
          travelDate={1}
          travelGuest={2}
          pageIndex={pageIndex}
        />

        {/* 안내헤더 */}
        <BookingModalHeaderComponent
          coordsValue={coordsValue}
          totalQuantity={totalQuantity}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />

        {/* index 0 (지도) */}
        {pageIndex === 0 && <BookingMapSearch />}

        {/* index 1 (캘린더) */}
        {pageIndex === 1 && (
          <BookingDateInput
            rangeDate={bookingInfo?.dates}
            dateChangeHandler={handleOnBookingInfoChange}
          />
        )}

        {/* index 2 (인원) */}
        {pageIndex === 2 && (
          <BookingGuestInput
            guestsInformation={coordsValue}
            setGuestsInformation={setCoorsValue}
          />
        )}

        {/* 이동 버튼 */}
        <Box
          width={"90%"}
          display={"flex"}
          position={"absolute"}
          bottom={"1rem"}
          justifyContent={"space-between"}
          sx={{ mb: "10px" }}
        >
          <Button onClick={prevPage} sx={{ border: "1px solid #767676" }}>
            이전
          </Button>
          <Button
            onClick={() => {
              if (pageIndex !== 2) {
                return nextPage();
              } else {
                toggleBookingModal();
                alert("stop working..");
              }
            }}
            sx={{ border: "1px solid #767676" }}
          >
            {pageIndex === 2 ? "완료" : "다음"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BookingModalComponent;
