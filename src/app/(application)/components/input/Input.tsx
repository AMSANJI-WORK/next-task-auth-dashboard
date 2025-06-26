"use client";
import React, { FC, PropsWithChildren, useId } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  groupClass?: string;
};

const AppInput: FC<PropsWithChildren<Props>> = ({
  className,
  groupClass = "",
  children,
  ...props
}) => {
  const id = useId();
  return (
    <div className={classNames(styles.inputGroup, groupClass)}>
      <label htmlFor={id} className={styles.inputLabel}>
        {children}
      </label>
      <input
        {...props}
        id={id}
        className={classNames(styles.inputField, className)}
      />
    </div>
  );
};

export default AppInput;
