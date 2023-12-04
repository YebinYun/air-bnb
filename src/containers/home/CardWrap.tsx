import React from "react";
import Background from "@/layout/Background";
import CardImg from "../../components/card/CardImg";
import CardText from "../../components/card/CardText";
import { data } from "../../utils/dummy/location";
import Grid from "@mui/material/Unstable_Grid2";
import { Card } from "@mui/material";
import styled from "@emotion/styled";

const CardWrap = () => {
  return (
    <Background>
      <MainContainer>
        <Grid
          justifyContent={"space-between"}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 8 }}
        >
          {data.map((value, index) => (
            <Grid key={index}>
              <CardImg img={value.img} />
              <CardText
                location={value.location}
                score={value.score}
                view={value.view}
                day={value.day}
                price={value.price}
              />
            </Grid>
          ))}
        </Grid>
      </MainContainer>
    </Background>
  );
};

export default CardWrap;

const MainContainer = styled(Card)`
  position: absolute;
  width: 90%;
  height: 100vh;
  top: 17rem;
  overflow: visible;
`;
