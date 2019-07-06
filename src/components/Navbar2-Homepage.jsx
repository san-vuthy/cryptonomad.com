import React, { Component } from "react";

export class Navbar2 extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="container">
            <div className="row">
              <div className="col-10">
                <a href="#">
                  <img
                    className="img-fluid"
                    alt="img-responsive"
                    src="./img/cryptonomad-w.png"
                  />
                </a>
                <p className="par">Trusted place to hear about crypto news</p>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar2;
