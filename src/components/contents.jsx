import React, { Component } from "react";
import axios from "axios";
import parse from "html-react-parser";
import Modal from "react-awesome-modal";

import { Link } from "react-router-dom";
import moment from "moment";
class Content extends Component {
  state = {
    data: null,
    visible: false
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

  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    console.log(this.state.data);

    return (
      <div>
        <button className="ui button" onClick={() => this.openModal()}>
          Show Modal
        </button>
        <Modal
          visible={this.state.visible}
          width="400"
          height="300"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <h1>Title</h1>
            <p>Some Contents</p>
            <a href="javascript:void(0);" onClick={() => this.closeModal()}>
              Close
            </a>
          </div>
        </Modal>
        <div className="container">
          <div className="row display-flex">
            {!this.state.data
              ? "loading..."
              : this.state.data.map((data, key) => (
                  <React.Fragment>
                    <div
                      key={data.pubDate}
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
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
