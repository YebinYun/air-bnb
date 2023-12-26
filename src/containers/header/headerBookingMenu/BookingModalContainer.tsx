import BookingModalComponent from "@/components/header/headerBookingMenu/BookingModalComponent";
import React from "react";

type props = {
  toggleBookingModal: () => void;
};

const BookingModalContainer = ({ toggleBookingModal }: props) => {
  return <BookingModalComponent toggleBookingModal={toggleBookingModal} />;
};

export default BookingModalContainer;
