import React from "react";
import styles from "../styles/main.module.css";
import userIcon from "../images/user/Style6user.svg";

const UserIcon = () => {
  return (
    <div className={styles.icons}>
      <img src={userIcon} alt="user icon" />
    </div>
  );
};

export default UserIcon;
