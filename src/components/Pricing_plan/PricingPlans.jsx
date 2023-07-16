import React from "react";

function PricingPlans({pricingTitle,packageTitle,children}) {
  const BgImage = {
    backgroundImage: `url('images/resource/price-shape-1.png')`
  };
  const BgImage1 = {
    backgroundImage: `url('images/resource/price-shape.png')`
  };
  const BgImage2 = {
    backgroundImage: `url('images/resource/price-shape-2.png')`
  };
  return (
    <div>
      <section className="pricing-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h6 className="subtitle">{pricingTitle}</h6>
            <h2>
              {packageTitle}
            </h2>
          </div>
          <div className="pricing-tabs tabs-box">
            <div className="tabs-content">
              <div className="tab active-tab">
                <div className="content">
                  <div className="row clearfix">
                    <div className="price-block col-lg-4 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="packge-plan" style={BgImage1}>
                          <h6>Starter Plan</h6>
                          <div className="price">$29.99</div>
                          <span className="plan-text">per month</span>
                        </div>
                        <div className="list-packges-area">
                          <ul className="price-list">
                            <li className="active">25 Analytics Campaign</li>
                            <li className="active">1,300 Keywords</li>
                            <li className="active">25 Social Media Reviews</li>
                            <li>1 Free Optimization</li>
                            <li>24/7 Support</li>
                          </ul>
                          <div className="buy-btn-area text-left">
                            <a
                              href="#"
                              className="theme-btn btn-style-two buy-btn"
                            >
                              <span className="txt">Buy Now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="price-block col-lg-4 col-md-6 col-sm-12">
                      <div className="inner-box active">
                        <div className="packge-plan" style={BgImage}>
                          <h6>BUSINESS</h6>
                          <div className="price">$59.99</div>
                          <span className="plan-text">per month</span>
                        </div>
                        <div className="list-packges-area">
                          <ul className="price-list">
                            <li className="active">25 Analytics Campaign</li>
                            <li className="active">1,300 Keywords</li>
                            <li className="active">25 Social Media Reviews</li>
                            <li>1 Free Optimization</li>
                            <li>24/7 Support</li>
                          </ul>
                          <div className="buy-btn-area text-left">
                            <a
                              href="#"
                              className="theme-btn btn-style-two buy-btn"
                            >
                              <span className="txt">Buy Now</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="price-block col-lg-4 col-md-6 col-sm-12">
                      <div className="inner-box">
                        <div className="packge-plan" style={BgImage2}>
                          <h6>PREMIUM</h6>
                          <div className="price">$79.99</div>
                          <span className="plan-text">per month</span>
                        </div>
                        <div className="list-packges-area">
                          <ul className="price-list">
                            <li className="active">25 Analytics Campaign</li>
                            <li className="active">1,300 Keywords</li>
                            <li className="active">25 Social Media Reviews</li>
                            <li>1 Free Optimization</li>
                            <li>24/7 Support</li>
                          </ul>
                          <div className="buy-btn-area text-left">
                            <a
                              href="#"
                              className="theme-btn btn-style-two buy-btn"
                            >
                              <span className="txt">Buy Now</span>
                            </a>
                          </div>
                        </div>
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
export default PricingPlans;
