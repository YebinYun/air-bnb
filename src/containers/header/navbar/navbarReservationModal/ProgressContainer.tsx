import ProgressComponent from "@/components/common/ProgressComponent";
import React from "react";

interface props {
  travelDestination: number;
  travelDate: number;
  travelDetail: number;
  currentPage: number;
}

const ProgressContainer = ({
  travelDestination,
  travelDate,
  travelDetail,
  currentPage,
}: props) => {
  return (
    <ProgressComponent
      travelDestination={travelDestination}
      travelDate={travelDate}
      travelDetail={travelDetail}
      currentPage={currentPage}
    />
  );
};

export default ProgressContainer;
