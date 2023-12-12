import React, { Suspense, useState, useEffect } from "react";
import CardImg from "../components/card/CardImg";
import CardText from "../components/card/CardText";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// const query = useQuery({ queryKey: [], queryFn: fetchData });

// Key는 []로
// Fn 함수는 get을 해야하므로 axios로 만든 함수르 사용
// option 기능에는 데이터가 있을때만 커리 요청하도록

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

const fetchData = ({ setData, hotelData, options }: any) => {
  axios
    .request(options)
    .then((res) => {
      if (res.status === 200) {
        return setData(res?.data);
      } else if (res.status === 429) {
        return alert("429 에러...");
      }
    })
    .catch((err) => window.alert("에러 발생"));

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
      {!isLoading ? (
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
      ) : (
        "Loading이요..."
      )}
    </Suspense>
  );
};

export default CardWrap;
