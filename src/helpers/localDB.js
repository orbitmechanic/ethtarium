// Groups:
// 0 : networks
// 1 : bridges
// 2 : swappers
// 3 : lend&borrow
// 4 : manage
// 5 : oracle
// 6 : DAO
// 7 : token (stables?)
// 8 :

// widget to interact directly?? (see connext)

// what to do with multiple thegraph endpoints? create array with a name?
// graphurl : theGraph endpoint
// search: schema retrieved (for filter)
// query : query to thegraph (make particular queries for any need or total for user interaction)

// Networks dont have contracts, have explorers
// Nodes have contracts (inner protocols)
// Links have contracts of interactions (mostly bridges)

// Links should be asked as :
// if target is network
// target: network > Parent of node
// source: node


// if target and source are linked dapps
// target: Bigger case (protocol owner, )
// source: node
// examples ??
//Link between Gnosis and Omen
// target: Gnosis
// source: Omen
// protocols:[ConditionalTokens, ConditionalTokensMarket]

//Link between Uniswap and Honeyswap/Pancakeswap
// target: Uniswap
// source: Honeyswap
// protocols:[name of contracts, ...]

export const options = [
  { label: 'Networks', value: 0 , },
  { label: 'Bridges', value: 1 , },
  { label: 'Markets', value: 2,},
  { label: 'Defi', value: 3,},
  { label: 'Management', value: 4, },
  { label: 'Oracles', value: 5, },
  { label: 'DAOs', value: 6, },
  { label: 'Tokens', value: 7,  },
  ];


