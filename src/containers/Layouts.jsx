import { Outlet } from "react-router-dom";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import React, { Component }  from 'react';

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}