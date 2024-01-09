import React, { Suspense, useState } from "react";
import axios from "axios";
import MainCardComponent from "@/components/main/MainCardComponent";

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
  return (
    <Suspense fallback={<div>loading...</div>}>
      <MainCardComponent handleOnClickLike={handleOnClickLike} data={data} />
    </Suspense>
  );
};

export default MainCardContainer;
