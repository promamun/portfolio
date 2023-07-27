import React from "react";
import { Link } from "react-router-dom";

function Thumbnail({ name, designation, image,facebook,twitter,dribbble,bgImage }) {
const defaultClass="col-lg-3 col-md-6 col-sm-12"
  return (
    <>
      <div className={`${bgImage} ${defaultClass}`} >
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
              <Link target="_blank" to={facebook}>
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link target="_blank" to={twitter}>
                <i className="fab fa-twitter" />
              </Link>
            </li>
            <li>
              <Link to={dribbble} >
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

export default Thumbnail;
