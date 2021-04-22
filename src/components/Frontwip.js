import React from "react";
import MapMenu from "./MapMenu/MapMenu";
import Mapwip from "./Mapwip";

const Frontwip = (props) => {
  return (
    <>
      <div>
        <MapMenu />
        <Mapwip onNodeSelected={props.onNodeSelected} />
      </div>
    </>
  );
};

export default Frontwip;
