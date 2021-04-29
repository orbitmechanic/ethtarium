import React, {useState} from 'react'
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const api_key='&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241'

const protocols_balance = ['autofarm', 'aave', 'aave-amm', 'aave-v2', 'alchemix', 'alpha', 'b-protocol', 'badger', 'balancer', 'bancor', 'barnbridge', 'bitcoin', 'compound', 'cover', 'cream', 'curve', 'defisaver', 'derivadex', 'dhedge', 'dforce', 'dodo', 'dsd', 'dydx', 'ellipsis', 'esd', 'futureswap', 'idle', 'harvest', 'hegic', 'keeper-dao', 'linkswap', 'loopring', 'liquity', 'maker', 'mooniswap', '1inch', 'pancakeswap', 'nft', 'other', 'pickle', 'pooltogether', 'quickswap', 'rari', 'realt', 'reflexer', 'saddle', 'sfinance', 'shell', 'smoothy', 'snowswap', 'sushiswap', 'swerve', 'synthetix', 'tokensets', 'tokens', 'uniswap', 'uniswap-v2', 'unit', 'value', 'venus', 'vesper', 'xsigma', 'yearn']
const protocols_pools = ['balancer', 'bancor', 'curve', 'ellipsis', 'loopring', '1inch', 'pancakeswap', 'quickswap', 'sfinance', 'snowswap', 'sushiswap', 'uniswap-v2', 'linkswap', 'dodo', 'saddle', 'xsigma']
const networks_zapper =['ethereum','polygon','optimisim','xdai','binance-smart-chain']
const protocols_vault = ['badger', 'harvest', 'mushroom', 'pickle', 'pooltogether','yearn']
const protocols_lending = ['aave', 'compound']
const protocols_farm = ['masterchef', 'single-staking', 'geyser', 'gauge']



export default function ZapperComponent(props) {
  const [data, setData] = useState(null)
  const [protocol, setProtocol] = useState('')
  const [addresses, setAddresses] = useState('')
  const [network, setNetwork] = useState('')

  const options=[
    {name:'prices',endpoint:`https://api.zapper.fi/v1/prices?network=${network}`,
    inputs:[{name:'network',suboptions:networks_zapper}]},
    {name:'protocol balances',endpoint:`https://api.zapper.fi/v1/protocols/${protocol}/balances?${addresses}%5B%5D=string&network=${network}`, inputs:[{name:'network', suboptions:networks_zapper},{name:'Addresses', suboptions:['to define','how to fetch']},{name:'protocol',suboptions:protocols_balance}]},
    {name:'supported balances',endpoint:'https://api.zapper.fi/v1/balances/supported'},
    {name:'supported protocols',endpoint:'https://api.zapper.fi/v1/protocols/balances/supported'},
    {name:'pool stats',endpoint:`https://api.zapper.fi/v1/pool-stats/${protocol}?network=${network}`,
      inputs:[{name:'network', suboptions:networks_zapper},{name:'protocol',suboptions:protocols_pools}]},
    {name:'vault stats',endpoint:`https://api.zapper.fi/v1/vault-stats/${protocol}?network=${network}`,
      inputs:[{name:'protocol', suboptions:protocols_vault}]},
    {name:'farm stats',endpoint:`https://api.zapper.fi/v1/farms/${protocol}?network=${network}`,
      inputs:[{name:'network', suboptions:networks_zapper},{name:'protocol', suboptions:protocols_farm}]},
    {name:'lending stats',endpoint:`https://api.zapper.fi/v1/lending-stats/${protocol}?network=${network}`,
      inputs:[{name:'network', suboptions:networks_zapper},{name:'protocol', suboptions:protocols_lending}]},
    // {name:'',endpoint:'',inputs:[]},
    // {name:'',endpoint:'',inputs:[]},
    // {name:'',endpoint:'',inputs:[]},
    // {name:'',endpoint:'',inputs:[]},
  ]

  const [optionSelected, setOptionSelected] = useState()

  async function makerZapperCall(){
    let endpoint = optionSelected.endpoint
    let endpointAuthorized=endpoint.concat(api_key)
    console.log(endpointAuthorized)
    const dataFetched = await Promise.all([
      fetch(endpointAuthorized)
        .then(data => data.json())
    ])
    if(!dataFetched){
        return false;
    }
    else{
      setData(dataFetched)
      return dataFetched;
    }
  }


  const getOption=(id)=>options.find(x=> x.name === id)

  function setArguments(ev, inputItemName){
    console.log(inputItemName)
    if(inputItemName === 'network'){
      setNetwork(ev.target.value)
    }else if(inputItemName === 'protocol'){
      setProtocol(ev.target.value)
    }else if(inputItemName === 'Addresses'){
      setAddresses(ev.target.value)
      console.log('good luck!')
    }
    // const network = document.getElementById('suboption_network').innerHTML.toLowerCase()
  }

  function chooseZapperCall(e){
    // const request:String|null = document.getElementById('zapperEndpoint').innerHTML.toLowerCase()
    let option = getOption(e.target.value)
    setOptionSelected(option)
    setNetwork('')
    setProtocol('')
    setAddresses('')
  }

  return (
    <div>
      <FormControl>
      <InputLabel>Select API call</InputLabel>
      <Select
        labelId="APICall"
        style = {{minWidth: 120,}}
        id="zapperEndpoint"
        onChange={(e)=>{chooseZapperCall(e)}}
        >
        {options.map(element => {
          return <MenuItem value={element.name}>{element.name}</MenuItem>
        })}
      </Select><br />
      </FormControl><br />
      {optionSelected && optionSelected.inputs && optionSelected.inputs.length > 0 ?
        <div>
        {optionSelected.inputs.map(inputItem=>{
          return (
            <div>
            <FormControl>
            <InputLabel id={inputItem.name}>{inputItem.name}</InputLabel>
            <Select
            style = {{minWidth: 120,}}
            labelId='Suboption'
            onChange={(e)=>{setArguments(e, inputItem.name)}}
            id={'suboption_'+inputItem.name}>
            {inputItem.suboptions.map(suboption=>{
              return <MenuItem value={suboption} id={suboption} >{suboption}</MenuItem>
            })}
            </Select>
            </FormControl>
            <br />
            </div>
          )
        })}
        </div>
      :null}<br />
      <Button onClick={makerZapperCall}>Call!</Button>
      <Divider />
      {data?
        <div>
        Downloaded a file of {data[0].length} lines.<br />
        <Button onClick={()=>props.onDataFetched(data[0])}>Click to download!</Button>
        </div>
      :null}
    </div>
  )
}
