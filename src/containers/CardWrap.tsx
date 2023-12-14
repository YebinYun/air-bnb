import React, { Suspense, useState } from "react";
import CardImg from "../components/card/CardImg";
import CardText from "../components/card/CardText";
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
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
};

const fetchData = async ({ setData, hotelData, options }: any) => {
  await axios
    .request(options)
    .then((res) => {
      return setData(res?.data);
    })
    .catch((err) => console.log(err));
  return hotelData;
};

const CardWrap = () => {
  const [hotelData, setData] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["getHotelList"],
    queryFn: () => {
      return fetchData({ setData, hotelData, options });
    },
  });

  return (
    <Suspense fallback={<div>Loading......</div>}>
      {!isLoading && (
        <Box
          sx={{
            width: "90%",
            padding: "2rem 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
            rowGap: "2rem",
            columnGap: "2rem",
            cursor: "pointer",
            position: "absolute",
            top: "10rem",
          }}
        >
          {data?.result?.map(
            (
              value: {
                max_photo_url: string;
                hotel_name: string;
                review_score: string;
                city: string;
                review_score_word: string;
                min_total_price: number;
              },
              index: React.Key
            ) => (
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
                  hotelName={value.hotel_name}
                  score={value.review_score}
                  location={value.city}
                  day={value.review_score_word}
                  price={value.min_total_price}
                />
              </Box>
            )
          )}
        </Box>
      )}
    </Suspense>
  );
};

export default CardWrap;
