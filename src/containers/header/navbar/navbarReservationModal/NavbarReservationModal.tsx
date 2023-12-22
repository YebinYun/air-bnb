import React, { useEffect, useState } from "react";
import { Box, Button, Divider, styled } from "@mui/material";
import "react-calendar/dist/Calendar.css";
import ReservationCalendar from "./ReservationCalendar";
import ReservationDetails from "./ReservationDetails";
import ProgressContainer from "./ProgressContainer";
import { useNavigatePage } from "@/store/useNavigatePage ";
import ReservationMapSearch from "./ReservationMapSearch";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import {
  bookingInformationSelector,
  useBookingInfoChangeHandler,
} from "@/store/getHotelListQuery";
import useGetHotelList from "@/store/getHotelList";

interface props {
  loginModalHandler: () => void;
}

const NavbarReservationModal = ({ loginModalHandler }: props) => {
  const { fetchData, options, changeData, listData } = useGetHotelList();
  const {
    pageIndex,
    totalQuantity,
    dateChangeHandler,
    previousPage,
    nextPage,
  } = useNavigatePage();

  const [coordsValue, setCoorsValue] = useRecoilState(
    bookingInformationSelector
  );
  const resetValue = useResetRecoilState(bookingInformationSelector);
  const { handleOnBookingInfoChange, bookingInfo } =
    useBookingInfoChangeHandler();

  useEffect(() => {
    return resetValue();
  }, []);

  return (
    <NavInfoModalBackground>
      <NavInfoModalContainer>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            my: "2rem",
          }}
        >
          <Box> 객실 찾아보기</Box>
          {/* 닫기버튼 */}
          <Box
            sx={{
              position: "absolute",
              top: "10px",
              right: "25px",
              color: "black",
              fontWeight: "bold",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => {
              loginModalHandler();
            }}
          >
            &#9421;
          </Box>
        </Box>
        <Divider />

        {/* 완료 안내 */}
        <ProgressContainer
          travelDestination={0}
          travelDate={1}
          travelDetail={2}
          currentPage={pageIndex}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* 헤더 */}
          <Box
            sx={{ display: "flex", flexDirection: "row", marginTop: "2rem" }}
          >
            <SelectMenubar>
              <Button sx={{ flexDirection: "column" }}>
                <Box sx={{ color: "white", fontWeight: "bold" }}>여행지</Box>
                <Box color={"black"}>
                  {coordsValue?.lat === 34.5289 ? "여행지 검색" : "선택 완료"}
                  {/* key를 coords?.lat으로 맞추고 일치하는 countryCapital에 lat에서 Country 값을 가져오기 */}
                </Box>
              </Button>

              <Button sx={{ flexDirection: "column" }}>
                <Box sx={{ color: "white", fontWeight: "bold" }}>날짜</Box>
                <Box color={"black"} onChange={dateChangeHandler}>
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

              <Button sx={{ flexDirection: "column" }}>
                <Box sx={{ color: "white", fontWeight: "bold" }}>여행자</Box>
                <Box color={"black"}>
                  {totalQuantity === 0 ? "여행자 입력" : totalQuantity}
                </Box>
              </Button>
            </SelectMenubar>
          </Box>
          {pageIndex === 0 && <ReservationMapSearch />}

          {/* 캘린더 */}
          {pageIndex === 1 && (
            <ReservationCalendar
              rangeDate={bookingInfo?.dates}
              dateChangeHandler={handleOnBookingInfoChange}
            />
          )}

          {/* 인원 */}
          {pageIndex === 2 && (
            <ReservationDetails
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
            <Button
              onClick={() => {
                previousPage();
              }}
              sx={{ border: "1px solid #767676" }}
            >
              이전
            </Button>
            <Button
              onClick={() => {
                if (pageIndex !== 2) {
                  return nextPage();
                } else {
                  // close modal
                  // fetch data
                  loginModalHandler();
                  fetchData();
                }
              }}
              sx={{ border: "1px solid #767676" }}
            >
              {pageIndex === 2 ? "완료" : "다음"}
            </Button>
          </Box>
        </Box>
      </NavInfoModalContainer>
    </NavInfoModalBackground>
  );
};

export default NavbarReservationModal;

const NavInfoModalBackground = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const NavInfoModalContainer = styled(Box)`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 650px;
  min-height: 800px;
  border: 1px solid lightgray;
  border-radius: 25px;
  padding: 0 2rem;
  background: white;
`;

const SelectMenubar = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  border: 1px solid lightgray;
  border-radius: 50px;
  background: #ff5a5f;
`;
