import devIcon from "../images/person-private/Style6dev.svg";
import styles from "../styles/main.module.css";

const DevIcon = () => {
  return (
    <div className={styles.icons}>
      <img src={devIcon} alt="developers icon" />
    </div>
  );
};

export default DevIcon;
