import axios from "axios";
import { atom, selector, useRecoilState } from "recoil";

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

  //   const tokenData = localStorage.getItem("token");
  //   const token = tokenData ? JSON.parse(tokenData) : null;

  //   const onClickLikeHandler = (userId: string, hotelId: string) => {
  //     if (!userId || !hotelId) alert("클릭할 수 없습니다.");

  //     const headers = { token: token.token };
  //     const []
  // };

  const handleOnClickLike = (userId: any, hotelId: any) => {
    if (!userId || !hotelId) alert("없어유..");

    const token = localStorage.getItem("token");
    const like = token ? JSON.parse(token) : "";
    const headers = {
      like: like.token,
    };

    const postLike = async () => {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_IP_API_KEY}/likes?userId=${userId}&hotelId=${hotelId}`,
          {
            headers,
          }
        )
        .then((res) => setData(res?.data.data));
    };

    return postLike();
  };

  return { handleOnClickLike };
};

// 원하는 곳에서 useRecoilValue 로 userData를 불러서 로그인 여부, 아이디 확인하구, likes리스트에 있는 애들 heart 표시!!\
