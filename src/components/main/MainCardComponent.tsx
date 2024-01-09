import MainCardImgComponent from "@/components/main/MainCardImgComponent";
import MainCardTextComponent from "@/components/main/MainCardTextComponent";
import hotelDummyList from "@/utils/hotelDummyList.json";
import { Box } from "@mui/material";
import React, { Suspense } from "react";

type props = {
  handleOnClickLike: (userId: string, hotelId: string) => void;
  data: any;
};

const MainCardComponent = ({ handleOnClickLike, data }: props) => {
  return (
    <Suspense fallback={<div>Loading......</div>}>
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
        {hotelDummyList?.map((value, index: React.Key) => (
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
              img={value?.photo_url}
              hotelID={value?.hotel_ID}
            />
            <MainCardTextComponent
              hotelName={value.hotel_name}
              score={value.review_score}
              location={value.city}
              day={value.review_score_word}
              price={value.min_total_price}
            />
          </Box>
        ))}
      </Box>
    </Suspense>
  );
};

export default MainCardComponent;
