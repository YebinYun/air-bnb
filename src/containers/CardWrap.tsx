import React from "react";
import Background from "@/layout/Background";
import CardImg from "../components/card/CardImg";
import CardText from "../components/card/CardText";
import { data } from "../utils/dummy/location";
import { Box } from "@mui/material";

const CardWrap = () => {
  return (
    <Background>
      <Box
        sx={{
          width: "100%",
          padding: "2rem 0",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
          rowGap: "2rem",
          columnGap: "2rem",
          cursor: "pointer",
        }}
      >
        {data.map((value, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              border: "1px solid lightgray",
              borderRadius: "5px",
              rowGap: "4",
            }}
          >
            <CardImg img={value.img} />
            <CardText
              location={value.location}
              score={value.score}
              view={value.view}
              day={value.day}
              price={value.price}
            />
          </Box>
        ))}
      </Box>
    </Background>
  );
};

export default CardWrap;
