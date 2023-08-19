import React from "react";
import ServiceData from "./data";
import AllServiceloop from "./AllServiceloop";

export default function AllService() {
  const BgImage = {
    backgroundImage: `url('images/services/9.png')`
  };
  const BgImage1 = {
    backgroundImage: `url('images/services/8.png')`
  };
  const BgImage2 = {
    backgroundImage: `url('images/services/10.png')`
  };
  return (
    <div>
      <section className="invested-sec">
        <div className="auto-container">
          <div className="row">
            <div className="title-cloumn col-lg-6 col-md-12 wow fadeInLeft">
              <div className="sec-title text-left">
                <h6 className="subtitle">Solutions That Matter</h6>
                <h2>
                  Directed techniques that greatest return for money invested
                </h2>
              </div>
            </div>
            {ServiceData.map((data) => (
              <AllServiceloop
                id={data.id}
                title={data.title}
                short_des={data.short_des}
                description={data.description}
                slug={data.slug}
              />
            ))}
            
          </div>
        </div>
      </section>
    </div>
  );
}
