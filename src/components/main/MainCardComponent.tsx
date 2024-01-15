import MainCardImgComponent from "@/components/main/MainCardImgComponent";
import MainCardTextComponent from "@/components/main/MainCardTextComponent";
import { Box, CircularProgress, Pagination } from "@mui/material";
import React, { Suspense } from "react";

type props = {
  handleOnClickLike: (userId: string, hotelId: string) => void;
  data: any;
  _DATA: any;
  count: any;
  page: any;
  handleChange: any;
};

const MainCardComponent = ({
  handleOnClickLike,
  data,
  _DATA,
  count,
  page,
  handleChange,
}: props) => {
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
