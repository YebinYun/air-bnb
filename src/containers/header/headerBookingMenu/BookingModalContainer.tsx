import BookingModalComponent from "@/components/header/headerBookingMenu/BookingModalComponent";
import { useNavigatePage } from "@/hooks/useNavigatePage";
import { bookingInformationSelector } from "@/recoil/RecoilHotelList";
import React from "react";
import { useRecoilState } from "recoil";

type props = {
  toggleBookingModal: () => void;
};

const BookingModalContainer = ({ toggleBookingModal }: props) => {
  return (
    <BookingModalComponent
      toggleBookingModal={toggleBookingModal}
      isBookingModalOpen={false}
      pageIndex={pageIndex}
      totalQuantity={totalQuantity}
      prevPage={prevPage}
      nextPage={nextPage}
      coordsValue={coordsValue}
      setCoorsValue={setCoorsValue}
    />
  );
};

export default BookingModalContainer;
