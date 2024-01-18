import React, { useEffect, useState } from "react";
import axios from "axios";
import MainCardComponent from "@/components/main/MainCardComponent";
import LoadingSpinner from "@/common/LoadingSpinner";

const MainCardContainer = () => {
  const [data, setData] = useState([]);
  const [hotelData, setHotelData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

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
        console.log("err===>", err);
      });
    return setIsLoading(false);
  };

  const handleOnClickLike = (userId: any, hotelId: any) => {
    if (!userId || !hotelId) alert("없어유..");

    const token = localStorage.getItem("token");
    const like = token ? JSON.parse(token) : "";
    const headers = {
      like: like.token,
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
          post={hotelData.post}
          count={hotelData?.totalPage}
          page={hotelData?.currentPage}
          handleChange={handleChange}
        />
      )}
    </>
  );
};

export default MainCardContainer;
