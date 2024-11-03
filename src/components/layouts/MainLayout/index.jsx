import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/footer";
import Header from "../../../components/header";

const MainLayout = () => {
    return (
      <div className="layout-wrapper">
        <Header />
        <main className="row content-wrapper">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default MainLayout;
  