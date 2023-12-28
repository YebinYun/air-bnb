import React from "react";
import { useQuery } from "@tanstack/react-query";
import useGetHotelList from "@/api/getHotelList";
import MainCardComponent from "@/components/main/MainCardComponent";

const MainCardContainer = () => {
  const { fetchData } = useGetHotelList();
  const { isLoading, data } = useQuery({
    queryKey: ["getHotelList"],
    queryFn: fetchData,
  });

  return <MainCardComponent data={data} isLoading={isLoading} />;
};

export default MainCardContainer;
