import React, { useEffect, useState } from "react";
import axios from "axios";
import MainCardComponent from "@/components/main/MainCardComponent";
import LoadingSpinner from "@/common/LoadingSpinner";
import { useAuthState } from "@/store/auth";
import { useSetRecoilState } from "recoil";
import { userDataSelector } from "@/store/auth/userdata";

const MainCardContainer = () => {
  const [hotelData, setHotelData] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { data, handleOnClickLike } = useAuthState();
  const getUserData = useSetRecoilState(userDataSelector);
  const handleChange = (e: any, page: any) => {
    setPage(page);
  };

  useEffect(() => {
    setIsLoading(true);
    getHotelList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
