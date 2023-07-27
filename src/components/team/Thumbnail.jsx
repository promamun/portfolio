import eact from "react";
import { Link } from "react-router-dom";

function Thumbnail({ name, designation, image }) {
  return (
    <>
      <div className="team-block col-lg-3 col-md-6 col-sm-12">
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
              <Link target="_blank" to="#">
                <i className="fab fa-facebook-f" />
              </Link>
            </li>
            <li>
              <Link target="_blank" to="#">
                <i className="fab fa-twitter" />
              </Link>
            </li>
            <li>
              <Link to="#">
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
