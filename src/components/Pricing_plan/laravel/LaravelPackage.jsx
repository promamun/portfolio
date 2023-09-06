import React from 'react'
import { Link } from 'react-router-dom';
import {Col} from "react-bootstrap";

function LaravelPackage({id, Title,Price,PT,PD,PD1,PD2,PD3,PD4,PD5,PD6,PD7,PDRevision,PDSupport}) {
    let bgImage = "url('images/resource/price-shape.png')";
  switch (id) {
    case 1:
      bgImage = "url('images/resource/price-shape-1.png')";
      break;
    case 2:
      bgImage = "url('images/resource/price-shape-2.png')";
      break;
    case 3:
      bgImage = "url('images/resource/price-shape.png')";
      break;
    case 4:
      bgImage = "url('images/resource/price-shape-1.png')";
      break;
    case 5:
      bgImage = "url('images/resource/price-shape-2.png')";
      break;
    default:
      // If id doesn't match any case, the default background image will be used
      break;
  }
  const BgImg = {
    backgroundImage: bgImage,
  }
  return (
    <>
    <Col lg="4" md="6" sm="12" className="price-block">
      <div className="inner-box">
        <div className="packge-plan" style={BgImg}>
          <h6>{Title} </h6>
          <div className="price">${Price} </div>
          <span className="plan-text">{PT}</span>
        </div>
        <div className="list-packges-area">
          <ul className="price-list">
            <li className="active">{PD}</li>
            <li className="active">{PD1}</li>
            <li className="active">{PD2}</li>
            <li className="active">{PD3} </li>
            <li className="active">{PD4}</li>
            <li className="active">{PD5}</li>
            <li className="active">{PD6}</li>
            <li className="active">{PD7}</li>
            <li>{PDRevision} </li>
            <li>{PDSupport} </li>
          </ul>
          <div className="buy-btn-area text-left">
            <Link to="/contact" className="theme-btn btn-style-two buy-btn">
              <span className="txt">Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  </>
  )
}

export default LaravelPackage