import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ALLIMG1 from "../../assets/images/resource/service-center.png";
import WOW from "wowjs";

export default function Service() {
  useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);
  const BgImage = {
    backgroundImage: `url(images/background/10.png)`
  };
  const serviceBlock = {
    backgroundImage: "visibility: visible",
    "animation-duration": "1500ms",
    "animation-delay": "0ms",
    "animation-name": "fadeInLeft"
  };
  const serviceBlock1 = {
    backgroundImage: "visibility: visible",
    "animation-duration": "1500ms",
    "animation-delay": "250ms",
    "animation-name": "fadeInLeft"
  };
  const serviceBlock2 = {
    backgroundImage: "visibility: visible",
    "animation-duration": "1500ms",
    "animation-delay": "500ms",
    "animation-name": "fadeInLeft"
  };
  const serviceBlock3 = {
    backgroundImage: "visibility: visible",
    "animation-duration": "1500ms",
    "animation-delay": "0ms",
    "animation-name": "fadeInRight"
  };
  const serviceBlock4 = {
    backgroundImage: "visibility: visible",
    "animation-duration": "1500ms",
    "animation-delay": "250ms",
    "animation-name": "fadeInRight"
  };
  const serviceBlock5 = {
    backgroundImage: "visibility: visible",
    "animation-duration": "1500ms",
    "animation-delay": "500ms",
    "animation-name": "fadeInRight"
  };
  return (
    <div>
      <section className="services-section altrenate" style={BgImage}>
        <div className="container-fluid">
          <div className="sec-title text-center light">
            <h6 className="subtitle">Best Service For You</h6>
            <h2>
              Web Design & Development <br />
              Digital Marketing & SEO
            </h2>
          </div>
          <div className="inner-container">
            <div className="row clearfix">
              <div className="left-column pull-left col-xl-4 col-lg-12 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="service-block-two">
                    <div
                      className="inner-box wow fadeInLeft animated"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                      style={serviceBlock}
                    >
                      <div className="icon-box red">
                        <span className="icon flaticon flaticon-social-media" />
                      </div>
                      <div className="text-box">
                        <h4>
                          <Link to="/blog-detail">Laravel/PHP</Link>
                        </h4>
                        <p>
                          We create dynamic, secure, and scalable websites using
                          Laravel/PHP. Our expert team delivers feature-rich web
                          solutions with optimal performance and user-centric
                          design. Unlock your digital potential with us for
                          unprecedented success
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-block-two">
                    <div
                      className="inner-box wow fadeInLeft animated"
                      data-wow-delay="250ms"
                      data-wow-duration="1500ms"
                      style={serviceBlock1}
                    >
                      <div className="icon-box green">
                        <span className="icon flaticon flaticon-seo" />
                      </div>
                      <div className="text-box">
                        <h4>
                          <Link to="/blog-detail">WordPress/Wix</Link>
                        </h4>
                        <p>
                          We create captivating websites using WordPress, Wix.
                          Unleash your digital potential with our customizable,
                          user-friendly solutions for blogs, portfolios, and
                          e-commerce..
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-block-two">
                    <div
                      className="inner-box wow fadeInLeft animated"
                      data-wow-delay="500ms"
                      data-wow-duration="1500ms"
                      style={serviceBlock2}
                    >
                      <div className="icon-box light-blue">
                        <span className="icon flaticon flaticon-social-media" />
                      </div>
                      <div className="text-box">
                        <h4>
                          <Link to="/blog-detail">Shopify</Link>
                        </h4>
                        <p>
                          We specialize in creating visually stunning and
                          mobile-optimized Shopify stores that drive sales.
                          Experience e-commerce success with our customization
                          and ongoing support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="center-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                <div className="inner-column wow zoomIn" data-wow-delay="600ms">
                  <div className="image-box">
                    <figure>
                      <img src={ALLIMG1} alt="service center" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="right-column pull-right col-xl-4 col-lg-12 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="service-block-three">
                    <div
                      className="inner-box wow fadeInRight animated"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                      style={serviceBlock3}
                    >
                      <div className="icon-box blue">
                        <span className="icon flaticon flaticon-computer" />
                      </div>
                      <div className="text-box">
                        <h4>
                          <Link to="/blog-detail">
                            React Web Development(MERN)
                          </Link>
                        </h4>
                        <p>
                          Our agency pioneers in MERN (MongoDB, Express, React,
                          Node.js) stack development, bringing cutting-edge,
                          interactive web solutions to life. With our expertise
                          in React web development, we create dynamic,
                          feature-rich, and high-performance websites that
                          elevate your digital presence.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-block-three">
                    <div
                      className="inner-box wow fadeInRight animated"
                      data-wow-delay="250ms"
                      data-wow-duration="1500ms"
                      style={serviceBlock4}
                    >
                      <div className="icon-box purple">
                        <span className="icon flaticon flaticon-3d-modeling" />
                      </div>
                      <div className="text-box">
                        <h4>
                          <Link to="/blog-detail">
                            Golang backend Development
                          </Link>
                        </h4>
                        <p>
                          Experience high-performance web applications with our
                          Golang backend expertise. Scalable, concurrent, and
                          secure solutions for your digital success.From speedy
                          response times to future-ready scalability, our Golang
                          backend development drives your application's
                          efficiency and growth.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="service-block-three">
                    <div
                      className="inner-box wow fadeInRight animated"
                      data-wow-delay="500ms"
                      data-wow-duration="1500ms"
                      style={serviceBlock5}
                    >
                      <div className="icon-box yellow">
                        <span className="icon flaticon flaticon-computer" />
                      </div>
                      <div className="text-box">
                        <h4>
                          <Link to="/blog-detail">
                            Python Django Framework <br />
                            Empowering Web Solutions
                          </Link>
                        </h4>
                        <p>
                          Streamline your online presence with our expert Django
                          team. We build secure, scalable, and versatile web
                          applications, ensuring rapid development and seamless
                          integration. Experience the efficiency of Python
                          Django and revolutionize your digital journey.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
