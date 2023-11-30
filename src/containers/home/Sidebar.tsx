import React from "react";
import { Icon } from "@iconify/react";

const Sidebar = () => {
  return (
    <>
      {/* left */}
      <div className="buttonWrap">
        <Icon icon="ep:arrow-left-bold" />
      </div>

      {/* filterCard  */}
      <div>
        <Icon icon="icon-park-outline:camp" />
        <span>캠핑장</span>
      </div>

      {/* right */}
      <div className="buttonWrap">
        <Icon icon="ep:arrow-left-bold" rotate={2} />
      </div>

      {/* filterButton  */}
      <div>
        <Icon icon="mi:filter" />
        <span>필터</span>
      </div>
    </>
  );
};

export default Sidebar;
