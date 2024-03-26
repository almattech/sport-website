import React from "react";
import ReactSwitch from "react-switch";

const SwitchToggle = (props) => {
  const handleTheme = () => {
    props.func();
  };
  return (
    <div className="Switch">
      <p> Theme </p>
      <ReactSwitch onChange={handleTheme} checked={props.name === "dark"} />
    </div>
  );
};

export default SwitchToggle;
