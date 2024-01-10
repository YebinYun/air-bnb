import React, { useState } from "react";
import HeaderTopComponent from "@/components/header/HeaderTopComponent";
import BookingModalComponent from "@/components/header/headerBookingMenu/BookingModalComponent";
import LoginToggleDropDownComponent from "@/components/header/headerUserMenu/LoginToggleDropDownComponent";
import LogoutToggleDropDownComponent from "@/components/header/headerUserMenu/LogoutToggleDropDownComponent";
import UserModalComponent from "@/components/header/headerUserMenu/UserModalComponent";
import {
  bookingInformationSelector,
  useBookingInfoChangeHandler,
} from "@/recoil/RecoilHotelList";
import { useRecoilState } from "recoil";
import { useBookingPageChangeHandler } from "@/recoil/RecoilPageIndex";
import useGetHotelList from "@/api/getHotelList";

const HeaderTopContainer = () => {
  const { fetchData } = useGetHotelList();

  const [isUserDataModalOpen, setIsUserDataModalOpen] =
    useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  const toggleBookingModal = () => setIsBookingModalOpen(!isBookingModalOpen);
  const toggleUserDataModal = () =>
    setIsUserDataModalOpen(!isUserDataModalOpen);

  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const [isSetting, setIsSetting] = useState<boolean>(false);

  const loginModalHandler = () => {
    setIsLogin(!isLogin);
    setIsUserDataModalOpen(false);
  };

  const signupModalHandler = () => {
    setIsSignup(!isSignup);
    setIsUserDataModalOpen(false);
  };

  const settingModalHandler = () => {
    setIsSetting(!isSetting);
    setIsUserDataModalOpen(false);
  };

  const closeModalHandler = () => {
    setIsLogin(false);
    setIsSignup(false);
    setIsSetting(false);
  };

  const userChoice = `${isLogin ? "로그인" : isSignup ? "회원가입" : "수정"}`;

  // 로그인/회원가입 전환 핸들러
  const userChangeHandler = () => {
    if (isLogin) {
      setIsLogin(false);
      setIsSignup(true);
    } else if (isSignup) {
      setIsLogin(true);
      setIsSignup(false);
    }
  };

  const { handleOnBookingInfoChange, bookingInfo } =
    useBookingInfoChangeHandler();

  const [coordsValue, setCoorsValue] = useRecoilState(
    bookingInformationSelector
  );

  const { prevPage, nextPage, totalQuantity, pageIndex, setPageIndex } =
    useBookingPageChangeHandler();

  return (
    <>
      <HeaderTopComponent
        setIsUserDataModalOpen={setIsUserDataModalOpen}
        toggleUserDataModal={toggleUserDataModal}
        toggleBookingModal={toggleBookingModal}
      />

      {isBookingModalOpen && (
        <BookingModalComponent
          isBookingModalOpen={isBookingModalOpen}
          toggleBookingModal={toggleBookingModal}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          totalQuantity={totalQuantity}
          nextPage={nextPage}
          prevPage={prevPage}
          coordsValue={coordsValue}
          setCoorsValue={setCoorsValue}
          handleOnBookingInfoChange={handleOnBookingInfoChange}
          bookingInfo={bookingInfo}
          fetchData={fetchData}
        />
      )}

      {isUserDataModalOpen &&
        (localStorage.getItem("token") ? (
          <LogoutToggleDropDownComponent
            loginModalHandler={loginModalHandler}
            signupModalHandler={signupModalHandler}
            settingModalHandler={settingModalHandler}
            isUserDataModalOpen={isUserDataModalOpen}
            setIsBookingModalOpen={setIsBookingModalOpen}
          />
        ) : (
          <LoginToggleDropDownComponent
            loginModalHandler={loginModalHandler}
            signupModalHandler={signupModalHandler}
            settingModalHandler={settingModalHandler}
          />
        ))}

      {(isLogin || isSignup || isSetting) && (
        <UserModalComponent
          closeModalHandler={closeModalHandler}
          userChangeHandler={userChangeHandler}
          isLogin={isLogin}
          isSetting={isSetting}
          userChoice={userChoice}
        />
      )}
    </>
  );
};

export default HeaderTopContainer;
