import { LikeHandlerPropType } from "@/store/userPage";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_IP_API_KEY;

const USERPAGE_API = {
  likes: `${BASE_URL}/likes`,
  login: `${BASE_URL}/login`,
};
const tokenData =
  typeof window !== "undefined" ? localStorage.getItem("token") : undefined;
const token = tokenData ? JSON.parse(tokenData) : "";

export const likesApi = ({ userId, hotelId }: LikeHandlerPropType) => {
  console.log(token);
  return axios.get(
    `${USERPAGE_API.likes}?userId=${userId}&hotelId=${hotelId}`,
    {
      headers: {
        token: token.token,
      },
    }
  );
};

export const loginApi = (data: LikeHandlerPropType) => {
  return axios.post(`${USERPAGE_API.login}`, data);
};
