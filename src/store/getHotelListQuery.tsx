import { atom, selector, useRecoilState } from "recoil";

export type GetHotelListInit = {
  checkin_date: Date | null;
  checkout_date: Date | null;
  adults_number: number;
  children_number: number;
  dates: [];
  lat: number;
  lng: number;
};

export const coordsState = atom({
  key: "coordsState",
  default: {
    lat: 34.5289,
    lng: 69.1725,
  },
});

export const bookingInformationAtomState = atom<GetHotelListInit>({
  key: "bookingInformationAtomState",
  default: {
    checkin_date: null,
    checkout_date: null,
    dates: [new Date(), new Date()],
    adults_number: 1,
    children_number: 1,
    lat: 34.5289,
    lng: 69.1725,
  },
});

export const bookingInformationSelector = selector({
  key: "bookingInformationSelector",
  get: ({ get }) => get(bookingInformationAtomState),
  set: ({ set }, newValue) => set(bookingInformationAtomState, newValue),
});

export const useBookingInfoChangeHandler = () => {
  const [bookingInfo, setBookingInfo] = useRecoilState(
    bookingInformationSelector
  );

  const handleOnBookingInfoChange = (e: any) => {
    if (e.length === 2) {
      return setBookingInfo({
        ...bookingInfo,
        checkin_date: e[0],
        checkout_date: e[1],
        dates: e,
      });
    }

    if (!e.length) {
      if (e.target.name === "coords") {
        return setBookingInfo({
          ...bookingInfo,
          lat: e.target.value.split("/")[0],
          lng: e.target.value.split("/")[1],
        });
      } else {
        return setBookingInfo({
          ...bookingInfo,
          [e.target.name]: e.target.value,
        });
      }
    }
  };

  return { handleOnBookingInfoChange, bookingInfo };
};
