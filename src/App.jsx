import { HashRouter as Router, Route, Routes,} from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "../src/Views/Home.jsx"
import NavBar from "./Component/NavBar.jsx";
import Footer from "./Component/Footer.jsx";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  return (
    <Router>
      <ScrollToTop />
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
