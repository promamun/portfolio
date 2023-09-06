import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AllServiceloop({id,title,short_des,slug,image}) {
  return (
    <>
      <Col lg="6" md="12"
        className="invseted-cloumn wow fadeInRight"
        data-wow-delay="400ms"
      >
        <div className="invested-box">
          <div className="icon-box" style={{ backgroundImage: `url(${image})`}}>
            <div className="count count-2">{id}</div>
          </div>
          <div className="text-box">
            <h4>
            <Link to={`/service/${slug}`}>{title} </Link>
            </h4>
            <p>
             {short_des}
            </p>
            <Link to={`/service/${slug}`} className="readmore">
              Read More
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
}
