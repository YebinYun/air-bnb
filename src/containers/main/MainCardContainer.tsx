import React from "react";
import { useQuery } from "@tanstack/react-query";
import useGetHotelList from "@/api/getHotelList";
import MainCardComponent from "@/components/main/MainCardComponent";

const MainCardContainer = () => {
  const { fetchData, options, changeData } = useGetHotelList();
  const { isLoading, data } = useQuery({
    queryKey: ["getHotelList"],
    queryFn: fetchData,
  });

  console.log("@@options@@ ----->", options);
  console.log("@@changeData@@ ----->", changeData);
  console.log("@@data@@ ----->", data);
  console.log("@@isLoading@@ ----->", isLoading);

  return <MainCardComponent data={data} isLoading={isLoading} />;
};

export default MainCardContainer;
