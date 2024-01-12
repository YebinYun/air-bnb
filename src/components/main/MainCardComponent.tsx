import MainCardImgComponent from "@/components/main/MainCardImgComponent";
import MainCardTextComponent from "@/components/main/MainCardTextComponent";
import hotelDummyList from "@/utils/hotelDummyList.json";
import { Box, CircularProgress, Pagination } from "@mui/material";
import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";

type props = {
  handleOnClickLike: (userId: string, hotelId: string) => void;
  data: any;
  hotelData: any;
};

const MainCardComponent = ({ handleOnClickLike, data, hotelData }: props) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const onPageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ): void => {
    setPage(value);
    console.log(value); // 현재 페이지 출력

    const limit = 10; // 화면에 보여줄 데이터 갯수
    const offset = (page - 1) * limit; // 데이터 시작점

    const queryString = `limit=${limit}&offset=${offset}`;

    navigate(`?${queryString}`);
  };

  return (
    <Suspense fallback={<CircularProgress />}>
      <Box
        sx={{
          padding: "2rem 5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
          rowGap: "2rem",
          columnGap: "2rem",
          cursor: "pointer",
        }}
      >
        {hotelData?.map((value: any, index: React.Key) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              border: "1px solid lightgray",
              borderRadius: "5px",
              rowGap: "4",
            }}
          >
            <MainCardImgComponent
              handleOnClickLike={handleOnClickLike}
              data={data}
              img={value?.images.picture_url}
              hotelID={value?._id}
            />
            <MainCardTextComponent
              hotelName={value.name}
              score={value?.review_scores?.review_scores_rating}
              location={value.address.country}
              price={value.price.$numberDecimal}
            />
          </Box>
        ))}
      </Box>
      <Pagination
        page={page}
        onChange={onPageChange}
        sx={{ my: "5rem", display: "flex", justifyContent: "center" }}
        size="large"
      />
    </Suspense>
  );
};

export default MainCardComponent;
