import React from "react";
import PackageTwo from "./smMarketingPackage";
import SocialMarketing from "./data/SocialMideaMarketing";

function PriceCategoryTwo({ packageTitle }) {
  return (
    <div>
      <section className="pricing-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>{packageTitle}</h2>
          </div>
          <div className="pricing-tabs tabs-box">
            <div className="tabs-content">
              <div className="tab active-tab">
                <div className="content">
                  <div className="row clearfix">
                    {SocialMarketing.map((item) => (
                      <PackageTwo
                        backgroundImage={item.backgroundImage}
                        thumb2Title={item.thumb2Title}
                        thumb2Price={item.thumb2Price}
                        thumb2Month={item.thumb2Month}
                        thumb2Analytics={item.thumb2Analytics}
                        thumb2Keywords={item.thumb2Keywords}
                        thumb2Social={item.thumb2Social}
                        thumb2Optimize={item.thumb2Optimize}
                        thumb2Support={item.thumb2Support}
                        pricingTitle={item.pricingTitle}
                        packageTitle={item.packageTitle}
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

export default PriceCategoryTwo;
