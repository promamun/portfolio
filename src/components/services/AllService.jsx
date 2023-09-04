import React from "react";
import ServiceData from "./data";
import AllServiceloop from "./AllServiceloop";

export default function AllService() {
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
                key={data.id}
                id={data.id}
                slug={data.slug}
                title={data.title}
                short_des={data.short_des}
                description={data.description}
                image={data.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
