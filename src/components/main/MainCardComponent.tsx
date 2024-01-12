import MainCardImgComponent from "@/components/main/MainCardImgComponent";
import MainCardTextComponent from "@/components/main/MainCardTextComponent";
import hotelDummyList from "@/utils/hotelDummyList.json";
import { Box, Pagination } from "@mui/material";
import React, { Suspense } from "react";

type props = {
  handleOnClickLike: (userId: string, hotelId: string) => void;
  data: any;
  hotelData: any;
};

const MainCardComponent = ({ handleOnClickLike, data, hotelData }: props) => {
  return (
    <Suspense fallback={<div>Loading......</div>}>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
        <Pagination count={10} />
      </Box>
    </Suspense>
  );
};

export default MainCardComponent;
