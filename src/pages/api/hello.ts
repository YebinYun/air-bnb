import axios from "axios";
// import { request } from "http";

export default async function handler(req, res) {
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
      "X-RapidAPI-Key": "2f28c72b93msh6c1971733cd905ap1991cajsn7120b77e2368",
      "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
    },
  };
  //     const { body } = req
  //     const { params } = req

  //     if(body.uid) {
  //         아이디가 있으면, 비교해서 권한이 있는지 체크하고
  //         요청 자료를 검색

  //          axios.post(업체 api). then(res => {
  //             if(res.msg === "OK") {
  //                 res.status(200).send(res.data)
  //             } else {
  //                 res.status(400).send({message:'자료가 없어요.'})
  //             }
  //          })
  //     }

  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.text();
  //     if (result) {
  //       console.log("result", result);
  //       res.status(200).send(result);
  //     }

  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
}
