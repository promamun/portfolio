import React, { Component } from "react";
import CustomInput from "./CustomInput";
import Button from "./Button";
import img from "../../assets/images/resource/contact-1.png";
import LoadingOverlay from "react-loading-overlay";
import { message } from "antd";

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
    const BgImage = {
      backgroundImage: `url(images/main-banner/cross-icon.png)`,
    };
    const BgImage1 = {
      backgroundImage: `url(images/main-banner/cross-icon-1.png)`,
    };
    const BgImage2 = {
      backgroundImage: `url(images/main-banner/cross-icon-2.png)`,
    };
    const BgImage3 = {
      backgroundImage: `url(images/main-banner/cross-icon-3.png)`,
    };
    const BgImage4 = {
      backgroundImage: `url(images/main-banner/cross-icon-4.png)`,
    };
    const BgImage5 = {
      backgroundImage: `url(images/main-banner/cross-icon-5.png)`,
    };
    const BgImage6 = {
      backgroundImage: `url(images/main-banner/cross-icon-6.png)`,
    };
    const BgImage8 = {
      backgroundImage: `url(images/main-banner/cross-icon-8.png)`,
    };
    const BgImage9 = {
      backgroundImage: `url(images/main-banner/cross-icon-9.png)`,
    };
    const BgImage10 = {
      backgroundImage: `url(images/main-banner/cross-icon-10.png)`,
    };

    return (
      <LoadingOverlay active={this.state.isLoading} spinner text="Loading ...">
        <div>
          <section className="contact-section altrenate">
            <div className="pattern-layer-one" style={BgImage} />
            <div className="pattern-layer-two" style={BgImage5} />
            <div className="pattern-layer-three" style={BgImage6} />
            <div className="pattern-layer-four" style={BgImage} />
            <div className="pattern-layer-five" style={BgImage1} />
            <div className="pattern-layer-six" style={BgImage2} />
            <div className="pattern-layer-seven" style={BgImage8} />
            <div className="pattern-layer-eight" style={BgImage5} />
            <div className="pattern-layer-nine" style={BgImage10} />
            <div className="pattern-layer-ten" style={BgImage9} />
            <div className="pattern-layer-eleven" style={BgImage3} />
            <div className="pattern-layer-tweleve" style={BgImage4} />
            <div className="auto-container">
              <div className="row">
                <div className="form-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="sec-title text-left">
                      <h6 className="subtitle">Get in Touch</h6>
                      <h2>Get Free Consultation?</h2>
                    </div>
                    <div className="contact-form">
                      <form onSubmit={this.handleSubmit}>
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <CustomInput
                              type="text"
                              placeholder="Name"
                              name="name"
                              value={this.state.name}
                              onChange={(e) => {
                                this.setState({ name: e.target.value });
                              }}
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <CustomInput
                              type="email"
                              placeholder="Email"
                              name="email"
                              value={this.state.email}
                              onChange={(e) => {
                                this.setState({ email: e.target.value });
                              }}
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <CustomInput
                              type="url"
                              placeholder="Website"
                              name="website"
                              value={this.state.website}
                              onChange={(e) => {
                                this.setState({ website: e.target.value });
                              }}
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                            <textarea
                              name="message"
                              placeholder="Massage"
                              value={this.state.message}
                              onChange={(e) => {
                                this.setState({ message: e.target.value });
                              }}
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 form-group text-left">
                            <Button
                              type="submit"
                              className="theme-btn btn-style-one"
                            >
                              Send Now
                            </Button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="image-column col-lg-6 col-md-12 text-right">
                  <div
                    className="image-box parallax-scene-4 wow fadeInRight"
                    data-wow-delay="100ms"
                    data-wow-duration="100ms"
                  >
                    <div className="image" data-depth="0.30">
                      <img src={img} alt="ContactFrom Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </LoadingOverlay>
    );
  }
}

export default ContactFrom;
