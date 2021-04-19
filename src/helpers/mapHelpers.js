import {nodes, links} from './localDB';

export function getNode(nodeId:String){
  let node:Node = nodes.find(x=>x.id === nodeId); //Node|null give error
  return node;
}

export async function fetchGeckoData(nodeId:string){
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids='.concat(nodeId);
    const data:any|null = await Promise.all([
      fetch(url)
      .then(data => data.json())
    ])
    if(!data){
      return "Could find the data on coingecko's API"
    }
    return(data);
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

export function getNodesFiltered(list, filter){
    let nodesFiltered = list.reduce((nodesFiltered, node:Node)=>{
        if(filter.includes(node.group)){
          nodesFiltered.push(node);
        }
        return nodesFiltered;
      },[])
      return nodesFiltered;
  }

  // function getNetwork(nodeId:String){
  //     let nodeLinks:Link[]|null = links.filter(x=>x.source===nodeId)
  //     let nodeLinksNames:String[]|null = nodeLinks.map(x=>x.target)
  //     return nodeLinksNames;
  //   }

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
