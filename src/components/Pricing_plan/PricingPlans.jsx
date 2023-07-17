import React from "react";
import Thumbnail from "./Thumbnail";
import subscription from "./data/data";

function PricingPlans({ pricingTitle, packageTitle }) {
 
  return (
    <div>
      <section className="pricing-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h6 className="subtitle">{pricingTitle}</h6>
            <h2>{packageTitle}</h2>
          </div>
          <div className="pricing-tabs tabs-box">
            <div className="tabs-content">
              <div className="tab active-tab">
                <div className="content">
                  <div className="row clearfix">
                    {subscription.map((data) => (
                      <Thumbnail
                        thumb1Title={data.thumb1Title}
                        thumb1Price={data.thumb1Price}
                        thumb1Month={data.thumb1Month}
                        thumb1Analytics={data.thumb1Analytics}
                        thumb1Keywords={data.thumb1Keywords}
                        thumb1Social={data.thumb1Social}
                        thumb1Optimize={data.thumb1Optimize}
                        thumb1Support={data.thumb1Support}
                        thumb1BuyNow={data.thumb1BuyNow}
                        backgroundImage={data.backgroundImage}
                      />
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
