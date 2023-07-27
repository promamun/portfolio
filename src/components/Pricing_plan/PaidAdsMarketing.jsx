import React from "react";
import PackageThree from "./PaidAdsPackage";
import PaidaddMarketing from "./data/PaidAdsMarketing";

function PriceCategoryThree({ packageTitle }) {
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
                    {PaidaddMarketing.map((item) => (
                      <PackageThree
                        backgroundImage={item.backgroundImage}
                        thumb3Title={item.thumb3Title}
                        thumb3Price={item.thumb3Price}
                        thumb3Month={item.thumb3Month}
                        thumb3Analytics={item.thumb3Analytics}
                        thumb3Keywords={item.thumb3Keywords}
                        thumb3Social={item.thumb3Social}
                        thumb3Optimize={item.thumb3Optimize}
                        thumb3Support={item.thumb3Support}
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

export default PriceCategoryThree;
