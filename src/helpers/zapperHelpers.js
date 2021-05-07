
export const api_key='&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241'

export const networks_zapper =['ethereum','polygon','optimism','xdai','binance-smart-chain']

const tokensEndpoint = (addresses, network) => {return `https://api.zapper.fi/v1/protocols/tokens/balances?addresses%5B%5D=${addresses}&network=${network}`}

export async function getWalletTokens(address, network){
  let endpoint = tokensEndpoint(address, network)
  let endpointAuthorized=endpoint.concat(api_key)
  // console.log(endpointAuthorized)
  const dataFetched = await Promise.all([
    fetch(endpointAuthorized)
      .then(data => data.json())
  ])
  if(!dataFetched){
      return false;
  }
  else{
    let key = Object.keys(dataFetched[0])
    // console.log('key ', key)
    // console.log('dataFetched ',dataFetched)
    // console.log('dataFetched[0][key]', dataFetched[0][key])
    return dataFetched[0][key]
    //[0][address].products;
  }
}
