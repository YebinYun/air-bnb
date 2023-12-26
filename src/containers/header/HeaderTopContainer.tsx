import HeaderTopComponent from "@/components/header/HeaderTopComponent";
import React, { useState } from "react";

const HeaderTopContainer = () => {
  const [isMouseOnUser, setIsMouseOnUser] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  const toggleBookingModal = () => setIsBookingModalOpen(!isBookingModalOpen);
  const toggleMouseOnUser = () => setIsMouseOnUser(!isMouseOnUser);

  return (
    <HeaderTopComponent
      isMouseOnUser={isMouseOnUser}
      isBookingModalOpen={isBookingModalOpen}
      toggleBookingModal={toggleBookingModal}
      toggleMouseOnUser={toggleMouseOnUser}
    />
  );
};

export default HeaderTopContainer;
