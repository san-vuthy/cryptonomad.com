import React, { Component } from "react";
import NavBar from "../components/NavBar1-Homepage";
import NavBar2 from "../components/Navbar2-Homepage";
import Thumbnail from "../components/thumbnail-H";
import Content from "../components/contents-H";
import Footer from "./footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <NavBar2 />
        <Thumbnail />
        <Content />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
