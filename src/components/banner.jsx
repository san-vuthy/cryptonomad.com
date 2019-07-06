import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div>
        <header className="header-background">
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

export default Banner;
