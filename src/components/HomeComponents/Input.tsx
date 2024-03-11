"use client";

import useInput from "@/hook/useInput";
import React from "react";

const Input = () => {
  const [characterName, onChangeCharacterNameHandler] = useInput();

  return (
    <form>
      <input
        placeholder="캐릭터 이름을 입력해주세요"
        value={characterName}
        onChange={onChangeCharacterNameHandler}
      />
      <button>검색하기</button>
    </form>
  );
};

export default Input;
