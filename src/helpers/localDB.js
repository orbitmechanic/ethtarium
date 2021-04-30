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
  { label: 'Networks', value: 0, subgroups:['chain','sidechain','rollup','zk','Networks_others'] },
  { label: 'Bridges', value: 1, subgroups:['custodial','Bridges_others'] },
  { label: 'Markets', value: 2, subgroups:['tokens','digital objects','prediction markets','Markets_others']},
  { label: 'Defi', value: 3, subgroups:['lend&borrow','farm','payments','Defi_others']},
  { label: 'Management', value: 4, subgroups:['assets managers','analysis','funds','Management_others'] },
  { label: 'Oracles', value: 5, subgroups:['natives','agnostic','social'] },
  { label: 'DAOs', value: 6, subgroups:['protocols','organizations','events'] },
  { label: 'Tokens', value: 7, subgroups:['bridge tokens','stake tokens','synthetix','derivatives', 'stables','digital currency', 'Tokens_others']  },
  { label: 'Services', value: 8, subgroups:['privacy','work','insurance','Services_others']  },

  ];



export const nodes:Node = [
// NETWORKS
    // add short:'btc'
            // short:'eth'
    // add chainId:1, chainId:100, etc

  { id: "ethereum", group: 0, label: "Ethereum", subgroup:'chain',level: 1,
  chainId:1,short:'eth',  img:'ethereum.png',
    url:'https://www.ethereum.org',
    explorer:'https://etherscan.org/',
    graphUrl:'' ,
    query:'' , search:'', widget:'' },
  { id: "bitcoin", group: 0, label: "Bitcoin", subgroup:'chain',level: 1,
  chainId:'nn',short:'btc',  img:'bitcoin.png',
    url:'https://bitcoin.org',
    explorer:'https://blockchair.com/bitcoin/',
    graphUrl:'' ,
    query:'' , search:'', widget:'' },
  { id: "xdai", group: 0, label: "xDai", subgroup:'sidechain',level: 1,
  chainId:100,short:'xdai',  img:'xdai.png' ,
    url:'https://www.xdaichain.com',
    explorer:'https://blockscout.com/',
    graphUrl:'https://api.thegraph.com/subgraphs/name/maxaleks/xdai-stakers' , //careful here!
    query:'' , search:'', widget:''},
  { id: "polygon"  , group: 0, label: "Polygon"   , subgroup:'sidechain',level: 1,
  chainId:137,short:'',  img:'polygon.png' ,
    url:'https://www.polygon.com',
    contract:'0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
    explorer:'https://explorer-mainnet.maticvigil.com/',
    graphUrl:'' ,
    query:'' , search:'', widget:''},
  { id: "binance-coin", group: 0, label: "BSC", subgroup:'chain',level: 1,
  chainId:56,short:'',  img:'binance-coin.png',
    url:'https://www.binance.com',
    explorer:'https://bscscan.com/',
    graphUrl:'' ,
    query:'' , search:'', widget:'' },
  {id:"optimism",group:0,subgroup:"rollup",label:"Optimism",chainId:100,short:'',img:"optimism.png",url:"https://optimism.io",graphUrl:"",query:"",search:"",widget:"",level:1,explorer:""},

//BRIDGES
  { id: "omnibridge"   , group: 1, label: "Omnibridge", subgroup:'custodial',level: 2,
  short:'',  img:'omnibridge.png' ,
    url:'https://https://omni.xdaichain.com/',
    contract:'',
    graphUrl:'https://api.thegraph.com/subgraphs/name/raid-guild/xdai-omnibridge' ,
    query:'' , search:'', widget:''},
  { id: "connext"   , group: 1, label: "Connext"   , subgroup:'Bridges_others',level: 2,
  short:'',  img:'connext.png' ,
    url:'https://connext.network',
    contract:'',
    graphUrl:'' ,
    query:'' , search:'', widget:''},
  { id: "pos-bridge"   , group: 1, label: "POS Bridge", subgroup:'Bridges_others',level: 2,
  short:'',  img:'pos-bridge.png' ,
    url:'https://wallet.matic.network',
    contract:'',
    graphUrl:'' ,
    query:'' , search:'', widget:''},
  { id: "wrapped-bitcoin", group: 7, label: "Wrapped BTC", subgroup:'custodial',level: 2,
  short:'',  img:'wrapped-bitcoin.png',
    url:'https://wbtc.network',
    contract:'0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
    graphUrl:'https://api.thegraph.com/subgraphs/name/ryabina-io/weth' ,
    query:'' , search:'', widget:'' },
  { id: "omnibridge_BSC", group: 1, label: "Omnibridge BSC-xDai", subgroup:'custodial',level: 2,
    short:'',  img:'omnibridge.png',
      url:'https://bsc-to-xdai-omnibridge.web.app/  ',
      graphUrl:'https://api.thegraph.com/subgraphs/name/maxaleks/xdai-to-bsc-omnibridge' ,
      query:'' , search:'', widget:'' },

    { id: "zeroswap", group: 1, label: "Zeroswap", subgroup:'Bridges_others',level: 2,
      short:'' , img:'zeroswap.png',
      url:'https://zeroswap.io',
      contract:'0x2edf094db69d6dcd487f1b3db9febe2eec0dd4c5',
      graphUrl:'' ,
      query:'' , search:'', widget:'' },
      {id:"celer-network",group:1,label:"Celer",short:'',img:"celer.png",url:"https://celer.network",graphUrl:"",query:"",search:"",widget:"",subgroup:'Bridges_others',level:2,contract:""},
// DAPPS
  { id: "aave"   , group: 3, label: "Aave" , subgroup:'lend&borrow',level: 2,
  short:'',  img:'aave.png' ,
    url:'https://aave.com',
    contract:'0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
    graphUrl:'https://api.thegraph.com/subgraphs/name/aave/protocol' ,
    query:'' , search:'', widget:''},
  { id: "uniswap"   , group: 2, label: "Uniswap"   , subgroup:'tokens',level: 2,
  short:'',  img:'uniswap.png' ,
    url:'https://app.uniswap.org',
    contract:'0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    graphUrl:'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2' ,
    query:'' , search:'', widget:''},
  { id: "tether", group: 7, label: "Tether", subgroup:'stables',level: 2,
  short:'',  img:'tether.png',
    url:'https://tether.to',
    contract:'0xdac17f958d2ee523a2206206994597c13d831ec7',
    graphUrl:'https://api.thegraph.com/subgraphs/name/alexklos/tether' ,
    query:'' , search:'', widget:'' },
  { id: "usd-coin", group: 7, label: "USDC", subgroup:'stables',level: 2,
  short:'',  img:'usd-coin.png',
    url:'https://circle.com',
    contract:'0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    graphUrl:'' ,
    query:'' , search:'', widget:'' },
  { id: "honey" , group: 2, label: "Honeyswap", subgroup:'tokens',level: 2,
  short:'',  img:'honey.png' ,
    url:'https://app.honeyswap.org',
    contract:'0x71850b7e9ee3f13ab46d67167341e4bdc905eef9', //xdai!
    graphUrl:'https://api.thegraph.com/subgraphs/name/1hive/honeyswap-v2' ,
    query:'' , search:'', widget:''},
  { id: "chainlink", group: 5, label: "Chainlink", subgroup:'agnostic',level: 2,
  short:'',  img:'chainlink.png',
    url:'https://chain.link',
    contract:'0x514910771af9ca656af840dff83e8264ecf986ca',
    graphUrl:'https://api.thegraph.com/subgraphs/name/tomafrench/chainlink' , //careful here!
    query:'' , search:'', widget:'' },
  { id: "agave-token", group: 3, label: "Agave"   , subgroup:'lend&borrow',level: 2,
  short:'',  img:'agave.png' ,
    url:'no ui yet',
    contract:'0x3a97704a1b25f08aa230ae53b352e2e72ef52843',//xdai!
    graphUrl:'https://api.thegraph.com/subgraphs/name/1hive/agave-rinkeby' , //rinkeby!! but for now..
    query:'' , search:'', widget:''},
  { id: "quickswap"  , group: 2, label: "Quickswap"  , subgroup:'tokens',level: 2,
  short:'',  img:'quickswap.png' ,
    url:'https://quickswap.exchange/#/swap',
    contract:'0x6c28aef8977c9b773996d0e8376d2ee379446f2f',
    graphUrl:'https://api.thegraph.com/subgraphs/name/developerfred/quick-swap' ,
    query:'' , search:'', widget:''},
  { id: "binance-usd", group: 7, label: " Binance USD", subgroup:'stables',level: 2,
  short:'',  img:'binance-usd.png',
    url:'https://paxos.com',
    contract:'0x4fabb145d64652a948d72533023f6e7a623c7c53',
    graphUrl:'' , // no binance shit in TheGraph!
    query:'' , search:'', widget:'' },
  { id: "pancakeswap", group: 2, label: "Pancake Swap", subgroup:'farm',level: 2,
  short:'',  img:'pancakeswap.png',
    url:'https://pancakeswap.finance',
    contract:'0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', //BSC!!
    graphUrl:'https://api.thegraph.com/subgraphs/name/developerfred/pancake-exchange' , // careful here!
    query:'' , search:'', widget:'' },
  { id: "dai", group: 7, label: "Dai", subgroup:'stables',level: 2,
  short:'',  img:'dai.png',
    url:'https://makerdao.com',
    contract:'0x6b175474e89094c44da98b954eedeac495271d0f',
    graphUrl:'https://api.thegraph.com/subgraphs/name/raisehq/dai-mainnet',
    query:'' , search:'', widget:'' },
  { id: "maker", group: 7, label: "Maker", subgroup:'stake tokens',level: 2,
  short:'',  img:'maker.png',
    url:'https://makerdao.com',
    contract:'0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
    graphUrl:'https://api.thegraph.com/subgraphs/name/protofire/maker-protocol' ,
    query:'' , search:'', widget:'' },
  { id: "sushi", group: 2, label: "Sushi swap", subgroup:'tokens',level: 2,
  short:'',  img:'sushiswap.png',
    url:'https://sushiswap.org',
    contract:'0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    graphUrl:'https://api.thegraph.com/subgraphs/name/croco-finance/sushiswap' ,
    query:'' , search:'', widget:'' },
  { id: "zapper", group: 4, label: "Zapper", subgroup:'assets managers',level: 2,
  short:'',  img:'zapper.png',
    url:'https://zapper.fi',
    contract:'',
    graphUrl:'Swagger API' ,
    query:'' , search:'', widget:'' },
  { id: "zerion", group: 4, label: "Zerion", subgroup:'assets managers',level: 2,
  short:'',  img:'zerion.png',
    url:'https://app.zerion.io',
    contract:'',
    graphUrl:'' ,
    query:'' , search:'', widget:'' },
  {id:"1inch",group:2,label:"1inch",short:'',img:"1inch.png",url:"1inch.io",graphUrl:"",query:"",search:"",widget:"",subgroup:'tokens',level:2,contract:"0x111111111117dc0aa78b770fa6a738034120c302"},
  {id:"compound",group:3,label:"Compound",short:'',img:"compound.png",url:"https://compound.finance",graphUrl:"https://thegraph.com/explorer/subgraph/graphprotocol/compound-v2",query:"",search:"",widget:"",subgroup:'lend&borrow',level:2,contract:"0xc00e94cb662c3520282e6f5717214004a7f26888"},
  {id:"covalent",group:6,label:"Covalent",short:'',img:"covalent.png",url:"https://www.covalenthq.com/",graphUrl:"",query:"",search:"",widget:"",subgroup:'organizations',level:2,contract:""},
  {id:"depay",group:3,label:"DePay",short:'',img:"depay.png",url:"https://www.depay.fi",graphUrl:"",query:"",search:"",widget:"",subgroup:'payments',level:2,contract:"0xa0bed124a09ac2bd941b10349d8d224fe3c955eb"},
  {id:"deversifi",group:2,label:"DeVersiFi",short:'',img:"deversifi.png",url:"https://www.deversifi.com/",graphUrl:"",query:"",search:"",widget:"",subgroup:'tokens',level:2,contract:""},
  {id:"ens",group:8,label:"ENS",short:'',img:"ens.png",url:"https://ens.domains/",graphUrl:"https://api.thegraph.com/subgraphs/name/ensdomains/ens",query:"",search:"",widget:"",subgroup:'Services_others',level:2,contract:""},
  {id:"loopring",group:2,label:"Loopring",short:'',img:"loopring.png",url:"https://loopring.org",graphUrl:"https://api.thegraph.com/subgraphs/name/protofire/loopring-3_1",query:"",search:"",widget:"",subgroup:'tokens',level:2,contract:"0xbbbbca6a901c926f240b89eacb641d8aec7aeafd"},
  {id:"nucypher",group:8,label:"NuCypher",short:'',img:"nucypher.png",url:"https://nucypher.com",graphUrl:"https://api.thegraph.com/subgraphs/name/levash0v/nucypher",query:"",search:"",widget:"",subgroup:'privacy',level:2,contract:"0x4fe83213d56308330ec302a8bd641f1d0113a4cc"},
  {id:"tellor",group:5,label:"Tellor",short:'',img:"tellor.png",url:"https://tellor.io",graphUrl:"https://api.thegraph.com/subgraphs/name/tellor-io/tellor-dispute",query:"",search:"",widget:"",subgroup:'natives',level:2,contract:"0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0"},
  {id:"the-graph",group:8,label:"TheGraph",short:'',img:"the-graph.png",url:"https://thegraph.com",graphUrl:"",query:"",search:"",widget:"",subgroup:'Services_others',level:2,contract:"0xc944e90c64b2c07662a292be6244bdf05cda44a7"},
  {id:"rarible",group:2,label:"Rarible",short:'',img:"rarible.png",url:"https://rarible.com/",graphUrl:"https://api.thegraph.com/subgraphs/name/nikolaymalmal/rarible",query:"",search:"",widget:"",subgroup:'digital objects',level:2,contract:"0xfca59cd816ab1ead66534d82bc21e7515ce441cf"},
  {id:"decentraland",group:7,label:"Decentraland",short:'',img:"decentraland.png",url:"https://decentraland.org",graphUrl:"https://api.thegraph.com/subgraphs/name/decentraland/marketplace",query:"","search":"",widget:"",subgroup:'digital currency',level:2,contract:"0x0f5d2fb29fb7d3cfee444a200298f468908cc942"},
  {id:"xdai-stake",group:7,label:"xDai Stake",short:'',img:"xdai-stake.png",url:"https://xdaichain.com",graphUrl:"",query:"",search:"",widget:"",subgroup:'stake tokens',level:2,contract:"0x0ae055097c6d159879521c384f1d2123d1f195e6"},
  {id:"gnosis",group:6,label:"Gnosis",short:'',img:"gnosis.png",url:"https://gnosis.io",graphUrl:"https://api.thegraph.com/subgraphs/name/gnosis/protocol-xdai",query:"",search:"",widget:"",subgroup:'protocols',level:2,contract:"0x6810e776880c02933d47db1b9fc05908e5386b96"},
  {id:"balancer",group:3,label:"Balancer",short:'',img:"balancer.png",url:"https://balancer.finance",graphUrl:"https://api.thegraph.com/subgraphs/name/yurycooliq/balancer",query:"",search:"",widget:"",subgroup:'tokens',level:2,contract:"0xba100000625a3754423978a60c9317c58a424e3d"},
  {id:"bao-finance",group:3,label:"Bao Finance",short:'',img:"bao.png",url:"https://bao.finance",graphUrl:"",query:"",search:"",widget:"",subgroup:'farm',level:2,contract:"0x374cb8c27130e2c9e04f44303f3c8351b9de61c1"},


];

