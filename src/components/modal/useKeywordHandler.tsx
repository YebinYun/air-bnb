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

interface KeywordHandlerProps {
  loginModal: boolean;
  setting: boolean;
}

interface UserDataProps {
  userId?: string;
  userName?: string;
  password: string;
  userTel?: string;
  userDate?: string;
  userEmail?: string;
  userCheck: boolean;
}

const initUserData = {
  userId: "",
  userName: "",
  userTel: "",
  userDate: "",
  userEmail: "",
  password: "",
  userCheck: false,
};

export const useKeywordHandler = ({
  loginModal,
  setting,
}: KeywordHandlerProps) => {
  const [userData, setUserData] = useState<UserDataProps>(initUserData);

  const handleOnChange = (e: any) => {
    setUserData({
      ...userData,
      [e.target.name]: [e.target.value],
    });

    // if(e.target.type !== "checkbox") {
    //   return {
    //     setUserData({
    //       ...userData,
    //       [e.target.name]: [e.target.value],
    //     });u
    //   }
    // } else {
    //   if(e.target.checked) {
    //     set ----[e.target.name] = true
    //   } else
    //   false
    // }
  };

  const onSubmitHandler = () => {
    loginModal
      ? alert(
          `
        아이디:  ${userData.userId} 
        비밀번호:  ${userData.password} 
      `
        )
      : setting
      ? alert(
          `
      이름:  ${userData.userName} 
      연락처: ${userData.userTel}
      생년월일: ${userData.userDate}
      이메일: ${userData.userEmail}
      비밀번호:  ${userData.password} 
      개인정보 동의: ${userData.userCheck ? "YES" : "NO"}
    `
        )
      : alert(
          `
          이름:  ${userData.userName}
          아이디:  ${userData.userId} 
          비밀번호:  ${userData.password} 
        `
        );
    handleOnChange("");
  };
  return { userData, handleOnChange, onSubmitHandler };
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
