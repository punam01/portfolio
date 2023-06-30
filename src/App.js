import React from 'react';

import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
//import Qualification from "./components/Qualification";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        {/*<Qualification></Qualification>*/}
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
