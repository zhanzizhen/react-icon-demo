import React from "react";
import "./Icon.css";

const importAll = (requireContext) => {
  requireContext.keys().forEach(requireContext);
};

importAll(require.context("./svg", true, /\.svg$/));

function Icon({ className = "", type, ...restProps }) {
  return (
    <svg className={`icon ${className}`} aria-hidden="true" {...restProps}>
      <use href={`#${type}`} />
    </svg>
  );
}

export default Icon;
