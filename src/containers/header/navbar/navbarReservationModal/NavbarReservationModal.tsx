import React from "react";
import { Box, Button, Divider, styled } from "@mui/material";
import "react-calendar/dist/Calendar.css";
import ReservationCalendar from "./ReservationCalendar";
import ReservationDetails from "./ReservationDetails";
import ProgressContainer from "./ProgressContainer";
import { useNavigatePage } from "@/store/useNavigatePage ";

interface props {
  loginModalHandler: () => void;
}

const NavbarReservationModal = ({ loginModalHandler }: props) => {
  const {
    pageIndex,
    rangeDate,
    guestsInformation,
    setGuestsInformation,
    totalQuantity,
    dateChangeHandler,
    previousPage,
    nextPage,
  } = useNavigatePage();

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
          }}>
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
            }}>
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
          }}>
          {/* 헤더 */}
          <Box
            sx={{ display: "flex", flexDirection: "row", marginTop: "2rem" }}>
            <SelectMenubar>
              <Button sx={{ flexDirection: "column" }}>
                <Box sx={{ color: "white", fontWeight: "bold" }}>여행지</Box>
                <Box color={"black"}>여행지 검색</Box>
              </Button>

              <Button sx={{ flexDirection: "column" }}>
                <Box sx={{ color: "white", fontWeight: "bold" }}>날짜</Box>
                <Box color={"black"} onChange={dateChangeHandler}>
                  {rangeDate === null
                    ? "날짜 추가"
                    : rangeDate[0].getFullYear() +
                      "년" +
                      (rangeDate[0].getMonth() + 1) +
                      "월" +
                      rangeDate[0].getDate() +
                      "일 ~ " +
                      rangeDate[1].getFullYear() +
                      "년" +
                      (rangeDate[1].getMonth() + 1) +
                      "월" +
                      rangeDate[1].getDate() +
                      "일"}
                </Box>
              </Button>

              <Button sx={{ flexDirection: "column" }}>
                <Box sx={{ color: "white", fontWeight: "bold" }}>여행자</Box>
                <Box color={"black"}>
                  {totalQuantity === 0 ? "게스트 추가" : totalQuantity}
                </Box>
              </Button>
            </SelectMenubar>
          </Box>

          {/* 캘린더 */}
          {pageIndex === 1 && (
            <ReservationCalendar
              rangeDate={rangeDate}
              dateChangeHandler={dateChangeHandler}
            />
          )}

          {/* 인원 */}
          {pageIndex === 2 && (
            <ReservationDetails
              guestsInformation={guestsInformation}
              setGuestsInformation={setGuestsInformation}
            />
          )}

          {/* 이동 버튼 */}
          <Box
            width={"90%"}
            display={"flex"}
            position={"absolute"}
            bottom={"1rem"}
            justifyContent={"space-between"}
            sx={{ mb: "10px" }}>
            <Button
              onClick={() => {
                previousPage();
              }}
              sx={{ border: "1px solid #767676" }}>
              이전
            </Button>
            <Button
              onClick={() => {
                nextPage();
              }}
              sx={{ border: "1px solid #767676" }}>
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
