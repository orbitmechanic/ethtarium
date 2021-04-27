import React, {useState, useEffect, useRef} from 'react';
import { nodes, links } from "../helpers/localDB";
import ForceGraph3D from "3d-force-graph";
import Filters from "./filters";
import * as THREE from 'three';
import CircularProgress from '@material-ui/core/CircularProgress';
// import SpriteText from 'three-spritetext';

import {getNode, getNodesNetworks } from '../helpers/mapHelpers';

function Map(props) {
  let blockchains = nodes.filter(x => (x.group === 0)&&(x.subgroup==='chain'));
  let blockchainNames = blockchains.map(x => x.id);
  let sides = nodes.filter(x=>(x.subgroup==='sidechain'))
  let sidechains = sides.map(x=>x.id)
  const [filter, setFilter] = useState(['chain',]);
  const [blockchainFilter, setBlockchainFilter] = useState(blockchainNames);
  const [loading, setLoading]= useState(false);

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


  function handleFilter(filters:Any){
    setFilter(filters);
  }

  function handleNetworkChange(filters:any){
    setBlockchainFilter(filters);
  }

  function selectNode(id){
    props.onNodeSelected(id);
    let nodeI = getNode(id);
    // console.log('id',id,'graph',graph.current,' node: ',nodeI)
    graph.current.then((graph)=>{
      const dataRendered=graph.graphData()
      // console.log(dataRendered)
      if(!dataRendered.nodes.includes(nodeI)){
        addNode(graph, dataRendered, nodeI)
      }
      focusNode(graph, nodeI)
    }
    )
  };

  function focusNode(graph,node){
    // console.log('flying into ',node.id)
    const distance = 100;
    const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
    // graph.backgroundColor('#ccc')  // changes the bg color
    graph.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
          node, // lookAt ({ x, y, z })
          2000  // ms transition duration
          );
  };

  let graph=useRef(null);
  useEffect(()=>{
        graph.current=create3dGraph(); //useRef()
  })


  function filterNodes(){
    let networksToFilter;
    if(filter.includes('sidechain')){
      networksToFilter = blockchainFilter.concat(sidechains)
    }else{
      networksToFilter = blockchainFilter
    }
    let filteredNetworks = getNodesNetworks(networksToFilter)
    let filteredNetworksWundefined = filteredNetworks.filter(x=>x!== undefined)
    // console.log('fNetworks ',filteredNetworksWundefined) // it appears undefined elements
    let filteredNodes = filteredNetworksWundefined.filter(node=>filter.includes(node.subgroup)) // do it to have multiple subgroups inputs

    const finalNodesIds = filteredNodes.map(x=>x.id)
    let filteredLinks = links.reduce((filteredLinks, link:Link[]) => {
          if ((finalNodesIds.includes(link.target.id?link.target.id:link.target))
            && (finalNodesIds.includes(link.source.id?link.source.id:link.source)))
             {
            filteredLinks.push(link)
          }
          return filteredLinks;
        },[])
    return [filteredNodes, filteredLinks];
  }

  function addNode(graph, dataRendered, node ){
    // first search wont show the stripe, is there, but needs double search.. (?)
    // it wont graph the links!!!

    // console.log('starts with ',dataRendered.links.length)
    let addLinks = links.filter(x=>(x.source.id===node.id)||(x.source===node.id))
    dataRendered.nodes.push(node)
    dataRendered.links.concat(addLinks)
    // console.log(node)
    // console.log(addLinks)
    // console.log(dataRendered)
    graph.graphData({
      nodes: [...dataRendered.nodes],
      links: [...dataRendered.links ],
    });
  }

  async function create3dGraph(){
    setLoading(true);

    const [filteredNodes, filteredLinks] = filterNodes()
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
      // .nodeRelSize(node => node.group===0? 100 : 4) // not working!!
      .nodeLabel('label') // show label on hover
      // .nodeAutoColorBy('group') // Color by group attr
      // Images as sprites
      .nodeThreeObject((node:Node) => {
        let imageUrl;
        if(node && node.img){
          imageUrl =require(`../images/mini_${node.img}`)
        }else{
          imageUrl =require('../images/mini_default.png')
        }

        const imgTexture = new THREE.TextureLoader().load(imageUrl.default);
        const material = new THREE.SpriteMaterial({ map: imgTexture , color: 0xffffff});
        const sprite = new THREE.Sprite(material); // fetch Gecko data and add here? at least test it!
        if(node.group === 0){
          sprite.scale.set(60,60,1)
        }else{
          sprite.scale.set(32,32,1)

        }

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
          props.onNodeSelected(node.id);
          const untoggle = selectedNodes.has(node) && selectedNodes.size === 1;
          selectedNodes.clear();
          !untoggle && selectedNodes.add(node);
        }
        focusNode(graph2, node)
          // graphInSpace(graph2, 'whatTo', node)
        // updateHighlight(); //not sure if useful here
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
      .linkWidth((link) => (highlightLinks.has(link) ? 0.2 : 0.3))
      .linkCurvature('curvature')
      .linkCurveRotation('rotation')
      .linkDirectionalParticles((link) => (highlightLinks.has(link) ? 3 : 0))
      .linkDirectionalParticleWidth(3)

      // Graph it
      .graphData(gData);

    graph2
      .onBackgroundClick(zoomOut)

//Force distance
    graph2
      .d3Force('link')
      // .distance(100);
      .distance(link => link.distance ? link.distance : 100);
  // Play with forces
    // graph2.d3Force('charge').strength(-300);

    setLoading(false);
    zoomOut();
    return graph2;

    function zoomOut(){
      //graph2.onEngineStop(() => graph2.zoomToFit(100)); // Make this to Fit when mouse is out the map
      graph2.zoomToFit(100);
    }

    function updateHighlight() {
      // trigger update of highlighted objects in scene
      graph2
        .linkWidth(graph2.linkWidth())
        .linkDirectionalParticles(graph2.linkDirectionalParticles());
    }
  }

  return (
    <div className="App">
      <Filters
        networks = {blockchainNames}
        nodes={nodes}
        blockchainFilter = {blockchainFilter}
        onFilters = {handleFilter}
        onBlockchainFilter = {handleNetworkChange}
        selectNode = {selectNode}
        account = {props.account}
        logout = {props.logoutOfWeb3Modal}
        load = {props.loadWeb3Modal}
        network={props.network}
      />

      {/*show in complete screen or make a loading icon inside the render*/}
      {loading?
      <div className='overlay' id='3d-graph'>
      <CircularProgress  />
      </div>
      :
      <div id="3d-graph">
      </div>
    }

  </div>
  )
}
export default React.memo(Map);



//Post processing   // connect web3-modal > see connected network > Shine and show assets and reach
//   const bloomPass = new UnrealBloomPass();
// bloomPass.strength = 3;
// bloomPass.radius = 1;
// bloomPass.threshold = 0.1;
// graph2.postProcessingComposer().addPass(bloomPass);

// function graphInSpace(graph, whatTo, where){
  //   graph
  //     .nodeThreeObject(where => {
    //       const sprite = new SpriteText(whatTo);
    //       sprite.material.depthWrite = false; // make sprite background transparent
    //       sprite.color = 'white';
    //       sprite.textHeight = 8;
    //       return sprite;
    //     })
    // }
