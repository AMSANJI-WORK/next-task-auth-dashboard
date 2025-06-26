"use client";
import React, { useActionState, useEffect } from "react";
import styles from "./Container.module.scss";
import AppInput from "@/app/(application)/components/input/Input";
import { handleLogin } from "../../login.actions";
import { UserSecure } from "@/app/dashboard/model/users.model";
import { useToast } from "@/app/(application)/components/toast/Toast";
import { useRouter } from "next/navigation";

const states = {
  success: false,
  data: null as UserSecure | null,
  message: "",
};

export type FormState = typeof states;

const PageLoginContainer = () => {
  const router = useRouter();
  const { addToast } = useToast();
  const [state, action, pending] = useActionState(handleLogin, states);

  useEffect(() => {
    if (!state.message) return;
    addToast({
      message: state.message,
      type: state.success ? "success" : "error",
    });
    if (state.success) {
      localStorage.selected = JSON.stringify(state.data);
      router.replace("/");
    }
  }, [state]);
  return (
    <div className={styles.loginPage}>
      <form action={action} className={styles.loginForm}>
        <h1 className={styles.loginTitle}>Login</h1>
        <AppInput
          required
          type="tel"
          name="phone"
          placeholder="Enter phone number"
        >
          Phone Number
        </AppInput>
        <AppInput
          required
          type="password"
          name="password"
          placeholder="Enter password"
        >
          Password
        </AppInput>
        <button
          disabled={pending}
          type="submit"
          className={styles.submitButton}
        >
          {pending ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default PageLoginContainer;
