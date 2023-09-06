import React, { Component } from "react";
import CustomInput from "./CustomInput";
import Button from "./Button";
import img from "../../assets/images/resource/contact-1.png";
import LoadingOverlay from "react-loading-overlay";
import { message } from "antd";
import CrossIconBrodcamp from "../broadCamp/CrossIconBrodcamp";
import {Col, Container, Form, Row} from "react-bootstrap";

class ContactFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      name: "",
      email: "",
      website: "",
      message: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();

    this.upload();
  };

  upload = async () => {
    this.setState({ isLoading: true });
    let { name, email, website } = this.state;
    const res = await fetch(
      `https://portfolio-c3343-default-rtdb.firebaseio.com/portfolio.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          website,
          message: this.state.message,
        }),
      }
    );

    this.setState({ isLoading: false });

    if (res) {
      this.setState({
        name: "",
        email: "",
        website: "",
        message: "",
      });
      message.success("THANK YOU!!!!");
    }
  };
  render() {
    return (
      <LoadingOverlay active={this.state.isLoading} spinner text="Loading ...">
        <div>
          <section className="contact-section altrenate">
            <CrossIconBrodcamp/>
            <div className='auto-container'>
              <Row>
                <Col lg='6' md='12' sm='12' className="form-column">
                  <div className="inner-column">
                    <div className="sec-title text-left">
                      <h6 className="subtitle">Get in Touch</h6>
                      <h2>Don’t hesitate to Contact With Us</h2>
                    </div>
                    <div className="contact-form">
                      <Form onSubmit={this.handleSubmit}>
                        <Row>
                          <Col lg='12' md='12' sm='12' className="form-group">
                            <CustomInput
                              type="text"
                              placeholder="Name*"
                              name="name"
                              value={this.state.name}
                              onChange={(e) => {
                                this.setState({ name: e.target.value });
                              }}
                            />
                          </Col>
                          <Col lg='12' md='12' sm='12' className="form-group">
                            <CustomInput
                              type="email"
                              placeholder="Email*"
                              name="email"
                              value={this.state.email}
                              onChange={(e) => {
                                this.setState({ email: e.target.value });
                              }}
                            />
                          </Col>
                          <Col lg='12' md='12' sm='12' className="form-group">
                            <CustomInput
                              type="url"
                              placeholder="Website"
                              name="website"
                              value={this.state.website}
                              onChange={(e) => {
                                this.setState({ website: e.target.value });
                              }}
                            />
                          </Col>
                          <Col lg='12' md='12' sm='12' className="form-group">
                            <textarea
                              name="message"
                              placeholder="Massage*"
                              value={this.state.message}
                              onChange={(e) => {
                                this.setState({ message: e.target.value });
                              }}
                            />
                          </Col>
                          <Col lg='12' md='12' sm='12' className="form-group text-left">
                            <Button
                              type="submit"
                              className="theme-btn btn-style-one"
                            >
                              Send Now
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </div>
                </Col>
                <Col lg='6' md='12' className="image-column text-right">
                  <div
                    className="image-box parallax-scene-4 wow fadeInRight"
                    data-wow-delay="100ms"
                    data-wow-duration="100ms"
                  >
                    <div className="image" data-depth="0.30">
                      <img src={img} alt="ContactFrom Image" />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      </LoadingOverlay>
    );
  }
}

export default ContactFrom;
