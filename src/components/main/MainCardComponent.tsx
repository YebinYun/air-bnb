import MainCardImgContainer from "@/containers/main/MainCardImgContainer";
import MainCardTextContainer from "@/containers/main/MainCardTextContainer";
import hotelDummyList from "@/utils/hotelDummyList.json";
import { Box } from "@mui/material";
import React, { Suspense } from "react";

type props = {
  isLoading: any;
  handleOnClickLike: any;
  userId: any;
  hotelId: any;
};

const MainCardComponent = ({
  isLoading,
  handleOnClickLike,
  userId,
  hotelId,
}: props) => {
  console.log(userId);
  console.log(hotelId);

  return (
    <Suspense fallback={<div>Loading......</div>}>
      {!isLoading && (
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
              <MainCardImgContainer
                handleOnClickLike={handleOnClickLike}
                img={value?.photo_url}
                hotelID={value?.hotel_ID}
              />
              {/* <MainCardTextContainer
                  hotelName={value.hotel_name}
                  score={value.review_score}
                  location={value.city}
                  day={value.review_score_word}
                  price={value.min_total_price}
                /> 
              <MainCardTextContainer /> */}
            </Box>
          ))}
        </Box>
      )}
    </Suspense>
  );
};

export default MainCardComponent;
