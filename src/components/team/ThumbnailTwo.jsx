import React from "react";
import { Link } from "react-router-dom";

function ThumbnailTwo({
  image,
  facebook,
  twitter,
  dribbble,
  name,
  designation,
  bgImage
}) {
  return (
    <>
      <div className={bgImage}>
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
              <Link to={facebook}>
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link to={twitter}>
                <i className="fab fa-twitter"/>
              </Link>
            </li>
            <li>
              <Link to={dribbble}>
                <i className="fab fa-dribbble" />
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
