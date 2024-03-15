"use client";

import useHomeInputForm from "@/hook/useHomeInputForm";
import { Button, Input } from "@nextui-org/react";
import React from "react";

const InputForm = () => {
  const [userName, onChangeUserNameHandler, onSubmitHandler] =
    useHomeInputForm();

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex justify-center items-center"
    >
      <Input
        label="NickName"
        value={userName}
        onChange={onChangeUserNameHandler}
        className="w-96"
      />
      <Button color="primary">검색하기</Button>
    </form>
  );
};

export default InputForm;
