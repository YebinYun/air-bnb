"use client";
import { LikeHandlerPropType } from "@/store/userPage/hoteLikes";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_IP_API_KEY;

const USERPAGE_API = {
  likes: `${BASE_URL}/likes`,
  login: `${BASE_URL}/login`,
};

export const likesApi = ({ userId, hotelId, token }: LikeHandlerPropType) => {
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
