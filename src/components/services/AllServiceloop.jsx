import React from "react";
import { Link } from "react-router-dom";

export default function AllServiceloop({id,title,short_des,description,slug}) {
    const BgImage = {
        backgroundImage: `url('images/services/9.png')`,
      };
      const BgImage1 = {
        backgroundImage: `url('images/services/8.png')`,
      };
      const BgImage2 = {
        backgroundImage: `url('images/services/10.png')`,
      };
  return (
    <>
      <div
        className="invseted-cloumn col-lg-6 col-md-12 wow fadeInRight"
        data-wow-delay="400ms"
      >
        <div className="invested-box">
          <div className="icon-box" style={BgImage}>
            <div className="count count-2">02</div>
            <i className="flaticon flaticon-statistic" />
          </div>
          <div className="text-box">
            <h4>
              <Link to={`/service/${slug}`}>{title} </Link>
            </h4>
            <p>
             {short_des}
            </p>
            <Link to="#" className="readmore">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
