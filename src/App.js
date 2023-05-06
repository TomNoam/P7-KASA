import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Page404 from "./pages/Page404";
import PageFiche from "./pages/PageFiche";
import PageHome from "./pages/PageHome";
import PagePropos from "./pages/PagePropos";

import "./style.scss";
import "./styleResponsive.scss";

function App(){

  return (
    <div className="App">      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/fiche/:id" element={<PageFiche />} />
          <Route path="/propos" element={<PagePropos />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      <Footer />   
      </Router>              
    </div>
  )
}

export default App;