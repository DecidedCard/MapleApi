"use client";

import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider, useTheme } from "next-themes";

const queryClient = new QueryClient();

const Provider = ({ children }: React.PropsWithChildren) => {
  // ThemeProvider를 적용하여 server 렌더링 기준에 의한 에러가 생겨서(Extra attributes from the server: class,style) 마운트가 됐을 때 Provider를 리턴하게 만들어서 에러가 안 나오게 했습니다.
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
};

export default Provider;
