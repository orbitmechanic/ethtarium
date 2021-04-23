import styles from "../../styles/main.module.css";
import MenuButton from "./MenuButton";

const MapMenu = () => {
  return (
    <div className={styles.menu}>
      <MenuButton />
      <p>Networks</p>
      <ul>
        {/* Menu item - label and checkbox bool */}
        <li>Ethereum</li>
        //temp will work on props
        <li>Bitcoin</li>
        <li>XDAI</li>
        <li>Polygon</li>
        <li>Binance</li>
      </ul>
    </div>
  );
};

export default MapMenu;
