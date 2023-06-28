import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BoatListing from "../pages/BoatListing";
import Contact from "../pages/Contact";
import BoatDetails from "../pages/BoatDetails";
import KakoUnajmitiPlovilo from "../pages/KakoUnajmitiPlovilo";
import ZakoniPlovidbeUHR from "../pages/ZakoniPlovidbeUHR";
import VrsteNajma from "../pages/VrsteNajma";

import Home from "../pages/Home";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/boats" element={<BoatListing />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/boats/:slug" element={<BoatDetails />} />
            <Route path="/kako-unajmiti-plovilo" element={<KakoUnajmitiPlovilo />} />
            <Route path="/zakoni-plovidbe-u-hr" element={<ZakoniPlovidbeUHR />} />
            <Route path="/vrste-najma" element={<VrsteNajma />} />

        </Routes>
    );
};


export default Routers;