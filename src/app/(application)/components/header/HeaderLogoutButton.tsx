"use client";
import React, { useActionState, useEffect } from "react";
import styles from "./Header.module.scss";
import { handleLogout } from "@/app/auth/logout/logout.actions";
import { useToast } from "../toast/Toast";
import { useRouter } from "next/navigation";
const states = {
  success: false,
  message: "",
};

export type LogoutState = typeof states;

const HeaderLogoutButton = () => {
  const router = useRouter();
  const { addToast } = useToast();
  const [state, action, pending] = useActionState(handleLogout, states);

  useEffect(() => {
    if (!state.message) return;
    addToast({
      message: state.message,
      type: state.success ? "success" : "error",
    });
    if (state.success) {
      localStorage.removeItem("selected");
      router.replace("/auth/login");
    }
  }, [state]);
  return (
    <form action={action}>
      <button disabled={pending} type="submit" className={styles.logout}>
        {pending ? "Loading..." : "Logout"}
      </button>
    </form>
  );
};

export default HeaderLogoutButton;
