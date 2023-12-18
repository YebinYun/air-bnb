import { useState } from "react";
import { atom, selector } from "recoil";

const initialOptions = {
  method: "GET",
  url: "https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates",
  params: {
    filter_by_currency: "AED",
    locale: "en-gb",
    room_number: "1",
    checkin_date: "2024-01-18",
    checkout_date: "2024-01-20",
    longitude: "126.9203894",
    adults_number: "2",
    latitude: "37.5533232",
    order_by: "popularity",
    units: "metric",
    categories_filter_ids: "class::2,class::4,free_cancellation::1",
    include_adjacency: "true",
    page_number: "0",
    children_number: "2",
    children_ages: "5,0",
  },
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
  },
};

// const [bookingInformation, setBookingInformation] = useState([
//   { id: 0, guests: "성인", age: " 13세 이상", quantity: 0 },
//   {
//     id: 1,
//     guests: "어린이",
//     age: "  12세 이하 (영유아 포함)",
//     quantity: 0,
//   },
// ]);

// const totalQuantity = bookingInformation.reduce(
//   (total, booking) => total + booking.quantity,
//   0
// );

// const optionsState = atom({
//   key: "optionsState",
//   default: initialOptions,
// });

type TestAtomStateInit = {
  name: string;
  age: number;
};

const testAtomState = atom<TestAtomStateInit>({
  key: "testAtomState",
  default: {
    name: "",
    age: 0,
  },
});

export const testAtomSelector = selector({
  key: "testAtomSelector",
  get: ({ get }) => get(testAtomState),
  set: ({ set }, newValue) => set(testAtomState, newValue),
});
