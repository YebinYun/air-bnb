import React from "react";
import { Box, Button, Link, Stack, TextField, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import userData from "../../../utils/userData.json";
import { UserDataAlert } from "../../../hooks/UserDataAlert";

type props = {
  loginModalHandler: () => void;
  signupModalHandler: () => void;
  closeModalHandler: () => void;
  userChangeHandler: () => void;
  isSetting: boolean;
  isLogin: boolean;
  isSignup: boolean;
  userChoice: string;
};

const UserModalComponent = ({
  loginModalHandler,
  signupModalHandler,
  closeModalHandler,
  userChangeHandler,
  isSetting,
  isLogin,
  isSignup,
  userChoice,
}: props) => {
  const { userAlertData, onChangeHandler, onSubmitHandler } = UserDataAlert({
    isLogin,
    isSetting,
  });

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "white",
          alignItems: "center",
          p: "2rem",
          borderRadius: "5px",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            width: "100%",
            justifyContent: "space-between",
            mt: "1rem",
            mb: "2rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#222",
            }}
          >
            {userChoice}하기
          </Box>
          <Button
            onClick={() => {
              closeModalHandler();
            }}
          >
            <CloseIcon sx={{ color: "black" }} />
          </Button>
        </Stack>

        {isSetting ? (
          <Box>
            {userData.map((item, index) => (
              <Box key={index}>
                <TextFieldContainer
                  onChange={onChangeHandler}
                  label={item.title}
                  type={item.type}
                  name={item.prop}
                />
              </Box>
            ))}
          </Box>
        ) : (
          <Stack direction={"column"}>
            {isLogin ? (
              ""
            ) : (
              <TextFieldContainer
                label="이름"
                name="userName"
                value={userAlertData.userName}
                onChange={onChangeHandler}
              />
            )}
            <TextFieldContainer
              label="아이디"
              name="userId"
              value={userAlertData.userId}
              onChange={onChangeHandler}
            />
            <TextFieldContainer
              label="비밀번호"
              type="password"
              name="password"
              value={userAlertData.password}
              onChange={onChangeHandler}
            />
          </Stack>
        )}
        <ButtonContainer
          onClick={onSubmitHandler}
          sx={{ background: "lightblue" }}
        >
          {userChoice}
        </ButtonContainer>

        <Box sx={{ mb: "2.5rem" }}>
          {isSetting ? (
            ""
          ) : isLogin ? (
            <Stack direction={"row"}>
              <Box>계정이 없으신가요?</Box>
              <Link
                component="button"
                onClick={userChangeHandler}
                sx={{ ml: "0.5rem" }}
              >
                회원가입
              </Link>
            </Stack>
          ) : (
            <Stack direction={"row"}>
              <Box>이미 가입하셨나요?</Box>
              <Link
                component="button"
                onClick={userChangeHandler}
                sx={{ ml: "0.5rem" }}
              >
                로그인
              </Link>
            </Stack>
          )}
        </Box>

        {isSetting ? (
          ""
        ) : (
          <Stack>
            <ButtonContainer>네이버 {userChoice}</ButtonContainer>
            <ButtonContainer>카카오 {userChoice}</ButtonContainer>
            <ButtonContainer>구글 {userChoice}</ButtonContainer>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

const ButtonContainer = styled(Button)`
  width: 20rem;
  padding: 1rem 0;
  color: black;
  font-weight: bold;
  border: 1px solid lightgray;
  margin: 0.5rem 0;
`;

const TextFieldContainer = styled(TextField)`
  width: 20rem;
  color: black;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export default UserModalComponent;
