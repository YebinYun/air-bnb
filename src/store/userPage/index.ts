import { useRecoilState, useSetRecoilState } from "recoil";
import * as userPageApi from "../../api/userPage";
import { userDataSelector } from "../auth/userData";

export type LikeHandlerPropType = {
  userId: string;
  hotelId: string;
};

export const useUserLikeHandler = () => {
  const [userData, setUserData] = useRecoilState(userDataSelector);
  const handleOnClickLike = (userId: string, hotelId: string) => {
    if (!userId || !hotelId) return alert("Cannot continue");
    return userPageApi
      .likesApi({ userId, hotelId })
      .then((res) => setUserData(res.data.data));
  };

  return { handleOnClickLike, userData };
};
