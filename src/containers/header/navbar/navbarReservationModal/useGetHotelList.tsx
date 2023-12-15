import { useState } from "react"
import axios from "axios";

const options = {
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

  const fetchData = async ({ setData, hotelData, options }: any) => {
    await axios
      .request(options)
      .then((res) => {
        return setData(res?.data);
      })
      .catch((err) => console.log(err));
    return hotelData;
  };


const useGetHotelList = ({  }) => {
    const [ data, setdata ] = useState(options)
    // const [ ] = useState()


    const changeData = ( {prev} ) => {
        const numberPeople= 
        setdata({
            ...prev,
            bookingData
        })
    }}

    
    
    // option 데이터 기존에거 가져와서 useState에 기본값으로 넣기

    // booking option data로 가져온 데이터 ( guests, child, rooms) 를 option의 기본 데이터와 교체
    // useQuery 로 자료를 불러오기

    // 하단에 return 값으로 useQuery 로 가져온걸 내보냄.


  return {  fetchData, options }
}

export default useGetHotelList