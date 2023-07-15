import React from "react";
import { Link } from "react-router-dom";

function Button({ className, type, name, children, To }) {
  if (To) {
    return (
      <div>
        <Link to={To} className={className}>
          <span className="txt">{children}</span>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <button className={className} type={type} name={name}>
          <span className="txt">{children}</span>
        </button>
      </div>
    );
  }
}

export default Button;
