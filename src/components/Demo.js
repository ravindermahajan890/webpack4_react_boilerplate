import React from "react";
import PropTypes from "prop-types";
import "./Demo.scss";
const Demo = props => {
  return (
    <div id="hell">
      <div>Welcome {props.name}</div>
      <img src="../../images/bitmap.png" />
    </div>
  );
};

Demo.propTypes = {
  name: PropTypes.string.isRequired
};
export default Demo;