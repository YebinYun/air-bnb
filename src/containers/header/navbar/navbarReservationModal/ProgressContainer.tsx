import ProgressComponent from "@/components/common/ProgressComponent";
import { Box, styled } from "@mui/material";
import React from "react";

interface props {
  travelDestination: Number;
  travelDate: Number;
  travelDetail: Number;
  currentPage: Number;
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
