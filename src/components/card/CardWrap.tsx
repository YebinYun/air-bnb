import React from "react";
import Background from "@/layout/Background";
import CardImg from "./CardImg";
import CardText from "./CardText";
import { data } from "../../utils/dummy/location";
import Grid from "@mui/material/Unstable_Grid2";

const CardWrap = () => {
  return (
    <Background>
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
    </Background>
  );
};

export default CardWrap;
