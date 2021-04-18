import React, {useState, useEffect} from 'react';
import './App.css';
// Local DB until we've got a solution
import {nodes, links} from './helpers/localDB';
// Graphing dependencies
import ForceGraph3D from '3d-force-graph';
import PermanentDrawerLeft from './components/left_drawer';
import { Button } from '@material-ui/core';

function App() {
  let networks = nodes.filter(x => x.group === 0);
  let networksNames = networks.map(x => x.id);

  const [filter, setFilter] = useState([0,1, 2, 3]);
  const [nodeSelected, setNodeSelected] = useState(null);
  const [geckoData, setGeckoData] = useState(null);
  const [networkFilter, setNetworkFilter] = useState(networksNames)

  type Node = {
    id:string;
    group: number;
    label: string;
    level: number;
    imgOnline:string;
    url:string;
  }
  type Link = {
    target: string,
    source: string ,
    strength: number ,
    contract?: string ,
  }


  useEffect(()=>{
      create3dGraph() //this reloads the graph every useState.. improve it
  })

  async function fetchGeckoData(nodeId:string){
      let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids='.concat(nodeId);
      const data:any|null = await Promise.all([
        fetch(url)
        .then(data => data.json())
      ])
      if(!data){
        return "Could find the data on coingecko's API"
      }
      setGeckoData(data);
  }

  // handle graphics
  function getNeighbors(nodeId:string) {
      let neighbors= links.reduce((neighbors, link:any) => {
        if (link.target.id === nodeId) {
          neighbors.push(link.source.id)
        } else if (link.source.id === nodeId) {
          neighbors.push(link.target.id)
        }
        return neighbors
      }, [])
      // console.log('neighbors of ',nodeId,': ',neighbors)
      return neighbors;
    };
    function getChilds(nodeId:String){
      let childs = links.reduce((childs, link:any)=>{
        let target = link.target.id?link.target.id:link.target;
        let source = link.source.id?link.source.id:link.source;
        // console.log('target=',target )
        if(target === nodeId){ //
          childs.push(getNode(source))//
        } // it seems to automatically change the object (with id, or without)
        return childs
      },[])
      // console.log('childs: ',childs)
      return childs;
    }


  function getNetwork(nodeId:String){
      let nodeLinks:Link[]|null = links.filter(x=>x.source===nodeId)
      let nodeLinksNames:String[]|null = nodeLinks.map(x=>x.target)
      return nodeLinksNames;
    }

  function getNode(nodeId:String){
    let node:Node = nodes.find(x=>x.id === nodeId); //Node|null give error
    return node;
  }

  function isChild(nodeId:String, networkId:String){
    let node:Node|null = getNode(nodeId);
    if(!node){
      return false;
    }
    if(node.group === 0){
      return false;
    }
    let nodeParents = getNetwork(nodeId);
    return nodeParents.includes(networkId);
  }


  function getNodesFiltered(list){
    let nodesFiltered = list.reduce((nodesFiltered, node:any)=>{
        if(filter.includes(node.group)){
          nodesFiltered.push(node);
        }
        return nodesFiltered;
      },[])
      return nodesFiltered;
  }
  async function create3dGraph(){
    let dapps = networkFilter.reduce((dapps, network)=>{
      dapps.push(getNode(network))
      dapps.push(getChilds(network))
      return dapps;
    },[])
    let merged = [].concat.apply([], dapps);
    let unique = [...new Set(merged)];
    let filteredNodes = getNodesFiltered(unique);
    const finalNodesIds = filteredNodes.map(x=>x.id)//.push(networkFilter);

    let filteredLinks = links.reduce((filteredLinks, link:any) => {
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
    let hoverNode:string | null = null;
    let selectedNodes = new Set();

    const spaceHolder: HTMLElement | null = document.getElementById('3d-graph')!;
    const graph2 =  ForceGraph3D()
        (spaceHolder)
      .nodeLabel('label') // show label on hover
      .nodeAutoColorBy('group') // Color by group attr
      // .nodeColor(node => selectedNodes.has(node)? 'green' : null) // Color to selected (but not handle others)
      // Effects and text on hover
      .onNodeClick((node:any, event) => {
        if (event.ctrlKey || event.shiftKey || event.altKey) { // multi-selection
          selectedNodes.has(node) ? selectedNodes.delete(node) : selectedNodes.add(node);
        } else { // single-selection
          // console.log('node selected: ', node.id)
          setNodeSelected(node.id)
          fetchGeckoData(node.id)
          const untoggle = selectedNodes.has(node) && selectedNodes.size === 1;
          selectedNodes.clear();
          !untoggle && selectedNodes.add(node);
        }
        updateHighlight();
      })
      .linkWidth(link => highlightLinks.has(link) ? 5 : 1)
      .linkDirectionalParticles(link => highlightLinks.has(link) ? 4 : 0)
      .linkDirectionalParticleWidth(3)
      .onNodeHover((node:any) => {
        // no state change
        if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;
        highlightNodes.clear();
        highlightLinks.clear();
        // console.log('hover: ',node.id)
        let neighbors = getNeighbors(node.id)
        // console.log('neighbors: ',neighborsF)
        // let neighborsLinks = [];
        let otros:Array<any> = [];
        gData.links.reduce((neighborsLinks, link:any) => {
              if (node.id == link.target.id || node.id == link.source.id)  {
                otros.push(link)
              }
              return otros;
            },{})
        // console.log('otros: ',otros)
        otros.forEach(link => highlightLinks.add(link));
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

  function handleFilter(filters:any){
    // console.log('returned',filters)
    setFilter(filters);
  }
  function handleNetworkChange(filters:any){
    setNetworkFilter(filters);
  }

  // <Button variant="contained" color="primary" onClick={()=>create3dGraph()}>Create 3d Graph</Button>
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body className='App-body'>
      <PermanentDrawerLeft
        networks = {networksNames}
        nodes={nodes}
        nodeSelected={nodeSelected}
        geckoData={geckoData}
        networkFilter = {networkFilter}
        onFilters = {handleFilter}
        onNetworkFilter = {handleNetworkChange}
      />
      <div style={{width:'80%'}} id="3d-graph" className='column'></div>
      <Button onClick={()=>getChilds(networkFilter[0])}>get Childs of {networkFilter[0]}</Button>
      <Button onClick={()=>getNeighbors(networkFilter[0])}>get neighbors of {networkFilter[0]}</Button>
      </body>
    </div>
  );
}

export default App;
