import React from "react";
import styles from "../styles/main.module.css";
import thanksIcon from "../images/thanks.svg";

const ThanksIcon = () => {
  return (
    <div className={styles.icons}>
      <img src={thanksIcon} alt="thanks icon" />
    </div>
  );
};

export default ThanksIcon;
