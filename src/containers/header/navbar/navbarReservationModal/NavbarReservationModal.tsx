import React, { useState } from "react";
import { Box, Button, Divider, colors, styled } from "@mui/material";
import "react-calendar/dist/Calendar.css";
import ReservationCalendar from "./ReservationCalendar";

interface props {
  onNavInfoModal: boolean;
  loginModalHandler: () => void;
}

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
  min-width: 650px;
  min-height: 800px;
  border: 1px solid lightgray;
  border-radius: 50px;
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

const CompleteBox = styled(Box)`
  border-radius: 50%;
  padding: 5px;
  background: white;
  /* background: #ff5a5f; */
  border: 1px solid black;
`;

const reservationInfoInit = {
  guests: 0, // 성인
  child: 0, // 소아 인원
  rooms: 0, // 예약 객실 갯수
  // 나중에는 좌표를 지도에서 찍어서, 인원과 객실갯수 기준으로 좌표상의 호텔노출
  //
  //
};

const NavbarReservationModal = ({
  onNavInfoModal,
  loginModalHandler,
}: props) => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  // const [startDate, setStartDate] = useState<Value>(new Date());
  const [startDate, setStartDate] = useState<Value>(null);
  const [endDate, setEndDate] = useState<Value>(null);

  const [rangeDate, setRangeDate] = useState<Value>(null);
  const [progress, setProgress] = useState<number>(1);

  const dateChangeHandler = (e: any) => {
    setRangeDate(e);
    setStartDate(e[0].getDate());
    setEndDate(e[1].getDate());
  };

  return (
    <NavInfoModalBackground>
      <NavInfoModalContainer>
        <Box
          sx={{
            width: "100%",
            // border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            fontSize: "1.5rem",
            fontWeight: "bold",
            my: "2rem",
          }}
        >
          <Box> 예약하기</Box>
          {/* 닫기버튼 */}
          <Box
            position={"absolute"}
            top={"10px"}
            right={"25px"}
            color={"black"}
            fontWeight={"bold"}
            fontSize={"1.5rem"}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              loginModalHandler();
            }}
          >
            &#9421;
          </Box>
        </Box>
        <Divider />
        {/* 완료 안내 */}
        <Box position={"relative"} sx={{ marginTop: "2.5rem" }}>
          <Divider
            sx={{
              position: "absolute",
              top: "0",
              width: "100%",
              border: "2px solid #00A699",
              borderRadius: "50px",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              justifyContent: "space-between",
              padding: "0 4.5rem",
              top: "-4px",
              width: "100%",
            }}
          >
            <CompleteBox />
            <CompleteBox />
            <CompleteBox />
          </Box>
        </Box>

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
                <Box color={"#fefefe"} fontWeight={"bold"}>
                  여행지
                </Box>
                <Box color={"black"}>여행지 검색</Box>
              </Button>

              <Button sx={{ flexDirection: "column" }}>
                <Box color={"#fefefe"} fontWeight={"bold"}>
                  날짜
                </Box>
                <Box color={"black"} onChange={dateChangeHandler}>
                  {rangeDate === null
                    ? "날짜 추가"
                    : rangeDate[0].getDate() +
                      "일 ~ " +
                      rangeDate[1].getDate() +
                      "일"}
                </Box>
              </Button>

              <Button sx={{ flexDirection: "column" }}>
                <Box color={"#fefefe"} fontWeight={"bold"}>
                  여행자
                </Box>
                <Box color={"black"}>게스트 추가</Box>
              </Button>
            </SelectMenubar>
          </Box>

          {/* 캘린더 */}
          {progress === 1 && (
            <ReservationCalendar
              rangeDate={rangeDate}
              dateChangeHandler={dateChangeHandler}
            />
          )}
          {/* 이동 버튼 */}
          <Box
            width={"90%"}
            display={"flex"}
            position={"absolute"}
            bottom={"0"}
            justifyContent={"space-between"}
            sx={{ mb: "10px" }}
          >
            <Button sx={{ border: "1px solid #767676" }}>이전</Button>
            <Button sx={{ border: "1px solid #767676" }}>
              {progress === 2 ? "완료" : "다음"}
            </Button>
          </Box>
        </Box>
      </NavInfoModalContainer>
    </NavInfoModalBackground>
  );
};

export default NavbarReservationModal;
