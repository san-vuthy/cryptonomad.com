import React, { Component } from "react";
import { Link } from "react-router-dom";
// import template from "./Template";

export default function content(props) {
  const { id, img, header, para } = props.contentvalue;
  return (
    <React.Fragment>
      <div key={id} className=" col-sm-6 col-md-4">
        <div className="card-deck">
          <div className="card">
            <Link to="/">
              <img className="card-img-top" src={img} alt="Card image cap" />
            </Link>
            <div id="card-content" className="card-body">
              <a className="fix" href="Template">
                <h3 className="card-title">{header.substring(0, 40)}</h3>
              </a>
              <p className="card-text">{para.substring(0, 200)}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
