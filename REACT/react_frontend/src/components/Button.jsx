import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: "10px 20px", marginTop: "10px" }}>
      {label}
    </button>
  );
};

export default Button;
