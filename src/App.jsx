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
import NotFound from "./Views/NotFound.jsx";
import Biodata from "./Views/Biodata.jsx";
import Pengaturan from "./Views/Pengaturan.jsx";
import Akademik from "./Views/Akademik.jsx";
import Kontak from "./Views/Kontak.jsx";
import Test from "./Views/Test.jsx";

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
        <Route path="/test" element={<Test/>} />
        <Route path="/no-login" element={<HomeNoLogin/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/forget-pass" element={<ForgetPass/>} />
        <Route path="/tentang" element={<Tentang/>} />
        <Route path="/biodata" element={<Biodata/>} />
        <Route path="/pengaturan" element={<Pengaturan/>} />
        <Route path="/akademik" element={<Akademik/>} />
        <Route path="/kontak" element={<Kontak/>} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
