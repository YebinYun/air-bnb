import MainCardImgComponent from "@/components/main/MainCardImgComponent";
import MainCardTextComponent from "@/components/main/MainCardTextComponent";
import hotelDummyList from "@/utils/hotelDummyList.json";
import { Box, CircularProgress, Pagination } from "@mui/material";
import React, { Suspense, useState } from "react";

type props = {
  handleOnClickLike: (userId: string, hotelId: string) => void;
  data: any;
  hotelData: any;
};

const MainCardComponent = ({ handleOnClickLike, data, hotelData }: props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
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
              hotelName={value.name} //
              score={value?.review_scores?.review_scores_rating} //
              location={value.address.country} //
              price={value.price.$numberDecimal}
            />
          </Box>
        ))}
      </Box>
      <Pagination
        page={currentPage}
        onChange={onPageChange}
        sx={{ my: "5rem", display: "flex", justifyContent: "center" }}
        count={10}
        size="large"
      />
    </Suspense>
  );
};

export default MainCardComponent;
