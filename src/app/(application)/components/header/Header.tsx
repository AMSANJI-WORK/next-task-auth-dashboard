import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={classNames("container", styles.wrapper)}>
        <h3>Dashboard</h3>
      </div>
    </header>
  );
};

export default AppHeader;
