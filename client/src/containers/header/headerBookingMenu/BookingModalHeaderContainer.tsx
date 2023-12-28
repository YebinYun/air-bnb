import BookingModalHeaderComponent from "@/components/header/headerBookingMenu/BookingModalHeaderComponent";
import React from "react";

type props = {
  coordsValue: any;
  totalQuantity: number;
  pageIndex: number;
  setPageIndex: any;
};

const BookingModalHeaderContainer = ({
  coordsValue,
  totalQuantity,
  pageIndex,
  setPageIndex,
}: props) => {
  return (
    <BookingModalHeaderComponent
      coordsValue={coordsValue}
      totalQuantity={totalQuantity}
      pageIndex={pageIndex}
      setPageIndex={setPageIndex}
    />
  );
};

export default BookingModalHeaderContainer;
