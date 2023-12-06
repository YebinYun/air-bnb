import React from "react";
import Background from "@/layout/Background";
import CardImg from "../../components/card/CardImg";
import CardText from "../../components/card/CardText";
import { data } from "../../utils/dummy/location";
import { Card, Box } from "@mui/material";
import styled from "@emotion/styled";

const CardWrap = () => {
  return (
    <Background>
      <MainContainer>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            padding: "2rem 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
            rowGap: "2rem",
            columnGap: "2rem",
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
      </MainContainer>
    </Background>
  );
};

export default CardWrap;

const MainContainer = styled(Card)`
  position: absolute;
  width: 90%;
  top: 17rem;
  overflow: visible;
`;
