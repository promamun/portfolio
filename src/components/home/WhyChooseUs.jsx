import React, { Component } from "react";
import whyImage1 from "../../assets/images/resource/faq-img.png";

class WhyChooseUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: -1,

      all_accordion: [
        {
          title: "Keyword & Market Research",
          text: "Sole always works to stay on top of the latest trends and best practices to apply to your company projects.",
        },
        {
          title: "Designing & Interactive Content",
          text: "Sole always works to stay on top of the latest trends and best practices to apply to your company projects.",
        },
        {
          title: "Social Media Promotion",
          text: "Sole always works to stay on top of the latest trends and best practices to apply to your company projects.",
        },
        {
          title: "Digital PR & Penalty Recovery",
          text: "Sole always works to stay on top of the latest trends and best practices to apply to your company projects.",
        },
      ],
    };
  }

  render() {
    let { all_accordion, position } = this.state;
    return (
      <div>
        <section className="faq-section">
          <div className="auto-container">
            <div className="row">
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image-box">
                    <figure className="image">
                      <img src={whyImage1} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="accordion-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title text-left">
                    <h6 className="subtitle">Why Choose Us</h6>
                    <h2>
                      Work with a dedicated <br />
                      SEO company
                    </h2>
                  </div>
                  <ul className="accordion-box">
                    {all_accordion.map((accordion, key) => {
                      return (
                        <li
                          className={`accordion block ${
                            position === key ? "active-block" : ""
                          }`}
                          key={key}
                        >
                          <div
                            className={`acc-btn ${
                              position === key ? "active" : ""
                            }`}
                            onClick={() => {
                              this.setState({ position: key });
                            }}
                          >
                            {accordion.title}
                            <div className="icon fa fa-arrow-circle-up" />
                          </div>
                          <div
                            className={`acc-content ${
                              position === key ? "current" : ""
                            } `}
                          >
                            <div className="content">
                              <p>{accordion.text}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default WhyChooseUs;
