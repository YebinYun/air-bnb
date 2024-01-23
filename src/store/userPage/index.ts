import * as userPageApi from "../../api/userPage";

export type LikeHandlerPropType = {
  userId: string;
  hotelId: string;
};

export const useUserLikeHandler = () => {
  const handleOnClickLike = ({ userId, hotelId }: LikeHandlerPropType) => {
    if (!userId || !hotelId) return alert("Cannot continue");
    return userPageApi.likesApi({ userId, hotelId });
  };

  return { handleOnClickLike };
};