export const links:Link = [
  {target:"ethereum",source:"optimism",distance:70},
  {curvature:2,rotation:30,target:"optimism",source:"optimism",distance:60},
  {target:"ethereum",source:"bao-finance",distance:180},
  {target:"ethereum",source:"xdai-stake",distance:400},
  {target:"ethereum",source:"gnosis",distance:170},
  {target:"ethereum",source:"balancer",distance:150},
  {target:"ethereum",source:"1inch",distance:160},
  {target:"ethereum",source:"decentraland",distance:170},
  {target:"ethereum",source:"celer-network",distance:180,contract1:"0x4f9254c83eb525f9fcf346490bbb3ed28a81c667"},
  {target:"ethereum",source:"compound",distance:140},
  {target:"ethereum",source:"covalent",distance:180},
  {target:"ethereum",source:"depay",distance:180},
  {target:"ethereum",source:"deversifi",distance:180},
  {target:"ethereum",source:"ens",distance:140},
  {target:"ethereum",source:"loopring",distance:170},
  {target:"ethereum",source:"nucypher",distance:180},
  {target:"ethereum",source:"tellor",distance:150},
  {target:"ethereum",source:"the-graph",distance:180},
  {target:"ethereum",source:"rarible",distance:180},
  {curvature:0,rotation:10, target: "ethereum", source: "omnibridge" , distance: 150, contract:'0x4aa42145Aa6Ebf72e164C9bBC74fbD3788045016'},
  { target: "ethereum", source: "aave" , distance: 140 },
  { target: "ethereum", source: "uniswap" , distance: 150 },
  { target: "ethereum", source: "pos-bridge" , distance: 150 },
  { target: "ethereum", source: "tether" , distance: 160 },
  { target: "ethereum", source: "chainlink" , distance: 150 },
  { target: "ethereum", source: "wrapped-bitcoin" , distance: 160 },
  { target: "ethereum", source: "usd-coin" , distance: 150 },
  { target: "ethereum", source: "binance-usd" , distance: 170 },
  { target: "ethereum", source: "dai" , distance: 150 },
  { target: "ethereum", source: "maker" , distance: 140 },
  { target: "ethereum", source: "sushi" , distance: 120 },
  { target: "ethereum", source: "zapper" , distance: 200 },
  { target: "ethereum", source: "zeroswap" , distance: 190 },
  { target: "ethereum", source: "connext" , distance: 170 },
  { target: "ethereum", source: "zerion" , distance: 200 },
  { target: "bitcoin", source: "wrapped-bitcoin" , distance: 140 },
  {target:"xdai",source:"xdai-stake",distance:50},
  {target:"xdai",source:"gnosis",distance:160},
  { target: "xdai", source: "honey" , distance: 150 },
  { target: "xdai", source: "agave-token" , distance: 160 },
  { target: "xdai", source: "omnibridge" , distance: 120, contract:'0x7301CFA0e1756B71869E93d4e4Dca5c7d0eb0AA6' },
  { target: "xdai"  , source: "connext", distance: 120 },
  { target: "xdai", source: "chainlink" , distance: 180 },
  { target: "xdai", source: "omnibridge_BSC" , distance: 120 , contract:'0x162E898bD0aacB578C8D5F8d6ca588c13d2A383F'},
  {target:"xdai",source:"bao-finance",distance:160},
  { target: "polygon"  , source: "quickswap", distance: 150 },
  { target: "polygon"  , source: "pos-bridge", distance: 120 },
  { target: "polygon", source: "connext" , distance: 120 },
  { target: "polygon", source: "chainlink" , distance: 190 },
  { target: "polygon", source: "zapper" , distance: 190 },
  { target: "polygon", source: "zerion" , distance: 190 },
  { target: "binance-coin", source: "binance-usd" , distance: 90 },
  { target: "binance-coin", source: "pancakeswap" , distance: 140 },
  { target: "binance-coin", source: "zapper" , distance: 180 },
  { target: "binance-coin", source: "chainlink" , distance: 180 },
  { target: "binance-coin", source: "zeroswap" , distance: 120 },
  { target: "binance-coin", source: "zerion" , distance: 180 },
  { target: "binance-coin", source: "omnibridge_BSC" , distance: 120 , contract:'0x05185872898b6f94AA600177EF41B9334B1FA48B'},
  { target: "maker", source: "dai" , distance: 50 },
  { target: "omnibridge", source: "omnibridge_BSC" , distance: 30 },
  // { target: "uniswap", source: "honey" , distance: 40 },
  // { target: "uniswap", source: "pancakeswap" , distance: 70 },
  // { target: "uniswap", source: "sushi" , distance: 70 },
  // { target: "aave", source: "agave-token" , distance: 30 },
  // { target: "", source: "" , distance:  },
];
