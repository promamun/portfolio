import React from "react";
export default function DigitalMarketingService() {
  const BgImg = {
    backgroundImage: `url(images/background/17.png)`
  };
  return (
    <>
      <section className="services-section style-three" style={BgImg}>
        <div className="upper-box">
          <div className="auto-container">
            <div className="sec-title text-center">
              <h6 className="subtitle">Best Service Provider</h6>
              <h2>
                Our digital marketing solution <br />
                services for all
              </h2>
            </div>
          </div>
        </div>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="service-block-six wow fadeInDown"
                data-wow-delay="100ms"
                data-wow-duration="100ms"
              >
                <div className="inner-box">
                  <div className="lower-content">
                    <h4>
                      <a href="service-detail.html">
                        Social Media <br />
                        Marketing
                      </a>
                    </h4>
                    <p>
                      Elevate Your Brand's Digital Presence. Our social media
                      marketing services unlock the power of social platforms to
                      drive brand awareness, engagement, and achieve impactful
                      results..
                    </p>
                  </div>
                  <div className="image-box">
                    <figure>
                      <img src="images/services/16.png" alt="Service Image" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="service-block-six wow fadeInDown"
                data-wow-delay="300ms"
                data-wow-duration="300ms"
              >
                <div className="inner-box">
                  <div className="lower-content">
                    <h4>
                      <a href="service-detail.html">
                        Google Ads <br />
                        Sense
                      </a>
                    </h4>
                    <p>
                      Google Ads is a product that you can use to promote your
                      business, help sell products or services, raise awareness,
                      and increase traffic to your website.
                    </p>
                  </div>
                  <div className="image-box">
                    <figure>
                      <img src="images/services/17.png" alt="Service Image" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="service-block-six wow fadeInDown"
                data-wow-delay="500ms"
                data-wow-duration="500ms"
              >
                <div className="inner-box">
                  <div className="lower-content">
                    <h4>
                      <a href="service-detail.html">
                        Facebook Marketing <br />
                      </a>
                    </h4>
                    <p>
                      The Power of Facebook for Business Growth. Unlock
                      the potential of the world's largest social media platform
                      Facebook advertising services help your business build its
                      online following, increase its brand awareness..
                    </p>
                  </div>
                  <div className="image-box">
                    <figure>
                      <img src="images/services/18.png" alt="Service Image" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="service-block-six wow fadeInDown"
                data-wow-delay="700ms"
                data-wow-duration="700ms"
              >
                <div className="inner-box">
                  <div className="lower-content">
                    <h4>
                      <a href="service-detail.html">SEO Optimization</a>
                    </h4>
                    <p>
                      Boost Your Online Visibility and Drive Organic Traffic.
                      SEO services are search engine optimization services
                      intended to increase visibility and ultimately organic
                      search traffic to websites.
                    </p>
                  </div>
                  <div className="image-box">
                    <figure>
                      <img src="images/services/19.png" alt="Service Image" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
