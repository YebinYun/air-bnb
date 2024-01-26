import { useRecoilState } from "recoil";
import * as userPageApi from "../../api/userPage";
import { useLoginDataState, userDataSelector } from "../auth/userData";

export type LikeHandlerPropType = {
  userId: string;
  hotelId: string;
  token: any;
};

export const useUserLikeHandler = () => {
  const [userData, setUserData] = useRecoilState(userDataSelector);
  const { token } = useLoginDataState();

  const handleOnClickLike = (userId: string, hotelId: string) => {
    if (!userId || !hotelId) return alert("Cannot continue");

    return userPageApi.likesApi({ userId, hotelId, token }).then((res) => {
      setUserData(res.data.data);
      const currentLocalStorageItem = token ? token : "";
      const copy = { ...currentLocalStorageItem };

      copy.likes = res.data.data.likes;

      typeof window !== undefined &&
        localStorage.setItem("token", JSON.stringify(copy));
    });
  };

  return { handleOnClickLike, userData };
};
