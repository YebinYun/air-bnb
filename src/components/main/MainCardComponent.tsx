import MainCardImgComponent from "@/components/main/MainCardImgComponent";
import MainCardTextComponent from "@/components/main/MainCardTextComponent";
import usePagination from "@/utils/Pagination";
import { Box, CircularProgress, Pagination } from "@mui/material";
import React, { Suspense, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type props = {
  handleOnClickLike: (userId: string, hotelId: string) => void;
  data: any;
  hotelData: any;
};

const MainCardComponent = ({ handleOnClickLike, data, hotelData }: props) => {
  let [page, setPage] = useState(1);
  const PER_PAGE = 24;

  const count = Math.ceil(hotelData.length / PER_PAGE);
  const _DATA = usePagination(hotelData, PER_PAGE);

  const handleChange = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
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
        {_DATA.currentData().map((value: any, index: React.Key) => (
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
        count={count}
        page={page}
        onChange={handleChange}
        sx={{ my: "5rem", display: "flex", justifyContent: "center" }}
        size="large"
      />
    </Suspense>
  );
};

export default MainCardComponent;
