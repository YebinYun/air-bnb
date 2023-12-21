import { atom, selector, useRecoilState } from "recoil";

export type GetHotelListInit = {
  checkin_date: Date;
  checkout_date: Date | null;
  adults_number: number;
  children_number: number;
};

export const getHotelListQuery = atom<GetHotelListInit>({
  key: "getHotelListQuery",
  default: {
    checkin_date: new Date(),
    checkout_date: new Date(),
    adults_number: 0,
    children_number: 0,
  },
});

export const getHotelListQuerySelector = selector({
  key: "getHotelListQuerySelector",
  get: ({ get }) => get(getHotelListQuery),
  set: ({ set }, newValue) => set(getHotelListQuery, newValue),
});

export const coordsState = atom({
  key: "coordsState",
  default: {
    lat: 34.5289,
    lng: 69.1725,
  },
});

export const countyHandlerSelector = selector({
  key: "countyHandlerSelector",
  get: ({ get }) => get(coordsState),
  set: ({ set }, newCoords) => set(coordsState, newCoords),
});

export const useCoordsHandler = () => {
  const [coords, setCoords] = useRecoilState(countyHandlerSelector);

  const coordsSetHandler = (e: any) => {
    setCoords({
      lat: Number(e.target?.value.split("/")[0]),
      lng: Number(e.target?.value.split("/")[1]),
    });
  };

  return { coords, coordsSetHandler };
};

export const getGuestState = atom({
  key: "getGuestState",
  default: 0,
});

export const getGuestSelector = selector({
  key: "getGuestSelector",
  get: ({ get }) => get(getGuestState),
  set: ({ set }, newGuest) => set(getGuestState, newGuest),
});

export const useGuestCountHandler = () => {
  const [guest, setGuest] = useRecoilState(getGuestSelector);

  const guestSetHandler = () => {
    setGuest();
  };
};
