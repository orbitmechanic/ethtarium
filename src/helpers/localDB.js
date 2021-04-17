
// Groups:
// 0 : networks
// 1 : bridges
// 2 : swappers
// 3 : lend&borrow
// 4 : manage
// 5 : DAO
// 6 ..
export const nodes = [
  { id: "ethereum", group: 0, label: "Ethereum", level: 1,
    imgOnline:'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png?1595348880',
    url:'www.ethereum.org',
    graphUrl:'' ,
    query:'' , search:'' },
  { id: "xDai", group: 0, label: "xDai", level: 1,
    imgOnline:'https://assets.coingecko.com/coins/images/11062/small/xdai.png?1614727492' ,
    url:'www.xdaichain.com',
    graphUrl:'' ,
    query:'' , search:''},
  { id: "polygon"  , group: 0, label: "Polygon"   , level: 1,
    imgOnline:'https://assets.coingecko.com/coins/images/4713/small/matic___polygon.jpg?1612939050' ,
    url:'www.polygon.com',
    graphUrl:'' ,
    query:'' , search:''},
  { id: "omnibridge"   , group: 1, label: "Omnibridge", level: 2,
    imgOnline:'https://omni.xdaichain.com/static/media/logo.5f96ff42.svg' ,
    url:'https://omni.xdaichain.com/',
    graphUrl:'https://api.thegraph.com/subgraphs/name/raid-guild/xdai-omnibridge' ,
    query:'' , search:''},
  { id: "connext"   , group: 1, label: "Connext"   , level: 2,
    imgOnline:'https://connext.network/images/connext__Logo--WhiteText-MultiColor-p-500.png' ,
    url:'connext.network',
    graphUrl:'' ,
    query:'' , search:''},
  { id: "pos-bridge"   , group: 1, label: "POS Bridge", level: 2,
    imgOnline:'https://docs.matic.network/img/logo.svg' ,
    url:'wallet.matic.network',
    graphUrl:'' ,
    query:'' , search:''},
  { id: "aave"   , group: 3, label: "Aave" , level: 2,
    imgOnline:'https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png?1601374110' ,
    url:'aave.com',
    graphUrl:'' ,
    query:'' , search:''},
  { id: "uniswap"   , group: 2, label: "Uniswap"   , level: 2,
    imgOnline:'https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png?1600306604' ,
    url:'app.uniswap.org',
    graphUrl:'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2' ,
    query:'' , search:''},
  { id: "honeyswap"   , group: 2, label: "Honeyswap", level: 2,
    imgOnline:'https://assets.coingecko.com/coins/images/12895/small/hnys.png?1614100588' ,
    url:'app.honeyswap.org',
    graphUrl:'' ,
    query:'' , search:''},
  { id: "agave"   , group: 3, label: "Agaave"   , level: 2,
    imgOnline:'https://assets.coingecko.com/coins/images/14146/thumb/agve.png?1614659384' ,
    url:'no ui yet',
    graphUrl:'' ,
    query:'' , search:''},
  { id: "aave-Matic"  , group: 3, label: "Aave-Matic"   , level: 2 ,
    imgOnline:'https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png?1601374110',
    url:'no ui yet',
    graphUrl:'' ,
    query:'' , search:''},
  { id: "quickswap"  , group: 2, label: "Quickswap"  , level: 2,
    imgOnline:'https://assets.coingecko.com/coins/images/13970/small/1_pOU6pBMEmiL-ZJVb0CYRjQ.png?1613386659' ,
    url:'quickswap.exchange/#/swap',
    graphUrl:'' ,
    query:'' , search:''}
];

// graphurl : theGraph endpoint
// search: schema retrieved (for filter)
// query : query to thegraph (make particular queries for any need or total for user interaction)

export const links = [
  { target: "ethereum", source: "omnibridge" , strength: 0.7 },
  { target: "ethereum", source: "aave" , strength: 0.4 },
  { target: "ethereum", source: "uniswap" , strength: 0.4 },
  { target: "ethereum", source: "pos-bridge" , strength: 0.7 },
  { target: "xDai", source: "honeyswap" , strength: 0.7 },
  { target: "xDai", source: "agave" , strength: 0.4 },
  { target: "xDai", source: "omnibridge" , strength: 0.4 },
  { target: "xDai"  , source: "connext", strength: 0.7 },
  { target: "polygon"  , source: "aave-Matic", strength: 0.4 },
  { target: "polygon"  , source: "quickswap", strength: 0.4 },
  { target: "polygon"  , source: "pos-bridge", strength: 0.7 },
  { target: "polygon", source: "connext" , strength: 0.7 },
];
