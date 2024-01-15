import React, { Suspense, useState } from "react";
import axios from "axios";
import MainCardComponent from "@/components/main/MainCardComponent";
import usePagination from "@/hooks/usePagination";

const MainCardContainer = () => {
  const [data, setData] = useState([]);
  const [hotelData, setHotelData] = useState([]);
  const [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(hotelData.length / PER_PAGE);
  const _DATA = usePagination(hotelData, PER_PAGE);

  const handleChange = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
  };

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
    <>
      <MainCardComponent
        handleOnClickLike={handleOnClickLike}
        data={data}
        _DATA={_DATA}
        count={count}
        page={page}
        handleChange={handleChange}
      />
    </>
  );
};

export default MainCardContainer;
