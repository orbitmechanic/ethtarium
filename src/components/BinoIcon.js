import React from "react";
import styles from "../styles/main.module.css";
import bino from "../images/binoculars-1/Style6binoculars.svg";

const BinoIcon = () => {
  return (
    <div className={styles.icons}>
      <img src={bino} alt="find data icon" />
    </div>
  );
};

export default BinoIcon;
