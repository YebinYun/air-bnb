import { useRecoilState } from "recoil";
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

    return userPageApi.likesApi({ userId, hotelId }).then((res) => {
      setUserData(res.data.data);

      const currentLocalStorage =
        typeof window !== undefined && localStorage.getItem("token");
      const currentLocalStorageItem = currentLocalStorage
        ? JSON.parse(currentLocalStorage)
        : "";
      const copy = { ...currentLocalStorageItem };

      copy.likes = res.data.data.likes;

      typeof window !== undefined &&
        localStorage.setItem("token", JSON.stringify(copy));
    });
  };

  return { handleOnClickLike, userData };
};
