

export const mainnetRouter = {vector:'vector892GMZ3CuUkpyW8eeXfW2bt5W73TWEXtgV71nphXUXAmpncnj8', signer:'0xE540998865aFEB054021dc849Cc6191b8E09dC08'}

export function getTokens(fromChainId, toChainId){
  let routes = hostedRouters.filter(x=> x['fromChainId']===fromChainId && x['toChainId']===toChainId);
  // let inTokens = routes.filter(x=>x['fromAssetId'])
  // let outTokens = routes.filter(x=>x['toAssetId'])
  // [inTokens, outTokens];
  let tokens = routes
  return tokens;
}

// from hostedRouters we should extract possibles swaps
const hostedRouters=[
{
  "fromChainId": 1,
  "toChainId": 137,
  "fromAssetId": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  "toAssetId": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 137,
  "toChainId": 1,
  "fromAssetId": "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  "toAssetId": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 56,
  "toChainId": 137,
  "fromAssetId": "0x55d398326f99059ff775485246999027b3197955",
  "toAssetId": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 137,
  "toChainId": 56,
  "fromAssetId": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  "toAssetId": "0x55d398326f99059ff775485246999027b3197955",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 56,
  "toChainId": 100,
  "fromAssetId": "0x55d398326f99059ff775485246999027b3197955",
  "toAssetId": "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 100,
  "toChainId": 56,
  "fromAssetId": "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
  "toAssetId": "0x55d398326f99059ff775485246999027b3197955",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 100,
  "toChainId": 137,
  "fromAssetId": "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
  "toAssetId": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 137,
  "toChainId": 100,
  "fromAssetId": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  "toAssetId": "0x4ecaba5870353805a9f068101a40e0f32ed605c6",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 1,
  "toChainId": 100,
  "fromAssetId": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  "toAssetId": "0x0000000000000000000000000000000000000000",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 100,
  "toChainId": 1,
  "fromAssetId": "0x0000000000000000000000000000000000000000",
  "toAssetId": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 56,
  "toChainId": 137,
  "fromAssetId": "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
  "toAssetId": "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 137,
  "toChainId": 56,
  "fromAssetId": "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
  "toAssetId": "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 56,
  "toChainId": 100,
  "fromAssetId": "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
  "toAssetId": "0x4537e328bf7e4efa29d05caea260d7fe26af9d74",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 100,
  "toChainId": 56,
  "fromAssetId": "0x4537e328bf7e4efa29d05caea260d7fe26af9d74",
  "toAssetId": "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 100,
  "toChainId": 137,
  "fromAssetId": "0x4537e328bf7e4efa29d05caea260d7fe26af9d74",
  "toAssetId": "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 137,
  "toChainId": 100,
  "fromAssetId": "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
  "toAssetId": "0x4537e328bf7e4efa29d05caea260d7fe26af9d74",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 56,
  "toChainId": 137,
  "fromAssetId": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
  "toAssetId": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 137,
  "toChainId": 56,
  "fromAssetId": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
  "toAssetId": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 56,
  "toChainId": 100,
  "fromAssetId": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
  "toAssetId": "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 100,
  "toChainId": 56,
  "fromAssetId": "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
  "toAssetId": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 100,
  "toChainId": 137,
  "fromAssetId": "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
  "toAssetId": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 137,
  "toChainId": 100,
  "fromAssetId": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
  "toAssetId": "0xddafbb505ad214d7b80b1f830fccc89b60fb7a83",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 100,
  "toChainId": 137,
  "fromAssetId": "0x44fA8E6f47987339850636F88629646662444217",
  "toAssetId": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 137,
  "toChainId": 100,
  "fromAssetId": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  "toAssetId": "0x44fA8E6f47987339850636F88629646662444217",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 137,
  "toChainId": 100,
  "fromAssetId": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  "toAssetId": "0x0000000000000000000000000000000000000000",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 100,
  "toChainId": 137,
  "fromAssetId": "0x0000000000000000000000000000000000000000",
  "toAssetId": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 1,
  "toChainId": 137,
  "fromAssetId": "0x0000000000000000000000000000000000000000",
  "toAssetId": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 100,
  "toChainId": 56,
  "fromAssetId": "0x0000000000000000000000000000000000000000",
  "toAssetId": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 56,
  "toChainId": 100,
  "fromAssetId": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  "toAssetId": "0x0000000000000000000000000000000000000000",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 56,
  "toChainId": 137,
  "fromAssetId": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  "toAssetId": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
},
{
  "fromChainId": 137,
  "toChainId": 56,
  "fromAssetId": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
  "toAssetId": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
  "priceType": "hardcoded",
  "hardcodedRate": "1"
}];
