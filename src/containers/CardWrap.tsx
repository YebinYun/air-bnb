import React, { Suspense, useState, useEffect } from "react";
import CardImg from "../components/card/CardImg";
import CardText from "../components/card/CardText";
import { locationData } from "../utils/dummy/location";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates",
  params: {
    filter_by_currency: "AED",
    locale: "en-gb",
    room_number: "1",
    checkin_date: "2024-01-18",
    checkout_date: "2024-01-20",
    longitude: "126.9203894",
    adults_number: "2",
    latitude: "37.5533232",
    order_by: "popularity",
    units: "metric",
    categories_filter_ids: "class::2,class::4,free_cancellation::1",
    include_adjacency: "true",
    page_number: "0",
    children_number: "2",
    children_ages: "5,0",
  },
  headers: {
    "X-RapidAPI-Key": "d2b478c8b7msh712b669c816fac1p19b693jsn306c854564e9",
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
};

const CardWrap = () => {
  const [data, setData] = useState("");

  // useEffect(() => {
  //   const fetchData = () => {
  //     axios
  //       .get("/api/hello")
  //       .then((res) => {
  //         console.log("res", res);
  //         setData(res.data);
  //       })
  //       .catch((err) => console.log("err===========>", err));
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = () => {
      axios
        .request(options)
        .then((res) => setData(res?.data))
        .catch((err) => console.log("err===========>", err));
    };
    if (!data) {
      fetchData();
    }
  }, []);

  console.log("data", data);
  // try {
  //   const response = axios.request(options).then((res) => setData(res?.data));
  // } catch (error) {
  //   console.error(error);
  // }

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
        {data?.result?.map((value, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              border: "1px solid lightgray",
              borderRadius: "5px",
              rowGap: "4",
            }}
          >
            <CardImg img={value?.max_photo_url} />
            <CardText
              location={value.address}
              score={value.score}
              view={value.review_score}
              day={value.day}
              price={value.min_total_price}
            />
          </Box>
        ))}
      </Box>
    </Suspense>
  );
};

export default CardWrap;
