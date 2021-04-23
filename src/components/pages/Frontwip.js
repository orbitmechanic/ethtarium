import React from "react";
import MapMenu from "../MapMenu/MapMenu";
import Mapwip from "../Mapwip";
import styles from "../../styles/main.module.css";

const Frontwip = (props) => {
  return (
    <div classname={styles.content}>
      <MapMenu />
      <Mapwip onNodeSelected={props.onNodeSelected} />
    </div>
  );
};

export default Frontwip;
