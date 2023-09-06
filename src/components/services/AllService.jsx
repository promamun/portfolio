import React from "react";
import ServiceData from "./data";
import AllServiceloop from "./AllServiceloop";
import { Col, Row } from "react-bootstrap";

export default function AllService() {
  return (
    <div>
      <section className="invested-sec">
        <div className="auto-container">
          <Row>
            <Col lg="6" md="12" className="title-cloumn wow fadeInLeft">
              <div className="sec-title text-left">
                <h6 className="subtitle">Solutions That Matter</h6>
                <h2>
                  Directed techniques that greatest return for money invested
                </h2>
              </div>
            </Col>
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
          </Row>
        </div>
      </section>
    </div>
  );
}
