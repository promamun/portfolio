import React from "react";

function PackageThree({
  thumb3Title,
  thumb3Price,
  thumb3Month,
  thumb3Analytics,
  thumb3Keywords,
  thumb3Social,
  thumb3Optimize,
  thumb3Support,
  backgroundImage
}) {
  return (
    <>
      <div className="price-block col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box">
          <div className="packge-plan" style={{ backgroundImage }}>
            <h6>{thumb3Title} </h6>
            <div className="price">{thumb3Price} </div>
            <span className="plan-text">{thumb3Month}</span>
          </div>
          <div className="list-packges-area">
            <ul className="price-list">
              <li className="active">{thumb3Analytics}</li>
              <li className="active">{thumb3Keywords} </li>
              <li className="active">{thumb3Social}</li>
              <li>{thumb3Optimize} </li>
              <li>{thumb3Support} </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageThree;
