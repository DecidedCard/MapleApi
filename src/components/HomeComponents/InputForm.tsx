"use client";

import useHomeInputForm from "@/hook/useHomeInputForm";
import { Input } from "@nextui-org/react";
import React from "react";

const InputForm = () => {
  const [userName, onChangeUserNameHandler, onSubmitHandler] =
    useHomeInputForm();

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        label="NickName"
        value={userName}
        onChange={onChangeUserNameHandler}
        className="w-96"
      />
      <button>검색하기</button>
    </form>
  );
};

export default InputForm;
