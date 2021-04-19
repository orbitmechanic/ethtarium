import React, {useState, useEffect} from 'react';
import './App.css';
// Local DB until we've got a solution
import {nodes, links} from './helpers/localDB';
// Graphing dependencies
import ForceGraph3D from '3d-force-graph';
import PermanentDrawerLeft from './components/left_drawer';

function App() {
  const [filter, setFilter] = useState([0,1, 2, 3]);
  const [nodeSelected, setNodeSelected] = useState(null);
  const [geckoData, setGeckoData] = useState(null);

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
  }

  useEffect(()=>{
      create3dGraph() //this reloads the graph every node selected.. improve it
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
      let neighbors = [];
      let node:any = nodes.find(x => x.id === nodeId);
      return links.reduce((neighbors, link:any) => {
        if (link.target.id === node.id) {
          neighbors.push(link.source.id)
        } else if (link.source.id === node.id) {
          neighbors.push(link.target.id)
        }    return neighbors
      }, [node])
    };

  async function create3dGraph(){
    const filteredNodes = nodes.filter(x=>filter.includes(x.group));
    const filteredNodesIds = filteredNodes.map(x=>x.id);
    // console.log('nodesIds',filteredNodesIds)
    const filteredLinks:Array<Link> = [];
    const acum:Array<Link> = []; //once type of link is defined, it enters here
    // console.log(links)
    links.reduce((filteredLinks, link:any) => {
          if ((filteredNodesIds.includes(link.target)||filteredNodesIds.includes(link.target.id))
            && (filteredNodesIds.includes(link.source)||filteredNodesIds.includes(link.source.id))) {
            acum.push(link)
          }
          return acum;
        },{})
    console.log('acum',acum);
    console.log('FL',filteredLinks);
    const gData = {
      nodes: filteredNodes,
      links: acum
    };

    //handle selections and effects on particular nodes
    const highlightNodes = new Set();
    const highlightLinks = new Set();
    let hoverNode:string | null = null;
    let selectedNodes = new Set();

    const spaceHolder: HTMLElement | null = document.getElementById('3d-graph')!;
    const graph2 =  ForceGraph3D()
        (spaceHolder)
      .nodeLabel('id') // show label on hover
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
        let neighborsF = neighbors.slice(1,neighbors.length) //first element is the node object - take the others
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
    setFilter(filters);
  }

  // <Button variant="contained" color="primary" onClick={()=>create3dGraph()}>Create 3d Graph</Button>
  return (
    <div className="App">
      <header className="App-header">


      </header>
      <body className='App-body'>
      <PermanentDrawerLeft
        nodeSelected={nodeSelected}
        geckoData={geckoData}
        onFilters = {handleFilter}
      />
      <div style={{width:'80%'}} id="3d-graph" className='column'></div>
      </body>
    </div>
  );
}

export default App;
