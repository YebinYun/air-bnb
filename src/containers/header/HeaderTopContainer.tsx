import HeaderTopComponent from "@/components/header/HeaderTopComponent";
import React, { useState } from "react";

const HeaderTopContainer = () => {
  const [onUserToggle, setOnUserToggle] = useState<boolean>(false)
  
  return (
    <HeaderTopComponent
      onUserToggle={onUserToggle}
      setOnUserToggle={setOnUserToggle}
    />
  );
};

export default HeaderTopContainer;
