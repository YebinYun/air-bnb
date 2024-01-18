import axios from "axios";

const HOTEL_API = {
  likes: `${process.env.NEXT_PUBLIC_IP_API_KEY}/likes`,
};

export const likesApi = (params: any, headers: any) => {
  // const { userId, hotelId } = params
  // return axios.get(`${HOTEL_API.likes}?userId=${userId}&hotelId=${hotelId}`);
  return axios.get(HOTEL_API.likes, { params }, { headers });
};
