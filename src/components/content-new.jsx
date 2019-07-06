import React from "react";
export default function content(props) {
  const { id, img, header, para } = props.contentnew;
  return (
    <React.Fragment>
      <div id="card-container" key={id} className="container">
        <div id="con-card" className="card">
          <a href="#">
            <img id="img-news" src={img} className="card-img-top" alt="..." />
          </a>
          <div id="news-body" class="card-body">
            <a className="fix" href="#">
              <h5 className="card-title">{header}</h5>
            </a>
            <p className="card-text">{para.substring(0, 150)}</p>
            <p className="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
