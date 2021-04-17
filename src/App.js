import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// Local DB until we've got a solution
import { nodes, links } from "./helpers/localDB";

// Graphing dependencies
import ForceGraph3D from "3d-force-graph";

function App() {
  const [filter, setFilter] = useState([0, 1, 2, 3]);
  const [nodeSelected, setNodeSelected] = useState(null);

  function getNeighbors(nodeId) {
    let neighbors = [];
    let node = nodes.find((x) => x.id === nodeId);
    return links.reduce(
      (neighbors, link) => {
        if (link.target.id === node.id) {
          neighbors.push(link.source.id);
        } else if (link.source.id === node.id) {
          neighbors.push(link.target.id);
        }
        return neighbors;
      },
      [node]
    );
  }

  async function create3dGraph() {
    const filteredNodes = nodes.filter((x) => filter.includes(x.group));
    const filteredNodesIds = filteredNodes.map((x) => x.id);
    // console.log('nodesIds',filteredNodesIds)
    const filteredLinks = [];
    // type acum = Array<number>;
    const acum = [];
    // console.log(links)
    links.reduce((filteredLinks, link) => {
      if (
        filteredNodesIds.includes(link.target.id) &&
        filteredNodesIds.includes(link.source.id)
      ) {
        acum.push(link);
      }
      return acum;
    }, {});

    const gData = {
      nodes: filteredNodes,
      links: links,
    };

    //handle selections and effects on particular nodes
    const highlightNodes = new Set();
    const highlightLinks = new Set();
    let hoverNode = null;
    let selectedNodes = new Set();

    const graph2 = ForceGraph3D()(document.getElementById("3d-graph"))
      .nodeLabel("id") // show label on hover
      .nodeAutoColorBy("group") // Color by group attr
      //temp fix for sizing - suggest this becomes a dynamic range
      .width("1000")
      .height("600")
      // .nodeColor(node => selectedNodes.has(node)? 'green' : null) // Color to selected (but not handle others)
      // Effects and text on hover
      .onNodeClick((node, event) => {
        if (event.ctrlKey || event.shiftKey || event.altKey) {
          // multi-selection
          selectedNodes.has(node)
            ? selectedNodes.delete(node)
            : selectedNodes.add(node);
        } else {
          // single-selection
          console.log("node selected: ", node.id);
          setNodeSelected(node.id);
          // then fetch data
          const untoggle = selectedNodes.has(node) && selectedNodes.size === 1;
          selectedNodes.clear();
          !untoggle && selectedNodes.add(node);
        }
        updateHighlight();
      })
      .linkWidth((link) => (highlightLinks.has(link) ? 5 : 1))
      .linkDirectionalParticles((link) => (highlightLinks.has(link) ? 4 : 0))
      .linkDirectionalParticleWidth(3)
      .onNodeHover((node) => {
        // no state change
        if ((!node && !highlightNodes.size) || (node && hoverNode === node))
          return;
        highlightNodes.clear();
        highlightLinks.clear();
        // console.log('hover: ',node.id)
        let neighbors = getNeighbors(node.id);
        let neighborsF = neighbors.slice(1, neighbors.length);
        // console.log('neighbors: ',neighborsF)
        let neighborsLinks = [];
        let otros = [];
        gData.links.reduce((neighborsLinks, link) => {
          if (node.id == link.target.id || node.id == link.source.id) {
            otros.push(link);
          }
          return otros;
        }, {});
        // console.log('otros: ',otros)
        otros.forEach((link) => highlightLinks.add(link));
        hoverNode = node || null;
        updateHighlight();
      })
      // Images as sprites  NOT WORKINg
      // {/*
      //         .nodeThreeObject(({ img }) => { //images not rendering :(
      //         const imgTexture = new THREE.TextureLoader().load('helpers/images/ethereum.jpg');//${img}
      //         const material = new THREE.SpriteMaterial({ map: imgTexture , color: 0xffffff});
      //         const sprite = new THREE.Sprite(material);
      //         sprite.scale.set(32, 32, 1);
      //         return sprite;
      //       })
      // */}
      //       // text as sprites // Kills the nodes visualization
      // {/*
      //         .nodeThreeObject(node => {
      //          const sprite = new SpriteText(node.id);
      //          sprite.material.depthWrite = false; // make sprite background transparent
      //          sprite.color = node.color;
      //          sprite.textHeight = 8;
      //          return sprite;
      //        })
      // */}
      // Graph it
      .graphData(gData);

    // fit to canvas when engine stops
    graph2.onEngineStop(() => graph2.zoomToFit(500));

    //Post processing
    //   const bloomPass = new UnrealBloomPass();
    // bloomPass.strength = 3;
    // bloomPass.radius = 1;
    // bloomPass.threshold = 0.1;
    // graph2.postProcessingComposer().addPass(bloomPass);

    function updateHighlight() {
      // trigger update of highlighted objects in scene
      graph2
        .nodeColor(graph2.nodeColor())
        // .nodeRelSize(graph2.nodeRelSize())
        .linkWidth(graph2.linkWidth())
        .linkDirectionalParticles(graph2.linkDirectionalParticles());
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Etharium</h1>
        {/* Filters
          <form>
        <p>
          <label>
            <input type="checkbox" class="filled-in" checked="checked" />
            <span>Filled in</span>
          </label>
        </p>
        </form>
      */}
        <button onClick={() => create3dGraph()}>Create 3d Graph</button>
        <div id="3d-graph"></div>
      </header>
    </div>
  );
}

export default App;
