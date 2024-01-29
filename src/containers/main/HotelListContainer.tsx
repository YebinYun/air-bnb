"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HotelListComponent from "@/components/main/HotelListComponent";
import LoadingSpinner from "@/common/LoadingSpinner";
import { useUserLikeHandler } from "@/store/userPage/hoteLikes";

const HotelListContainer = () => {
  const [hotelData, setHotelData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { userData, handleOnClickLike } = useUserLikeHandler();

  const handleChange = (e: any, page: any) => {
    setPage(page);
  };

  useEffect(() => {
    setIsLoading(true);
    getHotelList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getHotelList = async () => {
    await axios
      .get(`${process.env.NEXT_PUBLIC_IP_API_KEY}/hotelList?page=${page}`)

      .then((res) => {
        setHotelData(res?.data);
      })
      .catch((err) => {
        throw new Error("Error==>", err);
      });
    return setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <HotelListComponent
          key={userData.token}
          handleOnClickLike={handleOnClickLike}
          post={hotelData.post}
          count={hotelData?.totalPage}
          page={hotelData?.currentPage}
          handleChange={handleChange}
          userData={userData}
        />
      )}
    </>
  );
};

export default HotelListContainer;
