import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AboutScreen from "./screens/about";
import AdminDestinationScreens from "./screens/admindestination";
import DestinationScreen from "./screens/destination";
import ContactScreen from "./screens/contact";
import HomeScreen from "./screens/home";
import HotelsScreen from "./screens/hotels";
import AdminHotelScreen from "./screens/adminhotel";
import HeaderComponent from "./component/header";
import FooterComponentComponent from "./component/footer";

import "./CSS/App.css"
import "./CSS/flaticon.css"
import "./CSS/style.css"

const App = () => {

  

  return(
   
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeScreen></HomeScreen>}></Route>
          <Route path="about" element={<AboutScreen></AboutScreen>}></Route>
          <Route path="destination" element={<DestinationScreen></DestinationScreen>}></Route>
          <Route path="hotels" element={<HotelsScreen></HotelsScreen>}></Route>
          <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>
          
          <Route path="admin/destination" element={<AdminDestinationScreens></AdminDestinationScreens>}></Route>
          <Route path="admin/hotel" element={<AdminHotelScreen></AdminHotelScreen>}></Route>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App;