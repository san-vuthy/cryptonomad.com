import React, { Component } from "react";
import ContentShow from "./content";
import axios from "axios";
import parse from "html-react-parser";

import { Link } from "react-router-dom";
import moment from "moment";
export class Content extends Component {
  state = {
    data: null
  };
  componentDidMount() {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cryptonomad"
      )
      .then(res => {
        this.setState({ data: res.data.items });
      });
  }
  render() {
    console.log(this.state.data);

    return (
      <div>
        <div className="container">
          <div className="row display-flex">
            {!this.state.data
              ? "loading..."
              : this.state.data.reverse().map((data, key) => (
                  <React.Fragment>
                    <div
                      key={key}
                      className=" col-sm-6 col-md-4 content-display"
                    >
                      <div className="card-deck">
                        <div className="card">
                          <Link to="/">
                            <img
                              className="card-img-top"
                              src={data.thumbnail}
                              alt="Card image cap"
                            />
                          </Link>
                          <div id="card-content" className="card-body">
                            <a className="fix" href="Template">
                              <h3 className="card-title">
                                {data.title.length > 40
                                  ? data.title.substring(0, 40) + "..."
                                  : data.title}
                              </h3>
                            </a>
                            <p className="card-text">
                              {parse(data.content.substring(0, 300) + "...")}
                            </p>
                          </div>
                          <div className="card-footer">
                            <small className="text-muted">
                              Last updated:{" "}
                              {moment(data.pubDate)
                                .startOf("day")
                                .fromNow()}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
            {/* {} */}
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
