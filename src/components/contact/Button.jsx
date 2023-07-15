import React from "react";

function Button({className,type,name,children}) {
  return (
    <div>
      <button
      className={className}
      type={type}
      name={name}
      ><span className="txt">{children}</span>
      </button>
    </div>
  );
}

export default Button;
