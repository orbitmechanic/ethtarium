import React, {useState, useEffect} from 'react';
import { nodes, links } from "../helpers/localDB";
import ForceGraph3D from "3d-force-graph";
import PermanentDrawerLeft from "./filters";
import * as THREE from 'three';

import { getNodesFiltered, getNodesNetworks} from '../helpers/mapHelpers';

function Map(props) {
  let networks = nodes.filter(x => x.group === 0);
  let networksNames = networks.map(x => x.id);

  const [filter, setFilter] = useState([0,1, 2, 3]);
  const [networkFilter, setNetworkFilter] = useState(networksNames)

  type Node = {
    id: string,
    group: number,
    label: string,
    level: number,
    imgOnline: string,
    url: string,
  };
  type Link = {
    target: string,
    source: string ,
    strength: number ,
    contract?: string ,
  }


  function handleFilter(filters:any){
    setFilter(filters);
  }
  function handleNetworkChange(filters:any){
    setNetworkFilter(filters);
  }

  function selectNode(id){
    props.onNodeSelected(id);
  }

  useEffect(()=>{
      create3dGraph();
  })


  async function create3dGraph(){
    let unique = getNodesNetworks(networkFilter);
    let filteredNodes = getNodesFiltered(unique, filter);
    const finalNodesIds = filteredNodes.map(x=>x.id)

    let filteredLinks = links.reduce((filteredLinks, link:Link[]) => {
          if ((finalNodesIds.includes(link.target.id?link.target.id:link.target))
            && (finalNodesIds.includes(link.source.id?link.source.id:link.source)))
             {
            filteredLinks.push(link)
          }
          return filteredLinks;
        },[])

    const gData = {
      nodes: filteredNodes,
      links: filteredLinks
    };
    // console.log('gData',gData)

    //handle selections and effects on particular nodes
    const highlightNodes = new Set();
    const highlightLinks = new Set();
    let hoverNode: string | null = null;
    let selectedNodes = new Set();

    const spaceHolder: HTMLElement | null = document.getElementById('3d-graph');

// VR (needs 3d-force-graph-vr package)
// replace ForceGraph3D with ForceGraphVR()




    const graph2 =  ForceGraph3D()
        (spaceHolder)
      // .nodeRelSize(5)
      .nodeLabel('label') // show label on hover
      .nodeAutoColorBy('group') // Color by group attr
      // Images as sprites
      .nodeThreeObject((node:Node) => {
        let test;
        if(node && node.img){
          test =require(`../images/mini_${node.img}`)
        }else{
          test =require('../images/mini_default.png')
        }
        const imgTexture = new THREE.TextureLoader().load(test.default);//${img}
        const material = new THREE.SpriteMaterial({ map: imgTexture , color: 0xffffff});
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(32, 32, 1);
        return sprite;
        })
      // Effects and text on hover
      .onNodeClick((node:Node, event) => {
        if (event.ctrlKey || event.shiftKey || event.altKey) {
          // multi-selection
          selectedNodes.has(node)
            ? selectedNodes.delete(node)
            : selectedNodes.add(node);
        } else {
          // single-selection
          selectNode(node.id);
          const untoggle = selectedNodes.has(node) && selectedNodes.size === 1;
          selectedNodes.clear();
          !untoggle && selectedNodes.add(node);
        }
        // Focus on node
          const distance = 100;
          const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
          graph2.cameraPosition(
              { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
                node, // lookAt ({ x, y, z })
                2000  // ms transition duration
                );
        updateHighlight(); //not sure if useful here
      })
      .onNodeHover((node: any) => {
        if ((!node && !highlightNodes.size) || (node && hoverNode === node))
        return;
        highlightNodes.clear();
        highlightLinks.clear();
        // console.log('hover: ',node.id)
        let otros: Array<any> = [];
        gData.links.reduce((neighborsLinks, link: any) => {
          if (node.id === link.target.id || node.id === link.source.id) {
            otros.push(link);
          }
          return otros;
        }, {});
        otros.forEach((link) => highlightLinks.add(link));
        hoverNode = node || null;
        updateHighlight();
      })
      .linkWidth((link) => (highlightLinks.has(link) ? 1 : 2))
      .linkDirectionalParticles((link) => (highlightLinks.has(link) ? 3 : 0))
      .linkDirectionalParticleWidth(3)
    

      // Graph it
      .graphData(gData);

      //         .nodeThreeObject(node => {
      //          const sprite = new SpriteText(node.id);
      //          sprite.material.depthWrite = false; // make sprite background transparent
      //          sprite.color = node.color;
      //          sprite.textHeight = 8;
      //          return sprite;
      //        })

    // fit to canvas when engine stops
    graph2.onEngineStop(() => graph2.zoomToFit(500));

// Distance between nodes
    // const linkForce =
    graph2
      .d3Force('link')
      .distance(100);

    //Post processing
    //   const bloomPass = new UnrealBloomPass();
    // bloomPass.strength = 3;
    // bloomPass.radius = 1;
    // bloomPass.threshold = 0.1;
    // graph2.postProcessingComposer().addPass(bloomPass);

    function updateHighlight() {
      // trigger update of highlighted objects in scene
      graph2
        // .nodeColor(graph2.nodeColor())
        // .nodeRelSize(graph2.nodeRelSize())
        // .linkForce()
        .linkWidth(graph2.linkWidth())
        .linkDirectionalParticles(graph2.linkDirectionalParticles());
    }
  }

  return (
    <div className="App">
      <PermanentDrawerLeft
        networks = {networksNames}
        nodes={nodes}
        networkFilter = {networkFilter}
        onFilters = {handleFilter}
        onNetworkFilter = {handleNetworkChange}
      />
      <div flex id="3d-graph"></div>

  </div>
  )
}
export default React.memo(Map);
