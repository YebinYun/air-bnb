import HeaderTopComponent from "@/components/header/HeaderTopComponent";
import React, { useState } from "react";

const HeaderTopContainer = () => {
  const [onUserToggle, setOnUserToggle] = useState<boolean>(false)
  const onUserToggleHandler = () => {
    setOnUserToggle(!onUserToggle);
  }
  return (
    <HeaderTopComponent
      onUserToggle={onUserToggle}
      setOnUserToggle={setOnUserToggle}
      onUserToggleHandler={onUserToggleHandler}
    />
  );
};

export default HeaderTopContainer;
