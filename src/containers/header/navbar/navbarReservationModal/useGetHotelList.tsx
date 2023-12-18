import { useState } from "react";

const useGetHotelList = () => {
  const initialOptions = {
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

  const [options, setOptions] = useState(initialOptions);

  const changeDate = ({ checkin, checkout, guests, child }) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      params: {
        ...prevOptions.params,
        checkin_date: checkin,
        checkout_date: checkout,
        adults_number: guests,
        children_number: child,
      },
    }));
  };

  const fetchData = async () => {
    // try {
    //   const response = await axios.request(options);
    //   return response.data;
    // } catch (error) {
    //   console.error(error);
    //   console.log("Error");
    // }
  };

  return { fetchData, options, changeDate };
};

export default useGetHotelList;
