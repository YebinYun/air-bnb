import MainCardTextComponent from "@/components/main/MainCardTextComponent";
import React from "react";

type props = {
  location: string;
  score: string;
  hotelName: string;
  day: string;
  price: number;
};

const MainCardTextContainer = ({
  location,
  score,
  hotelName,
  day,
  price,
}: props) => {
  return (
    <MainCardTextComponent
      location={location}
      score={score}
      hotelName={hotelName}
      day={day}
      price={price}
    />
  );
};

export default MainCardTextContainer;
