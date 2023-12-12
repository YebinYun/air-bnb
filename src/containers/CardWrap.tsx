import React, { Suspense, useEffect } from "react";
import CardImg from "../components/card/CardImg";
import CardText from "../components/card/CardText";
import { data } from "../utils/dummy/location";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const options = {
  method: "POST",
  url: "https://hotels4.p.rapidapi.com/properties/v2/detail",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "2f28c72b93msh6c1971733cd905ap1991cajsn7120b77e2368",
    "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
  },
  data: {
    currency: "USD",
    eapid: 1,
    locale: "en_US",
    siteId: 300000001,
    propertyId: "9209612",
  },
};

const CardWrap = () => {
  return (
    <Suspense fallback={<div>Loading......</div>}>
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
    </Suspense>
  );
};

export default CardWrap;
