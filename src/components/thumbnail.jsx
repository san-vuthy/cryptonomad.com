import React, { Component } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import moment from "moment";

class Thumbnail extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    await axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cryptonomad"
      )
      .then(res => {
        this.setState({ data: res.data.items[res.data.items.length - 1] });
      });
  }
  render() {
    console.log(this.state.data.content);
    const { title, content, thumbnail } = this.state.data;
    return (
      <div className="container">
        <div className="thumbnail">
          <div className="row">
            <div className="col-md-8">
              <a href="#">
                <img
                  className="img-responsive"
                  src={thumbnail}
                  width={"100%"}
                />
              </a>
            </div>
            <div className="col-md-4">
              <div className="caption">
                <a href="#">
                  <h2 className="h2">{title}</h2>
                </a>
                {/* <p className="para">
                  {!this.state.data
                    ? "loading..."
                    : parse(this.state.data.content.substring(0, 300) + "...")}
                </p> */}
                <p>
                  {!this.state.data
                    ? "loading..."
                    : parse(
                        `${
                          content
                            ? content.substring(0, 660) + "..."
                            : "loading..."
                        }`
                      )}
                </p>
                <p className="caption-footer">
                  <a href="#" className="btn">
                    <span
                      className="glyphicon glyphicon-heart"
                      aria-hidden="true"
                    />{" "}
                    Like it
                  </a>
                  <a href="#" className="btn">
                    <span
                      className="glyphicon glyphicon-share-alt"
                      aria-hidden="true"
                    />{" "}
                    Share it
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
}

export default Thumbnail;
