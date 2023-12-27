import BookingModalHeaderComponent from "@/components/header/headerBookingMenu/BookingModalHeaderComponent";
import React from "react";

type props = {
  coordsValue: any;
  totalQuantity: number;
};

const BookingModalHeaderContainer = ({ coordsValue, totalQuantity }: props) => {
  return (
    <BookingModalHeaderComponent
      coordsValue={coordsValue}
      totalQuantity={totalQuantity}
    />
  );
};

export default BookingModalHeaderContainer;
