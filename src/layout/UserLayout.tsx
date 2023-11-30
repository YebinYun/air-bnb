import BodyContent from "@/containers/home/BodyContent";
import Navbar from "@/containers/home/Navbar";
import Sidebar from "@/containers/home/Sidebar";
import React from "react";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <BodyContent />
      {/* <Footer /> */}
    </>
  );
};

export default UserLayout;
