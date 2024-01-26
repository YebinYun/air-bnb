import { atom, selector, useRecoilState } from "recoil";

export type TokenInitDataType = {
  token?: string | null;
  userId?: string | null;
  userName?: string | null;
  likes?: string[];
  password?: null;
};

const userDataInit = {
  token: null,
  userId: null,
  userName: null,
  likes: [],
  password: null,
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
  const token =
    typeof window !== "undefined" && localStorage.getItem("token")
      ? JSON?.parse(<any>localStorage.getItem("token"))
      : "";

  return { token };
};
