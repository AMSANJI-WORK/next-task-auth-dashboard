"use client";
import React, { useActionState } from "react";
import styles from "./Container.module.scss";
import AppInput from "@/app/(application)/components/input/Input";
import { handleLogin } from "../../login.actions";
import { ApiResponse } from "@/app/(application)/(http)/http.model";
import { User } from "@/app/(dashboard)/model/users.model";

const states = {
  success: false,
  data: null as ApiResponse<User> | null,
  message: "",
};

export type FormState = typeof states;

const PageLoginContainer = () => {
  const [state, action, pending] = useActionState(handleLogin, states);
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
