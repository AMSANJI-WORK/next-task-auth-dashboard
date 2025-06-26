import React, { FC, PropsWithChildren } from "react";
import styles from "./LabelValue.module.scss";
import classNames from "classnames";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  label: string;
  className?: string;
  classNameValue?: string;
};

const AppLabelValue: FC<PropsWithChildren<Props>> = ({
  label,
  children,
  classNameValue = "",
  className = "",
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames(styles["label__container"], className)}
    >
      <div className={styles["label__title"]}>{label}</div>
      <div className={classNames(styles["label__value"], classNameValue)}>
        {children}
      </div>
    </div>
  );
};

export default AppLabelValue;
