import UserModalComponent from '@/components/header/headerUserMenu/UserModalComponent'
import React from 'react'

type props = {
  closeModalHandler: () => void;
  isSetting: boolean;
  userChoice: string;
};

const UserModalContainer = ({ closeModalHandler,isSetting, userChoice }: props) => {
  return (
    <UserModalComponent
      closeModalHandler={closeModalHandler}
      isSetting={isSetting}
      userChoice={userChoice}
    />
  );
};

export default UserModalContainer