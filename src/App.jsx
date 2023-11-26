import { HashRouter as Router, Route, Routes,} from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "../src/Views/Home.jsx"
import NavBar from "./Component/NavBar.jsx";
import Footer from "./Component/Footer.jsx";
import HomeNoLogin from "./Views/HomeNoLogin.jsx";
import Login from "./Views/Login.jsx";
import SignUp from "./Views/SignUp.jsx";
import ForgetPass from "./Views/ForgetPass.jsx";
import Tentang from "./Views/Tentang.jsx";

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
        <Route path="/no-login" element={<HomeNoLogin/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/forget-pass" element={<ForgetPass/>} />
        <Route path="/tentang" element={<Tentang/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
