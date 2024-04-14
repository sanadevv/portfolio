import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <NavLink to={"/"} />
      <NavLink to={"project"} />
    </div>
  );
};

export default Navigation;
