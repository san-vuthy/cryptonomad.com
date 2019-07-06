import React, { Component } from "react";
import NewNav from "./NavBar1-News";
// import Newcontent from './content-new';
import Content from "./contents-new";

class News extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NewNav />
        {/* <Newcontent contentnew={this.state.conents} /> */}
        <Content />
      </React.Fragment>
    );
  }
}

export default News;
