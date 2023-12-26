import React from "react";
import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { bookingInformationAtomState } from "@/recoil/RecoilHotelList";
import useGetHotelLists from "@/api/getHotelList";
import MainCardComponent from "@/components/main/MainCardComponent";

const MainCardContainer = () => {
  const { fetchData, options, changeData } = useGetHotelLists();
  const [hotelList, setHotelList] = useRecoilState(bookingInformationAtomState);
  const { data, isLoading } = useQuery({
    queryKey: ["getHotelList"],
    queryFn: fetchData,
  });

  return <MainCardComponent data={data} isLoading={isLoading} />;
};

export default MainCardContainer;
