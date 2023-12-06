import { TextField } from "@mui/material";
import React, { useState } from "react";

// type NameType = string
// type AgeType = number

// interface TestA {
//     name: NameType
//     age?: AgeType

// }

// const list: TestA[] = [
//     {
//         name: "aaa",
//         age: 17
//     },

//     {
//         name: "bbb"
//     },
// ]

// const singleItem: TestA = {
//     name: 'hello',
//     age: 20
// }

// console.log('list', list)

interface UserDataProps {
  userId: string;
  userName?: string;
  password: string;
}

const initUserData = {
  userId: "",
  userName: "",
  password: "",
};

export const useKeywordHandler = () => {
  const [userData, setUserData] = useState<UserDataProps>(initUserData);

  const handleOnChange = (e: any) => {
    setUserData({
      ...userData,
      [e.target.name]: [e.target.value],
    });
  };

  return { userData, handleOnChange };
};

// keylogger ==> 키 입력값을 저장.. => localStorage, sessionStorage =>
// 입력중 페이지를 벗어난후에 다시 돌아와도, 그 입력값을 불러와서 사용가능..
// 옛날껄로 응용하면 => cart

// const TestContainer = () => {
//     const { handleOnChange } = useKeywordHandler()

//     const { } = useForm({inputName:"INPUTNAME", inputValue: 'INPUTVALUE', onChange: handleOnChange})

//     return (

//     )
// }

// const useForm = ({ type, inputName, inputValue, onChange }: any) => {
//     return (

//         type === checkbox && (
//             <TextField
//                 type={type} // text, number, select, checkbox
//                 name={inputName}
//                 value={inputValue}
//                 onChange={onChange}

//             />
//         )
//         type === "text" &&
//         <TextField

//         />

//     )
// }
