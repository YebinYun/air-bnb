import React, { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import useGetHotelList from "@/api/getHotelList";
import MainCardComponent from "@/components/main/MainCardComponent";

const MainCardContainer = () => {
  const { fetchData } = useGetHotelList();
  const { isLoading, data } = useQuery({
    queryKey: ["getHotelList"],
    queryFn: async () => {
      return await fetchData();
    },
  });

  console.log("data", data);

  return (
    <Suspense fallback={<div>Loading..???</div>}>
      {!isLoading ? (
        <MainCardComponent key={data} data={data} isLoading={isLoading} />
      ) : (
        <div>Loading...!!</div>
      )}
    </Suspense>
  );
};

export default MainCardContainer;
