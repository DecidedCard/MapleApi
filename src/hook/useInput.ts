"use client";

import { ChangeEvent, useCallback, useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return [value, onChangeHandler, setValue] as const;
};

export default useInput;
