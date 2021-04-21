import React, {useState, useEffect, useRef} from 'react';
import { nodes, links } from "../helpers/localDB";
import ForceGraphVR from "3d-force-graph-vr";
import PermanentDrawerLeft from "./filters";
import * as THREE from 'three';
// import SpriteText from 'three-spritetext';
require('aframe');
function MapVR(props) {

    const gData = {
      nodes: nodes,
      links: links
    };



    async function createVR(){
      let space = document.getElementById('3d-graph');
      console.log('space',space)

      const Graph = ForceGraphVR()
          (space)
            .graphData(gData)
        // )

    }

  return (
    <div className="App">
      <button onClick={()=>{createVR()}}>Test</button>
      <div id="3d-graph" style={{ margin: 0,alignItems:'bottom'}}></div>
    </div>
  )
}
export default React.memo(MapVR);
