import { useState } from "react";
import { bookingInformationSelector } from "./getHotelListQuery";
import { useRecoilValue } from "recoil";

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
  coords: any;
  countyHandler: (e: React.FormEvent<HTMLDivElement>) => void;
};

export const useNavigatePage = (): UseNavigatePageResult => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [coords, setCoords] = useState({
    lat: 34.5289,
    lng: 69.1725,
  });

  const bookingInfomation = useRecoilValue(bookingInformationSelector);

  const countyHandler = (e: any) => {
    setCoords({
      lat: Number(e.target?.value.split("/")[0]),
      lng: Number(e.target?.value.split("/")[1]),
    });
  };

  const totalQuantity =
    bookingInfomation.adults_number + bookingInfomation.children_number;

  const validateInputs = () => {
    if (pageIndex === 1 && !bookingInfomation?.dates[1]) {
      alert("날짜를 입력해주세요.");
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
    previousPage,
    nextPage,
    totalQuantity,
    coords,
    countyHandler,
  };
};
