import { atom, selector, useRecoilState } from "recoil";

type TokenInitDataType = {
  token: string | null;
  userId: string | null;
  userName: string | null;
  likes: string[];
};

const userDataInit = {
  token: null,
  userId: null,
  userName: null,
  likes: [],
};

const userDataState = atom<TokenInitDataType>({
  key: "userDataState",
  default: userDataInit,
});

export const userDataSelector = selector<TokenInitDataType>({
  key: "userDataSelector",
  get: ({ get }) => get(userDataState),
  set: ({ set }, newValue) => set(userDataState, newValue),
});

export const useLoginDataState = () => {
  const [isLoginData, setIsLoginData] =
    useRecoilState<TokenInitDataType>(userDataSelector);

  const tokenData = localStorage.getItem("token");
  const token = tokenData ? JSON.parse(tokenData) : "";

  if (tokenData) {
    return setIsLoginData({
      token: token.token,
      userId: token.userId,
      userName: token.userName,
      likes: token.likes,
    });
  }

  return { tokenData, isLoginData };
};
