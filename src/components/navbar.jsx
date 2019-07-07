import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand navbar navbar-expand" href="/home">
                <center>
                  <img className="logo" alt="Brand" src="./img/fav-icon.png" />
                </center>
              </a>
            </div>
            {/* <ul className="nav justify-content-end​ navbar-style navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/news">
                  NEWS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  EVENT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
            </ul> */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
