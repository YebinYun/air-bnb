import React, { Suspense, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useGetHotelList from "@/api/getHotelList";
import MainCardComponent from "@/components/main/MainCardComponent";
import axios from "axios";
import HeartPracticeContainer from "./HeartPracticeContainer";

const MainCardContainer = () => {
  const [data, setData] = useState([]);

  const handleOnClickLike = (userId: any, hotelId: any) => {
    if (!userId || !hotelId) alert("없어유..");

    const postLike = async () => {
      await axios
        .get(`http://localhost:8000/likes?userId=${userId}&hotelId=${hotelId}`)
        .then((res) => setData(res?.data.data));
    };

    return postLike();
  };

  console.log("data@@@@@@@", data);

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
    <Suspense>
      <MainCardComponent handleOnClickLike={handleOnClickLike} data={data} />
    </Suspense>
  );
};

export default MainCardContainer;
