import React from "react";

import "./App.css";
import "./header/Header.css";
import "./banner/Banner.css";
import "./nav/Nav.css";
import "./footer/Footer.css";

import Header from "./header/Header";
import { Nav } from "./nav/Nav";
import { Footer } from "./footer/Footer";
import Home from "./home/Home";
import About from "./about/About";
import Like from "./like/Like";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalouge from "./catalouge/Catalouge";

function App() {
  const footerData = {
    msg: "© MyBookshop. All Rights Reserved",
  };

  const year = 2020;
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" component={Nav} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/like" component={Like} />
        <Route path="/catalouge" component={Catalouge} />
      </Router>

      {/* <Like count={0} /> */}
      <Footer footermsg={footerData.msg} year={year} />
    </div>
  );
}

export default App;
