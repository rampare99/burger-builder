import React from "react";

import burgerlogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div
    className={classes.Logo}
    style={{ height: props.height, marginBottom: props.marginBottom }}
  >
    <img src={burgerlogo} alt="MyBurger" />
  </div>
);

export default logo;
