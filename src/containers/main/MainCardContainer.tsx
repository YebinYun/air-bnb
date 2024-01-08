import React, { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import useGetHotelList from "@/api/getHotelList";
import MainCardComponent from "@/components/main/MainCardComponent";
import axios from "axios";
import HeartPracticeContainer from "./HeartPracticeContainer";

const MainCardContainer = ({ userId, hotelId }: any) => {
  const handleOnClickLike = () => {
    if (!userId || !hotelId) return alert("없어유..");

    const postLike = async () => {
      await axios
        .get(`localhost:8000/likes?userId=${userId}?hotelId=${hotelId}`)
        .then((res) => console.log(res));
    };

    return postLike();
  };

  // const { fetchData } = useGetHotelList();
  // // const { modalTrigger } = useModal()
  // const { isLoading, data } = useQuery({
  //   queryKey: ["getHotelList"],
  //   queryFn: async () => {
  //     return await fetchData();
  //   },
  // });

  // const postData = async () => {
  //   await axios.post("http://localhost:8000/user").then((res) => {
  //     if (res.data.resultCode !== 200) {
  //       return modalTrigger(res.data.message);
  //     }
  //   });
  // };

  return (
    // <Suspense fallback={<div>Loading..???</div>}>
    //   {!isLoading ? (
    //     <MainCardComponent key={data} data={data} isLoading={isLoading} />
    //   ) : (
    //     <div>Loading...!!</div>
    //   )}
    <HeartPracticeContainer handleOnClickLike={handleOnClickLike} />
    // </Suspense/>
  );
};

export default MainCardContainer;
