import React, { Suspense, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import useGetHotelList from "./header/navbar/navbarReservationModal/useGetHotelList";
import { useRecoilState } from "recoil";
import { testAtomSelector } from "@/store";
import { getHotelListQuery } from "@/store/useGetHotelStore";

const CardWrap = () => {
  const { fetchData, options, changeDate } = useGetHotelList();
  const [test, setTest] = useRecoilState(testAtomSelector);
  const [hotelList, setHotelList] = useRecoilState(getHotelListQuery);

  // 다른데 가서  const testValue = useRecoilValue(testAtomSelector)

  // useEffect(() => {
  //   changeDate({ checkin: "2024 - 02 - 01", checkout: "2024-02-05" });
  //   fetchData();
  // }, []);

  const { data, isLoading } = useQuery({
    queryKey: ["getHotelList"],
    queryFn: fetchData,
  });

  // useEffect(() => {
  //   const watchId = navigator.geolocation.watchPosition((position) => {
  //     const { latitude, longitude } = position.coords;
  //     // Show a map centered at latitude / longitude.
  //     console.log("latitude", position.coords);
  //   });
  // }, []);

  console.log("hotelList", hotelList);

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
          <input
            value={hotelList?.checkin_date}
            name="checkin_date"
            onChange={(e) =>
              setHotelList({ ...hotelList, [e.target.name]: e.target.value })
            }
          />
          <input
            value={hotelList?.checkout_date}
            name="checkout_date"
            onChange={(e) =>
              setHotelList({ ...hotelList, [e.target.name]: e.target.value })
            }
          />
          {/* {data?.result?.map(
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
          )} */}
        </Box>
      )}
    </Suspense>
  );
};

export default CardWrap;