export const nodes:Node = [
// NETWORKS
  { id: "ethereum", group: 0, label: "Ethereum", level: 1,
    img:'ethereum.png',
    url:'https://www.ethereum.org',
    explorer:'https://etherscan.org/',
    graphUrl:'' ,
    query:'' , search:'', widget:'' },
  { id: "bitcoin", group: 0, label: "Bitcoin", level: 1,
    img:'bitcoin.png',
    url:'https://bitcoin.org',
    explorer:'https://blockchair.com/bitcoin/',
    graphUrl:'' ,
    query:'' , search:'', widget:'' },
  { id: "xdai", group: 0, label: "xDai", level: 1,
    img:'xdai.png' ,
    url:'https://www.xdaichain.com',
    explorer:'https://blockscout.com/',
    graphUrl:'https://api.thegraph.com/subgraphs/name/maxaleks/xdai-stakers' , //careful here!
    query:'' , search:'', widget:''},
  { id: "polygon"  , group: 0, label: "Polygon"   , level: 1,
    img:'polygon.png' ,
    url:'https://www.polygon.com',
    contract:'0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
    explorer:'https://explorer-mainnet.maticvigil.com/',
    graphUrl:'' ,
    query:'' , search:'', widget:''},
  { id: "binance-coin", group: 0, label: "BSC", level: 1,
    img:'binance-coin.png',
    url:'https://www.binance.com',
    explorer:'https://bscscan.com/',
    graphUrl:'' ,
    query:'' , search:'', widget:'' },
//BRIDGES
  { id: "omnibridge"   , group: 1, label: "Omnibridge", level: 2,
    img:'' ,
    url:'https://https://omni.xdaichain.com/',
    contract:'',
    graphUrl:'https://api.thegraph.com/subgraphs/name/raid-guild/xdai-omnibridge' ,
    query:'' , search:'', widget:''},
  { id: "connext"   , group: 1, label: "Connext"   , level: 2,
    img:'connext.png' ,
    url:'https://connext.network',
    contract:'',
    graphUrl:'' ,
    query:'' , search:'', widget:''},
  { id: "pos-bridge"   , group: 1, label: "POS Bridge", level: 2,
    img:'' ,
    url:'https://wallet.matic.network',
    contract:'',
    graphUrl:'' ,
    query:'' , search:'', widget:''},
  { id: "wrapped-bitcoin", group: 7, label: "Wrapped BTC", level: 2,
    img:'wrapped-bitcoin.png',
    url:'https://wbtc.network',
    contract:'0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    graphUrl:'https://api.thegraph.com/subgraphs/name/ryabina-io/weth' ,
    query:'' , search:'', widget:'' },
  { id: "omnibridge_BSC", group: 1, label: "Omnibridge BSC-xDai", level: 2,
      img:'',
      url:'https://bsc-to-xdai-omnibridge.web.app/  ',
      graphUrl:'https://api.thegraph.com/subgraphs/name/maxaleks/xdai-to-bsc-omnibridge' ,
      query:'' , search:'', widget:'' },

// DAPPS
  { id: "aave"   , group: 3, label: "Aave" , level: 2,
    img:'aave.png' ,
    url:'https://aave.com',
    contract:'0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
    graphUrl:'https://api.thegraph.com/subgraphs/name/aave/protocol' ,
    query:'' , search:'', widget:''},
  { id: "uniswap"   , group: 2, label: "Uniswap"   , level: 2,
    img:'uniswap.png' ,
    url:'https://app.uniswap.org',
    contract:'0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    graphUrl:'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2' ,
    query:'' , search:'', widget:''},
  { id: "tether", group: 7, label: "Tether", level: 2,
    img:'tether.png',
    url:'https://tether.to',
    contract:'0xdac17f958d2ee523a2206206994597c13d831ec7',
    graphUrl:'https://api.thegraph.com/subgraphs/name/alexklos/tether' ,
    query:'' , search:'', widget:'' },
  { id: "usd-coin", group: 7, label: "USDC", level: 2,
    img:'usd-coin.png',
    url:'https://circle.com',
    contract:'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    graphUrl:'' ,
    query:'' , search:'', widget:'' },
  { id: "honey" , group: 2, label: "Honeyswap", level: 2,
    img:'honey.png' ,
    url:'https://app.honeyswap.org',
    contract:'0x71850b7e9ee3f13ab46d67167341e4bdc905eef9', //xdai!
    graphUrl:'https://api.thegraph.com/subgraphs/name/1hive/honeyswap-v2' ,
    query:'' , search:'', widget:''},
  { id: "chainlink", group: 5, label: "Chainlink", level: 2,
    img:'chainlink.png',
    url:'https://chain.link',
    contract:'0x514910771af9ca656af840dff83e8264ecf986ca',
    graphUrl:'https://api.thegraph.com/subgraphs/name/tomafrench/chainlink' , //careful here!
    query:'' , search:'', widget:'' },
  { id: "agave-token", group: 3, label: "Agave"   , level: 2,
    img:'agave.png' ,
    url:'no ui yet',
    contract:'0x3a97704a1b25f08aa230ae53b352e2e72ef52843',//xdai!
    graphUrl:'https://api.thegraph.com/subgraphs/name/1hive/agave-rinkeby' , //rinkeby!! but for now..
    query:'' , search:'', widget:''},
  { id: "quickswap"  , group: 2, label: "Quickswap"  , level: 2,
    img:'quickswap.png' ,
    url:'https://quickswap.exchange/#/swap',
    contract:'0x6c28aef8977c9b773996d0e8376d2ee379446f2f',
    graphUrl:'https://api.thegraph.com/subgraphs/name/developerfred/quick-swap' ,
    query:'' , search:'', widget:''},
  { id: "binance-usd", group: 7, label: " Binance USD", level: 2,
    img:'binance-usd.png',
    url:'https://paxos.com',
    contract:'0x4fabb145d64652a948d72533023f6e7a623c7c53',
    graphUrl:'' , // no binance shit in TheGraph!
    query:'' , search:'', widget:'' },
  { id: "pancakeswap", group: 2, label: "Pancake Swap", level: 2,
    img:'pancakeswap.png',
    url:'https://pancakeswap.finance',
    contract:'0 x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', //BSC!!
    graphUrl:'https://api.thegraph.com/subgraphs/name/developerfred/pancake-exchange' , // careful here!
    query:'' , search:'', widget:'' },
  { id: "dai", group: 7, label: "Dai", level: 2,
    img:'dai.png',
    url:'https://makerdao.com',
    contract:'0x6b175474e89094c44da98b954eedeac495271d0f',
    graphUrl:'https://api.thegraph.com/subgraphs/name/raisehq/dai-mainnet',
    query:'' , search:'', widget:'' },
  { id: "maker", group: 6, label: "Maker", level: 2,
    img:'maker.png',
    url:'https://makerdao.com',
    contract:'0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    graphUrl:'https://api.thegraph.com/subgraphs/name/protofire/maker-protocol' ,
    query:'' , search:'', widget:'' },
  { id: "sushi", group: 2, label: "Sushi swap", level: 2,
    img:'sushiswap.png',
    url:'https://sushiswap.org',
    contract:'0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    graphUrl:'https://api.thegraph.com/subgraphs/name/croco-finance/sushiswap' ,
    query:'' , search:'', widget:'' },
  { id: "zapper", group: 4, label: "Zapper", level: 2,
    img:'zapper.png',
    url:'https://zapper.fi',
    contract:'',
    graphUrl:'' ,
    query:'' , search:'', widget:'' },
  { id: "zerion", group: 4, label: "Zerion", level: 2,
    img:'zerion.png',
    url:'https://app.zerion.io',
    contract:'',
    graphUrl:'' ,
    query:'' , search:'', widget:'' },
  { id: "zeroswap", group: 1, label: "Zeroswap", level: 2,
    img:'',
    url:'https://zeroswap.io',
    contract:'0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5',
    graphUrl:'' ,
    query:'' , search:'', widget:'' },
        // { id: "", group: 0, label: "", level: 2,
        //   img:'',
        //   url:'https://',
        //   contract:'',
        //   graphUrl:'' ,
        //   query:'' , search:'' },
        //   { id: "", group: 0, label: "", level: 2,
        //     imgOnline:'',
        //     url:'https://',
        //     contract:'',
        //     graphUrl:'' ,
        //     query:'' , search:'' },


];

