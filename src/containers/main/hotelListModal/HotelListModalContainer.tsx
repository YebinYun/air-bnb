"use client";
import React, { useState } from "react";
import HotelListModalComponent from "@/components/main/hotelListModal/HotelListModalComponent";
import HostInfoComponent from "@/components/main/hotelListModal/HostInfoComponent";
import HotelInfoComponent from "@/components/main/hotelListModal/HotelInfoComponent";
import HotelReviewComponent from "@/components/main/hotelListModal/HotelReviewComponent";
import HotelModalChangeComponent from "@/components/main/hotelListModal/HotelModalChangeComponent";

export type ModalOpenProps = {
  data: any;
  isModalOpen: boolean;
  setIsModalOpen: (props: boolean) => void;
};

const HotelListModalContainer = ({ data, setIsModalOpen }: ModalOpenProps) => {
  const [isImgError, setIsImgError] = useState<boolean>(false);
  const [isReview, setIsReview] = useState<boolean>(false);

  return (
    <HotelListModalComponent
      setIsImgError={setIsImgError}
      setIsModalOpen={setIsModalOpen}
    >
      <HostInfoComponent
        data={data}
        isImgError={isImgError}
        setIsImgError={setIsImgError}
      />
      {isReview ? (
        <HotelReviewComponent data={data} />
      ) : (
        <HotelInfoComponent data={data} />
      )}

      <HotelModalChangeComponent
        setIsReview={setIsReview}
        isReview={isReview}
      />
    </HotelListModalComponent>
  );
};

export default HotelListModalContainer;
