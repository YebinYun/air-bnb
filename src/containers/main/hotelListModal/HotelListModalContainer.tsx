import React, { useState } from "react";
import HotelListModalComponent from "@/components/main/hotelListModal/HotelListModalComponent";
import HostInfoComponent, {
  BlockLayout,
} from "@/components/main/hotelListModal/HostInfoComponent";
import HotelInfoComponent from "@/components/main/hotelListModal/HotelInfoComponent";
import HotelReviewComponent from "@/components/main/hotelListModal/HotelReviewComponent";

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

      <BlockLayout
        sx={{ cursor: "pointer", justifyContent: "center", mt: "1rem" }}
        onClick={() => {
          setIsReview(!isReview);
        }}
      >
        {isReview ? "정보 보러가기" : "리뷰 보러가기"}
      </BlockLayout>
    </HotelListModalComponent>
  );
};

export default HotelListModalContainer;
