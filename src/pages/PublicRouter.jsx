import React, { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Lodging from "./Lodging";
import NotFound from "./NotFound";
import logements from '../data/appartements.json';

function PublicRouter() {

  const [apparts, setApparts] = useState([])

  useEffect(() => {
    setApparts(logements)
  }, [])

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home apparts={apparts}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/lodging/:appartId" element={<Lodging apparts={apparts} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default PublicRouter;
