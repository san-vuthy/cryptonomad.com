import React, { Component } from "react";

class NewNav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container">
            <div className="navbar-header navbar-header-style">
              <a className="navbar-brand navbar navbar-expand" href="#">
                <img id="cryp-logo1" alt="Brand" src="./img/M.png" />
              </a>
              <a className="navbar-brand navbar navbar-expand" href="/home">
                <img id="cryp-logo2" alt="Brand" src="./img/cryp.png" />
              </a>
            </div>
            <ul className="nav justify-content-end navbar-nav navbar-style nav-navbar">
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  NEWS
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  EVENT
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NewNav;
