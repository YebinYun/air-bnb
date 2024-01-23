import axios from "axios";
import { atom, selector, useRecoilState, useSetRecoilState } from "recoil";
import { userDataSelector } from "./userData";

const LoginAtomState = atom<boolean>({
  key: "loginState",
  default: false,
});

export const LoginStateSelector = selector({
  key: "LoginStateSelector",
  get: ({ get }) => get(LoginAtomState),
  set: ({ set }, newValue) => set(LoginAtomState, newValue),
});

export const useAuthState = () => {
  const [data, setData] = useRecoilState(LoginStateSelector);
  const tokenData = localStorage.getItem("token");
  const token = tokenData ? JSON.parse(tokenData) : "";
  const headers = {
    like: token.token,
  };
  const getUserData = useSetRecoilState(userDataSelector);

  const postLike = async (userId: any, hotelId: any) => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_IP_API_KEY}/likes?userId=${userId}&hotelId=${hotelId}`,
        {
          headers,
        }
      )
      .then((res) => getUserData(res?.data.data));
  };

  const handleOnClickLike = (userId: any, hotelId: any) => {
    if (!userId || !hotelId) alert("클릭할 수 없습니다.");

    return postLike(userId, hotelId);
  };

  return { data, handleOnClickLike };
};
