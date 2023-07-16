import React from "react";
import Thumbnail from "./Thumbnail";
import subscription from "./data/data" ;

function PricingPlans({ pricingTitle, packageTitle }) {
  
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
              <div className="tab active-tab" id="prod-monthly">
                <div className="content">
                  <div className="row clearfix">
                  {subscription.map((datas) => (
                    <Thumbnail
                      thumb1Title={datas.thumb1Title}
                      thumb1Price={datas.thumb1Price}
                      thumb1Month={datas.thumb1Month}
                      thumb1Analytics={datas.thumb1Analytics}
                      thumb1Keywords={datas.thumb1Keywords}
                      thumb1Social={datas.thumb1Social}
                      thumb1Optimize={datas.thumb1Optimize}
                      thumb1Support={datas.thumb1Support}
                      thumb1BuyNow={datas.thumb1BuyNow}
                    ></Thumbnail>
                  ))}
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
