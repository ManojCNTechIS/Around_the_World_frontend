import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlaceDetail from "./components/Common/PlaceDetail";
import Favourites from "./containers/Favourites";
import Home from "./containers/Home";
import Layout from "./containers/Layouts";
import Places from "./containers/Places";
import React from 'react';

const Router = () => {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/places" element={<Places />} />
            <Route path="/place/:id" element={<PlaceDetail />} />
          </Route>
        </Routes>
     
    </>
  );
};
export default Router;