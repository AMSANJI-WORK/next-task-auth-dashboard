import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import HeaderLogoutButton from "./HeaderLogoutButton";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={classNames("container", styles.wrapper)}>
        <h3>Dashboard</h3>
      </div>
      <HeaderLogoutButton />
    </header>
  );
};

export default AppHeader;
