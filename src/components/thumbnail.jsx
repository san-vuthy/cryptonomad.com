import React, { Component } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import moment from "moment";
import Modal from "react-awesome-modal";

class Thumbnail extends Component {
  state = {
    data: [],
    visible: false
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

  openModal = ({ ...data }) => {
    this.setState({
      visible: true
    });
  };

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    console.log(this.state.data.content);
    const { title, content, thumbnail } = this.state.data;
    return (
      <React.Fragment>
        <div className="ModalOverFlow">
          <Modal
            visible={this.state.visible}
            effect="fadeInUp"
            width="50%"
            height="80%"
            onClickAway={() => this.closeModal()}
          >
            <div className="news_modal">
              <img className="ui fluid image" src={thumbnail} />
              <h1>{title}</h1>
              <p>
                {!this.state.data
                  ? "loading..."
                  : parse(`${content ? content : "loading..."}`)}
              </p>
            </div>
          </Modal>
        </div>
        <div className="container">
          <div
            className="thumbnail"
            onClick={() => {
              this.openModal();
            }}
          >
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
      </React.Fragment>
      // </div>
    );
  }
}

export default Thumbnail;
