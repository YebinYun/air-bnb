import axios, { AxiosRequestConfig } from "axios";
import { format } from "date-fns";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { bookingInformationSelector } from "./getHotelListQuery";

type GetOptions = {
  checkin: string;
  checkout: string;
  guests: string;
  child: string;
};

type UseGetHotelListResult = {
  fetchData: () => Promise<any>;
  options: AxiosRequestConfig;
  changeData: (data: GetOptions) => void;
};

const initialOptions: AxiosRequestConfig = {
  method: "GET",
  url: "https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates",
  params: {
    filter_by_currency: "AED",
    locale: "en-gb",
    room_number: "1",
    checkin_date: "2024-01-18",
    checkout_date: "2024-01-20",
    longitude: "126.9203894",
    adults_number: "2",
    latitude: "37.5533232",
    order_by: "popularity",
    units: "metric",
    categories_filter_ids: "class::2,class::4,free_cancellation::1",
    include_adjacency: "true",
    page_number: "0",
    children_number: "2",
    children_ages: "5,0",
  },
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
};

const useGetHotelLists = (): UseGetHotelListResult => {
  const [options, setOptions] = useState<AxiosRequestConfig>(initialOptions);
  const value = useRecoilValue(bookingInformationSelector);
  const [listData, setlistData] = useState();

  const changeData = (checkin, checkout, guests, child, lat, lng) => {
    const params = {
      ...options.params,
      checkin_date: format(checkin, "yyyy-MM-dd"),
      checkout_date: format(checkout, "yyyy-MM-dd"),
      adults_number: guests,
      children_number: child,
      latitude: lat,
      longitude: lng,
    };

    const newData = { ...options };
    newData.params = params;

    return newData;
  };

  const fetchData = async () => {
    changeData(
      value.checkin_date,
      value.checkout_date,
      value.adults_number,
      value.children_number,
      value.lat,
      value.lng
    );

    try {
      const response = await axios.request(
        changeData(
          value.checkin_date,
          value.checkout_date,
          value.adults_number,
          value.children_number,
          value.lat,
          value.lng
        )
      );

      return response.data;
    } catch (error) {
      console.error(error);
      console.log("Error");
      throw error;
    }
  };

  return { fetchData, options, changeData, listData };
};

export default useGetHotelLists;
