import React from "react";
import AppHeader from "../(application)/components/header/Header";
import DashboardUserInfo from "./components/user-info/UserInfo";
const PageDashboard = () => {
  return (
    <div>
      <AppHeader />
      <DashboardUserInfo />
    </div>
  );
};

export default PageDashboard;
