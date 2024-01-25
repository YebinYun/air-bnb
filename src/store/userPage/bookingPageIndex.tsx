"use client";

import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { bookingInformationSelector } from "./bookingHotelListData";

export const bookingModalPageAtomState = atom<number>({
  key: "bookingModalPageAtomState",
  default: 0,
});

export const bookingModalPageSelector = selector({
  key: "bookingModalPageSelector",
  get: ({ get }) => get(bookingModalPageAtomState),
  set: ({ set }, newValue) => set(bookingModalPageAtomState, newValue),
});

export const useBookingPageChangeHandler = () => {
  const [pageIndex, setPageIndex] = useRecoilState(bookingModalPageSelector);

  const bookingInformation = useRecoilValue(bookingInformationSelector);

  const totalQuantity =
    bookingInformation.adults_number + bookingInformation.children_number;

  const validateInputs = () => {
    if (pageIndex === 1 && !bookingInformation?.dates[1]) {
      alert("날짜를 입력해주세요.");
      return false;
    }
    return true;
  };

  const prevPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  const nextPage = () => {
    if (pageIndex < 2) {
      const isValid = validateInputs();
      if (!isValid) return;

      setPageIndex(pageIndex + 1);
    }
  };

  return { prevPage, nextPage, totalQuantity, pageIndex, setPageIndex };
};
