import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="layout-wrapper">
      <main className="row content-wrapper">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
