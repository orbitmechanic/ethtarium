import React from "react";
import styles from "../styles/main.module.css";
import disk from "../images/save-1/Style6disk.svg";

const DiskIcon = () => {
  return (
    <div className={styles.icons}>
      <img src={disk} alt="data storage icon" />
    </div>
  );
};

export default DiskIcon;
