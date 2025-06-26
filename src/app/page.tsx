import AppHeader from "./(application)/components/header/Header";
import DashboardUserInfo from "./(dashboard)/compontents/user-info/UserInfo";
import React from "react";
const PageHome = () => {
  return (
    <div>
      <AppHeader />
      <DashboardUserInfo />
    </div>
  );
};

export default PageHome;
