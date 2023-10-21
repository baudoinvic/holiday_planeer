import React, { useState } from "react";
import Navbar from "./pages/Navbar";
import Aboutus from "./container/Aboutus";
import Intro from "./container/Intro";
import Gallery from "./container/Gallery";
import Testimony from "./container/Testimony";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./container/Home";
import Footer from "./container/Footer";
import Homepage from "./pages/Homepage";
import Model from "./container/Model";
import TourList from "./pages/TourList";
import Tourdetail from "./pages/Tourdetail";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";

const Layout = () => {
  const [login, SetLogin] = useState(false);

  const toggleLogin = () => {
    SetLogin(true);
  };

  return (
    <>
      <Navbar toggleLogin={toggleLogin} />
      {/* {login ? <Login /> : <Home />} */}
      <Outlet />
     
      <Footer />
    </>
  );
};
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Model" element={<Model />} />
            <Route path="/TourList" element={<TourList />} />
            <Route path="/Tourdetail" element={<Tourdetail />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
         {/* <Route path="dashboard/homepage" element={<Homepage />} />{" "} */}

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;