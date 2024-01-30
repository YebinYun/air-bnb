import React from "react";
import { TbHomeInfinity } from "react-icons/tb";
import { MdApartment } from "react-icons/md";
import { BsFillHouseDoorFill, BsFillHouseUpFill } from "react-icons/bs";
import { FaHouseSignal, FaHouseUser, FaBowlFood } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import {
  GiFamilyHouse,
  GiTreehouse,
  GiDamagedHouse,
  GiBlockHouse,
  GiVillage,
  GiWoodCabin,
} from "react-icons/gi";
import { LiaSynagogueSolid } from "react-icons/lia";

interface IconData {
  icon: React.ReactElement;
  location: string;
}

export const iconData: IconData[] = [
  {
    icon: <TbHomeInfinity />,
    location: "All",
  },
  {
    icon: <MdApartment />,
    location: "Apartment",
  },
  {
    icon: <FaHouseSignal />,
    location: "Condominium",
  },
  {
    icon: <BsFillHouseDoorFill />,
    location: "House",
  },
  {
    icon: <BsFillHouseUpFill />,
    location: "Loft",
  },
  {
    icon: <BiBuildingHouse />,
    location: "Serviced apartment",
  },
  {
    icon: <FaHouseUser />,
    location: "Guesthouse",
  },
  {
    icon: <GiFamilyHouse />,
    location: "Hostel",
  },
  {
    icon: <FaBowlFood />,
    location: "Bed and breakfast",
  },
  {
    icon: <GiTreehouse />,
    location: "Treehouse",
  },
  {
    icon: <GiBlockHouse />,
    location: "Bungalow",
  },
  {
    icon: <GiDamagedHouse />,
    location: "Townhouse",
  },
  {
    icon: <GiVillage />,
    location: "Villa",
  },
  {
    icon: <LiaSynagogueSolid />,
    location: "Guest suite",
  },
  {
    icon: <GiWoodCabin />,
    location: "Cabin",
  },
];
