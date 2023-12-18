import { useState } from "react";
import { useRecoilState } from "recoil";
import { getHotelListQuerySelector } from "./getHotelListQuery";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

type GuestsInformation = {
  id: number;
  guests: string;
  age: string;
  quantity: number;
};

type UseNavigatePageResult = {
  pageIndex: number;
  rangeDate: Value;
  guestsInformation: GuestsInformation[];
  setGuestsInformation: () => void;
  totalQuantity: number;
  dateChangeHandler: (e: any) => void;
  previousPage: () => void;
  nextPage: () => void;
};

export const useNavigatePage = (): UseNavigatePageResult => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [rangeDate, setRangeDate] = useState<Value>(null);
  const [guestsInformation, setGuestsInformation] = useState<
    GuestsInformation[]
  >([
    { id: 0, guests: "성인", age: " 13세 이상", quantity: 0 },
    { id: 1, guests: "어린이", age: " 12세 이하 (영유아 포함)", quantity: 0 },
  ]);

  const totalQuantity = guestsInformation.reduce(
    (total, booking) => total + booking.quantity,
    0
  );
    

  const dateChangeHandler = (e: any) => {
    setRangeDate(e);
  };


  const validateInputs = () => {
    if (pageIndex === 1 && rangeDate === null) {
      alert("날짜를 입력해주세요.");
      return false;
    }
    if (pageIndex === 2 && totalQuantity === 0) {
      alert("인원 수를 입력해주세요.");
      return false;
    }
    return true;
  };

  const previousPage = () => {
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

  return {
    pageIndex,
    rangeDate,
    guestsInformation,
    setGuestsInformation,
    totalQuantity,
    dateChangeHandler,
    previousPage,
    nextPage,
  };
};

