import React, { Suspense, useState } from "react";
import axios from "axios";
import MainCardComponent from "@/components/main/MainCardComponent";

const MainCardContainer = () => {
  const [data, setData] = useState([]);
  const [hotelData, setHotelData] = useState([]);

  const getHotelList = async () => {
    await axios
      .get("http://localhost:8000/hotelList")
      .then((res) => {
        setHotelData(res?.data);
      })
      .catch((err) => {
        console.log("err===>", err);
      });
  };

  getHotelList();

  const handleOnClickLike = (userId: any, hotelId: any) => {
    if (!userId || !hotelId) alert("없어유..");
    const token = JSON.parse(localStorage.getItem("token") || "");
    const headers = {
      token: token.token,
    };

    const postLike = async () => {
      await axios
        .get(
          `http://localhost:8000/likes?userId=${userId}&hotelId=${hotelId}`,
          {
            headers,
          }
        )
        .then((res) => setData(res?.data.data));
    };

    return postLike();
  };
  return (
    <Suspense fallback={<div>loading...</div>}>
      <MainCardComponent
        handleOnClickLike={handleOnClickLike}
        data={data}
        hotelData={hotelData}
      />
    </Suspense>
  );
};

export default MainCardContainer;
