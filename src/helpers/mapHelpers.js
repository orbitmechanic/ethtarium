import {nodes, links, options} from './localDB';

export function getNode(nodeId:String){
  let node:Node = nodes.find(x=>x.id === nodeId); //Node|null give error
  return node;
}

export const networks = nodes.filter(x=>x.group===0);
export const bridges = nodes.filter(x=>x.group===1);
export const dApps = nodes.filter(x=>(x.group!==1 && x.group!==0));
export const subOptions = function(group){return options.find((i)=>i.value===group).subgroups};


export async function fetchGeckoData(typeOfRequest:String, nodeId:String|null){
    const geckoAPI=[
      {type:'coin',url:'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids='.concat(nodeId)},
      {type:'global', url:'https://api.coingecko.com/api/v3/global'}]
    let url = geckoAPI.find(x=>x.type === typeOfRequest);
    // console.log('fetching ',url.url)
    const data:Any|null = await Promise.all([
      fetch(url.url)
      .then(data => data.json())
    ])
    if(!data){
      return false;
    }
    if(typeOfRequest === 'coin'){
      return(data[0][0])
    }else{
      return(data);
    }
}


// handle graphics
export function getNeighbors(nodeId:string) {
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

export function getChilds(nodeId:String){
    let childs = links.reduce((childs, link:any)=>{
      // it seems to automatically change the object (with id, or without)
      let target = link.target.id?link.target.id:link.target;
      let source = link.source.id?link.source.id:link.source;
      // console.log('target=',target )
      if(target === nodeId){ //
        childs.push(getNode(source))//
      }
      return childs
    },[])
    // console.log('childs: ',childs)
    return childs;
  }

export function getNodesFiltered(networks){
    let nodesFiltered = nodes.reduce((nodesFiltered, node)=>{
        if(networks.includes(node.group)){
          nodesFiltered.push(node);
        }
        return nodesFiltered;
      },[])
      return nodesFiltered;
  }

export function getNodesNetworks(networkFilter){
    let dapps = networkFilter.reduce((dapps, network)=>{
      dapps.push(getNode(network))
      dapps.push(getChilds(network))
      return dapps;
    },[])

    let merged = [].concat.apply([], dapps);
    let unique = [...new Set(merged)];
    // console.log('nodos: ',unique)
    return unique;
  }

export function getExplorer(nodeId:String){
  let networks = getNetwork(nodeId);
  let net = networks.filter(x=>x.target.group===0)
  if(net[0] && net[0].target && net[0].target.explorer){
    // console.log(net[0].target.explorer)
    let explorer = net[0].target.explorer;
    return explorer;
  }
  return false;
}

export function getNetwork(nodeId:String){
      let nodeLinks:Link[]|null = links.filter(x=>x.source.id===nodeId)
      // let nodeLinksNames:String[]|null = nodeLinks.map(x=>x.target.id)
      // console.log('Links for: ',nodeId,' are: ', nodeLinks) //nope!
      return nodeLinks;
    }

  // function isChild(nodeId:String, networkId:String){
  //   let node:Node|null = getNode(nodeId);
  //   if(!node){
  //     return false;
  //   }
  //   if(node.group === 0){
  //     return false;
  //   }
  //   let nodeParents = getNetwork(nodeId);
  //   return nodeParents.includes(networkId);
  // }
