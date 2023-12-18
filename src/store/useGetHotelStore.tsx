import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { atom, selector, useRecoilState } from "recoil";

export const useNavigatePage = () => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [progress, setProgress] = useState<number>(1);
  const [rangeDate, setRangeDate] = useState<Value>(null);
  const [bookingInformation, setBookingInformation] = useState([
    { id: 0, guests: "성인", age: " 13세 이상", quantity: 0 },
    {
      id: 1,
      guests: "어린이",
      age: "  12세 이하 (영유아 포함)",
      quantity: 0,
    },
  ]);

  const totalQuantity = bookingInformation.reduce(
    (total, booking) => total + booking.quantity,
    0
  );

  const dateChangeHandler = (e: any) => {
    setRangeDate(e);
  };

  const previousPage = () => {
    if (progress > 0) {
      setProgress(progress - 1);
    }
  };

  const nextPage = () => {
    if (progress < 2) {
      setProgress(progress + 1);
      if (progress === 1 && rangeDate === null) {
        alert("날짜를 입력해주세요.");
        setProgress(progress);
      }
      if (progress === 2 && totalQuantity === 0) {
        alert("인원 수를 입력해주세요.");
        setProgress(progress);
      }
    }
  };
  return {
    progress,
    rangeDate,
    bookingInformation,
    setBookingInformation,
    totalQuantity,
    dateChangeHandler,
    previousPage,
    nextPage,
  };
};

type getHotelListInit = {
  checkin_date: string;
  checkout_date: string;
  adults_number: string;
  children_number: string;
};

export const getHotelListQuery = atom<getHotelListInit>({
  key: "getHotelListQuery",
  default: {
    checkin_date: "2024-01-18",
    checkout_date: "2024-01-20",
    adults_number: "2",
    children_number: "2",
  },
});

export const getHotelListQuerySelector = selector({
  key: "getHotelListQuerySelector",
  get: ({ get }) => get(getHotelListQuery),
  set: ({ set }, newValue) => set(getHotelListQuery, newValue),
});

export const useGetHotelListItem = () => {
  const [query, setQuery] = useRecoilState(getHotelListQuerySelector);
  const fetchData = (query: any) => {
    return axios.request(query);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getHotelListByQuery"],
    queryFn: () => {
      return fetchData(query);
    },
  });

  return { query, setQuery, data, isLoading };
};

// const { hotelData, }
