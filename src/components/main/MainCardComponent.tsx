import MainCardImgComponent from "@/components/main/MainCardImgComponent";
import MainCardTextComponent from "@/components/main/MainCardTextComponent";
import { Box, Pagination } from "@mui/material";
import React from "react";

type props = {
  handleOnClickLike: (userId: string, hotelId: string) => void;
  data: any;
  post: any;
  count: any;
  page: any;
  handleChange: any;
};

const MainCardComponent = ({
  handleOnClickLike,
  data,
  post,
  count,
  page,
  handleChange,
}: props) => {
  console.log("post=====>", post);

  return (
    <>
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
        {post?.map((value: any, index: React.Key) => (
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
    </>
  );
};

export default MainCardComponent;
