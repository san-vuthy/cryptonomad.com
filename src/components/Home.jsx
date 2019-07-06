import React, { Component } from "react";
import NavBar from "./navbar";
import Banner from "./banner";
import Thumbnail from "./thumbnail";
import Content from "./contents";
import Footer from "./footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Banner />
        <Thumbnail />
        <Content />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
