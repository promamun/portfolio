import React, { Component } from "react";
import whyImage1 from "../../assets/images/resource/faq-img.png";

class WhyChooseUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: -1,

      all_accordion: [
        {
          title: "Web Design & Development",
          text: "Crafting Exceptional Digital Experiences. Our web design and development services combine creativity and technical expertise to create visually stunning and highly functional websites. We take a user-centric approach, ensuring seamless navigation, responsive design, and engaging user interfaces. From concept to launch, we meticulously craft websites that captivate audiences, drive conversions, and elevate your online presence.",
        },
        {
          title: "WordPress, Shopify, and Wix (CMS Development)",
          text: "Unlocking the Power of E-commerce Platforms. Our expertise in WordPress, Shopify, and Wix development empowers businesses to thrive in the digital marketplace. We create stunning and scalable websites, seamlessly integrating powerful e-commerce functionalities. With our tailored solutions, you can confidently showcase your products, engage customers, and drive sales, all while enjoying the flexibility and ease-of-use offered by these popular platforms.",
        },
        {
          title: "Social Media Marketing",
          text: "Elevate Your Brand's Digital Presence. Our social media marketing services unlock the power of social platforms to drive brand awareness, engagement, and growth. We create tailored strategies that target your audience, crafting compelling content and delivering it at the right time and place. With our expertise, your brand can harness the potential of social media to connect with customers, build a loyal community, and achieve impactful results.",
        },
        {
          title: "Facebook Marketing",
          text: "Harness the Power of Facebook for Business Growth. Our Facebook marketing services unlock the potential of the world's largest social media platform to drive targeted reach, engagement, and conversions. We create compelling campaigns tailored to your business objectives, leveraging Facebook's sophisticated targeting capabilities and ad formats. By strategically reaching your target audience, we help you build brand awareness, foster customer loyalty, and achieve tangible results through the power of Facebook marketing.",
        },
        {
          title: "SEO Optimization",
          text: "Boost Your Online Visibility and Drive Organic Traffic. Our SEO optimization services propel your website to the top of search engine rankings, ensuring maximum online visibility. We employ advanced strategies and techniques to optimize your website's structure, content, and performance. By targeting relevant keywords and enhancing your website's user experience, we help drive organic traffic, increase conversions, and establish your brand as an authority in your industry.",
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
                      Web Development & Digital Marketing company
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
