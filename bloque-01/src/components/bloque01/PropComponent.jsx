import React from "react";
// import PropTypes from "prop-types";

export const PropComponent = ({ title, description }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
};

// PropComponent.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
// };

// Propiedades de las props por defecto
// PropComponent.defaultProps = {
//   title: "Default Title",
//   subtitle: "Default Subtitle",
// };
