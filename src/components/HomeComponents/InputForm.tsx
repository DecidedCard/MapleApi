"use client";

import useHomeInputForm from "@/hook/useHomeInputForm";
import React from "react";

const InputForm = () => {
  const [userName, onChangeUserNameHandler, onSubmitHandler] =
    useHomeInputForm();

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="캐릭터 이름을 입력해주세요"
        value={userName}
        onChange={onChangeUserNameHandler}
      />
      <button>검색하기</button>
    </form>
  );
};

export default InputForm;
