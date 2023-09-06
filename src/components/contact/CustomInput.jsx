import React from "react";

function CustomInput({ type, placeholder, onChange, value }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default CustomInput;
