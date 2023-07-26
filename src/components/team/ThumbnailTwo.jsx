import React from "react";
import { Link } from "react-router-dom";

function ThumbnailTwo({
  image,
  facebook,
  twitter,
  dribbble,
  name,
  designation
}) {
  return (
    <>
      <div className="team-block team-block-1">
        <div className="inner-box">
          <div className="image-box">
            <div className="image">
              <Link to="/team">
                <img src={image} alt="" />
              </Link>
            </div>
          </div>
          <ul className="social-links">
            <li>
              <Link to="#">
                <i className={facebook} />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className={twitter} />
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className={dribbble} />
              </Link>
            </li>
          </ul>
          <div className="text-box">
            <h4 className="name">
              <Link to="/team">{name}</Link>
            </h4>
            <span className="designation">{designation}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThumbnailTwo;
