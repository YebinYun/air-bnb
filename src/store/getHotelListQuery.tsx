import { atom, selector } from "recoil";

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
