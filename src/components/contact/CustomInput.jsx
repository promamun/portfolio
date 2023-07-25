import React from "react";

function CustomInput({ type, placeholder, onChange, value }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default CustomInput;
