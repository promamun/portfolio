import React from "react";

function CustomInput({type,placeholder}) {
  return (
    <div>
      <input type={type}  placeholder={placeholder} required />
    </div>
  );
}

export default CustomInput;
