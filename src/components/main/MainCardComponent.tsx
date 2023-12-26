import MainCardImgContainer from "@/containers/main/MainCardImgContainer";
import MainCardTextContainer from "@/containers/main/MainCardTextContainer";
import { Box } from "@mui/material";
import React, { Suspense } from "react";

type props = {
  data: any;
  isLoading: any;
};

const MainCardComponent = ({ data, isLoading }: props) => {
  return (
    <Suspense fallback={<div>Loading......</div>}>
      {!isLoading && (
        <Box
          sx={{
            border: "1px solid red",
            padding: "2rem 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
            rowGap: "2rem",
            columnGap: "2rem",
            cursor: "pointer",
          }}
        >
          {data?.result?.map(
            (
              value: {
                max_photo_url: string;
                hotel_name: string;
                review_score: string;
                city: string;
                review_score_word: string;
                min_total_price: number;
              },
              index: React.Key
            ) => (
              <Box
                key={value.hotel_name + index}
                sx={{
                  width: "100%",
                  border: "1px solid lightgray",
                  borderRadius: "5px",
                  rowGap: "4",
                }}
              >
                <MainCardImgContainer img={value?.max_photo_url} />
                <MainCardTextContainer
                  hotelName={value.hotel_name}
                  score={value.review_score}
                  location={value.city}
                  day={value.review_score_word}
                  price={value.min_total_price}
                />
              </Box>
            )
          )}
        </Box>
      )}
    </Suspense>
  );
};

export default MainCardComponent;
