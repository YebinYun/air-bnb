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
            width: "15rem",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            columnGap: "1rem",
            rowGap: "2rem",
          }}
        >
          {data.map((value, index) => (
            <Box
              key={index}
              sx={{
                border: "1px solid lightgray",
                borderRadius: "5px",
                margin: "0.5rem",
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
