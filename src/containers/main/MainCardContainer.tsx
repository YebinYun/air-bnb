import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import MainCardComponent from "@/components/main/MainCardComponent";
import usePagination from "../../hooks/usePagination";
import Image from "next/image";
import Loading from "/images/loading.gif";
import LoadingSpinner from "@/common/LoadingSpinner";

const MainCardContainer = () => {
  const [data, setData] = useState([]);
  const [hotelData, setHotelData] = useState<any>([]);
  const [page, setPage] = useState(1);
  // const PER_PAGE = 100;
  const [isLoading, setIsLoading] = useState(false);

  // const count = Math.ceil(hotelData?.length / PER_PAGE);
  // const _DATA = usePagination(hotelData, PER_PAGE);

  const handleChange = (e: any, page: any) => {
    setPage(page);
    // _DATA.jump(page);
  };
  console.log(typeof page);

  useEffect(() => {
    setIsLoading(true);
    getHotelList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getHotelList = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_IP_API_KEY}/hotelList?page=${page}`)

      // `${process.env.NEXT_PUBLIC_IP_API_KEY}/hotelList?currentPage=${currentPage}&total=${total}`
      .then((res) => {
        setHotelData(res?.data);
      })
      .catch((err) => {
        console.log("err===>", err);
      });
    return setIsLoading(false);
  };
  console.log(hotelData);

  const handleOnClickLike = (userId: any, hotelId: any) => {
    if (!userId || !hotelId) alert("없어유..");
    const token = JSON.parse(localStorage.getItem("token") || "");
    const headers = {
      token: token.token,
    };

    const postLike = async () => {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_IP_API_KEY}/likes?userId=${userId}&hotelId=${hotelId}`,
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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <MainCardComponent
          handleOnClickLike={handleOnClickLike}
          data={data}
          _DATA={hotelData.post}
          count={hotelData?.totalPage}
          page={hotelData?.currentPage}
          handleChange={handleChange}
        />
      )}
    </>
  );
};

export default MainCardContainer;
