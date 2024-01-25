import { Box, Divider } from "@mui/material";
import React from "react";
import { BlockLayout } from "./HostInfoComponent";
import { format } from "date-fns";

const HotelReviewComponent = ({ data }: any) => {
  console.log(data?.reviews);

  return (
    <BlockLayout
      sx={{
        mt: "1rem",
        display: "flex",
        flexDirection: "column",
        height: "50vh",
      }}
    >
      <Box sx={{ my: "1rem", display: "flex", alignItems: "center" }}>
        <Box sx={{ fontSize: "1.2rem", fontWeight: "bold", mx: "2.5rem" }}>
          REVIEW SCORE
        </Box>
        <Box
          sx={{
            mb: "1rem",
            fontSize: "1rem",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ flex: "1 1 40%", pt: "0.5rem" }}>{`cleanliness : ${
            data?.review_scores?.review_scores_cleanliness === undefined
              ? "-"
              : data?.review_scores?.review_scores_cleanliness
          } / 10`}</Box>
          <Box sx={{ flex: "1 1 40%", pt: "0.5rem" }}>{`communication: ${
            data?.review_scores?.review_scores_communication === undefined
              ? "-"
              : data?.review_scores?.review_scores_communication
          } / 10`}</Box>
          <Box sx={{ flex: "1 1 40%", pt: "0.5rem" }}>{`location : ${
            data?.review_scores?.review_scores_location === undefined
              ? "-"
              : data?.review_scores?.review_scores_location
          } / 10`}</Box>
          <Box sx={{ flex: "1 1 40%", pt: "0.5rem" }}>{`rating : ${
            data?.review_scores?.review_scores_rating === undefined
              ? "-"
              : data?.review_scores?.review_scores_rating
          } / 100`}</Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "90%",
          overflowY: "auto",
          height: "40vh",
          background: "white",
          p: "1rem",
          borderRadius: "10px",
        }}
      >
        {data.reviews.length === 0 ? (
          <Box
            sx={{
              display: "flex",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            No Reviews
          </Box>
        ) : (
          data?.reviews
            .map((review: any, idx: number) => (
              <Box key={idx}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                    my: "1rem",
                  }}
                >
                  <Box>{review.comments}</Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      mt: "1rem",
                    }}
                  >
                    <Box sx={{ mr: "1rem" }}>{review.reviewer_name}</Box>
                    <Box>{format(review.date, "yyyy.MM.dd")}</Box>
                  </Box>

                  <Divider
                    sx={{
                      width: "100%",
                      borderTop: "1px solid lightgray",
                      my: "1rem",
                    }}
                  />
                </Box>
              </Box>
            ))
            .reverse()
        )}
      </Box>
    </BlockLayout>
  );
};

export default HotelReviewComponent;
