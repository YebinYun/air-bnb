import { atom, selector, useRecoilState } from "recoil";

const locationState = atom<string>({
  key: "locationState",
  default: "All",
});

const locationSelector = selector<string>({
  key: "locationSelector",
  get: ({ get }) => get(locationState),
  set: ({ set }, newValue) => set(locationState, newValue),
});

export const useLocationData = () => {
  const [location, setLocation] = useRecoilState<string>(locationSelector);

  const locatoinHandleChange = (event: string, newValue: string) => {
    setLocation(newValue);
  };

  return { location, locatoinHandleChange };
};
