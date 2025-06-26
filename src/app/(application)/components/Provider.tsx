"use client";
import React, { FC, PropsWithChildren, useEffect } from "react";
import { ToastProvider } from "./toast/Toast";
import { useRouter } from "next/navigation";

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage?.selected || localStorage.selected === "{}")
      router.replace("/auth/login");
  }, []);

  return <ToastProvider>{children}</ToastProvider>;
};

export default AppProvider;
