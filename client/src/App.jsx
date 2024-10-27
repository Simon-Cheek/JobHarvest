import { css } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** @jsxImportSource @emotion/react */

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Interview from "./Pages/Interview";
import Careers from "./Pages/Careers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/careers" element={<Careers />} />
          <Route exact path="/interview" element={<Interview />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
