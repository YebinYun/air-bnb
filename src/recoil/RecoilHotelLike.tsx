import axios from "axios";
import { atom, selector, useRecoilState } from "recoil";

export const hotelLikeButtonAtomState = atom({
  key: "hotelLikeButtonAtomState",
  default: false,
});

export const hotelLikeButtonSelector = selector({
  key: "hotelLikeButtonSelector",
  get: ({ get }) => get(hotelLikeButtonAtomState),
  set: ({ set }, newValue) => set(hotelLikeButtonAtomState, newValue),
});

const userId = "6593c3bac30145cd99a5c101";

export const useLikeClickHandler = () => {
  const [isLike, setIsLike] = useRecoilState<boolean>(hotelLikeButtonSelector);

  const handleOnLikeChange = async () => {
    setIsLike(!isLike);

    await axios
      .get(`http://localhost:8000/likes?userId=${userId}`)
      .then((res) => {
        if (res.status === 200) {
          if (호텔리스트 === userId) {
            alert("On!");
          } else {
            alert("Off!");
          }
        }
        console.log("resultCode====>", res);
        console.log("isLike====>", isLike);
      });
  };

  return { handleOnLikeChange, isLike };
};
