import React from "react";
import ShopifyData from "./data/ShopifyData";
import ShopifyPackage from "./ShopifyPackage";

function ShopiFy({ packageTitle, pricingTitle }) {
  return (
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
                  {ShopifyData.map((data) => (
                    <ShopifyPackage
                      id={data.id}
                      Title={data.Title}
                      Price={data.Price}
                      PT={data.PT}
                      PD={data.PD}
                      PD1={data.PD1}
                      PD2={data.PD2}
                      PD3={data.PD3}
                      PD4={data.PD4}
                      PD5={data.PD5}
                      PD6={data.PD6}
                      PD7={data.PD7}
                      PDRevision={data.PDRevision}
                      PDSupport={data.PDSupport}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopiFy;
