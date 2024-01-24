import { Box } from "@mui/material";
import React from "react";
import { BlockLayout } from "./HostInfoComponent";

const HotelReviewComponent = ({ data }: any) => {
  console.log(data?.reviews);

  const review = data?.reviews.map((reviewData: any) => {
    reviewData;
  });

  return (
    <Box>
      <BlockLayout
        sx={{ mt: "1rem", display: "flex", flexDirection: "column" }}
      >
        <Box>REVIEW SCORE</Box>
        <Box sx={{ my: "1rem" }}>
          {/* <Box>{`accuracy : ${data?.review_scores?.review_scores_accuracy} / 10`}</Box>
          <Box>{`checkin : ${data?.review_scores?.review_scores_checkin} / 10`}</Box> */}
          <Box>{`cleanliness : ${data?.review_scores?.review_scores_cleanliness} / 10`}</Box>
          <Box>{`communication: ${data?.review_scores?.review_scores_communication} / 10`}</Box>
          <Box>{`location : ${data?.review_scores?.review_scores_location} / 10`}</Box>
          {/* <Box>{`value: ${data?.review_scores?.review_scores_value} / 10`}</Box> */}
          <Box>{`rating : ${data?.review_scores?.review_scores_rating} / 100`}</Box>
        </Box>
        <Box>{review}</Box>
      </BlockLayout>
    </Box>
  );
};

export default HotelReviewComponent;