export const links:Link = [
  { target: "ethereum", source: "omnibridge" , distance: 1000, contract:'0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016'},
  { target: "ethereum", source: "aave" , distance: 40 },
  { target: "ethereum", source: "uniswap" , distance: 40 },
  { target: "ethereum", source: "pos-bridge" , distance: 100 },
  { target: "ethereum", source: "tether" , distance: 40 },
  { target: "ethereum", source: "chainlink" , distance: 40 },
  { target: "ethereum", source: "wrapped-bitcoin" , distance: 40 },
  { target: "ethereum", source: "usd-coin" , distance: 40 },
  { target: "ethereum", source: "binance-usd" , distance: 40 },
  { target: "ethereum", source: "dai" , distance: 40 },
  { target: "ethereum", source: "maker" , distance: 40 },
  { target: "ethereum", source: "sushi" , distance: 40 },
  { target: "ethereum", source: "zapper" , distance: 40 },
  { target: "ethereum", source: "zeroswap" , distance: 40 },
  { target: "ethereum", source: "connext" , distance: 40 },
  { target: "ethereum", source: "zerion" , distance: 40 },
  { target: "bitcoin", source: "wrapped-bitcoin" , distance: 40 },
  { target: "xdai", source: "honey" , distance: 100 },
  { target: "xdai", source: "agave-token" , distance: 40 },
  { target: "xdai", source: "omnibridge" , distance: 40, contract:'0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6' },
  { target: "xdai"  , source: "connext", distance: 100 },
  { target: "xdai", source: "chainlink" , distance: 40 },
  { target: "xdai", source: "omnibridge_BSC" , distance: 40 , contract:'0x162E898bD0aacB578C8D5F8d6ca588c13d2A383F'},
  { target: "polygon"  , source: "quickswap", distance: 40 },
  { target: "polygon"  , source: "pos-bridge", distance: 100 },
  { target: "polygon", source: "connext" , distance: 100 },
  { target: "polygon", source: "chainlink" , distance: 40 },
  { target: "polygon", source: "zapper" , distance: 40 },
  { target: "polygon", source: "zerion" , distance: 40 },
  { target: "binance-coin", source: "binance-usd" , distance: 40 },
  { target: "binance-coin", source: "pancakeswap" , distance: 40 },
  { target: "binance-coin", source: "zapper" , distance: 40 },
  { target: "binance-coin", source: "chainlink" , distance: 40 },
  { target: "binance-coin", source: "zeroswap" , distance: 40 },
  { target: "binance-coin", source: "zerion" , distance: 40 },
  { target: "binance-coin", source: "omnibridge_BSC" , distance: 40 , contract:'0x05185872898b6f94AA600177EF41B9334B1FA48B'},
  { target: "maker", source: "dai" , distance: 40 },
  { target: "uniswap", source: "honey" , distance: 50 },
  { target: "uniswap", source: "pancakeswap" , distance: 50 },
  { target: "uniswap", source: "sushi" , distance: 50 },
  { target: "aave", source: "agave-token" , distance: 50 },
  // { target: "", source: "" , distance:  },
];
