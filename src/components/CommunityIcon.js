import React from "react";
import styles from "../styles/main.module.css";
import commIcon from "../images/users/Style6community.svg";

const CommunityIcon = () => {
  return (
    <div className={styles.icons}>
      <img src={commIcon} alt="community icon" />
    </div>
  );
};

export default CommunityIcon;
