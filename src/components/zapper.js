import React, {useState} from 'react'
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

import {networks} from '../helpers/mapHelpers';
const api_key='&api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241'

export default function ZapperComponent(props) {
  const [suboptions, setSuboptions] = useState(null)
  const [data, setData] = useState(null)
  const options=[
    {name:'prices',endpoint:'https://api.zapper.fi/v1/prices?network=',
    inputs:[{name:'networks',suboptions:['ethereum','polygon','optimisim','xdai','binance-smart-chain']}]},
    {name:'',endpoint:''},
    {name:'',endpoint:''},
    {name:'',endpoint:''},]

  async function makerZapperCall(){
    const request:String|null = document.getElementById('zapperEndpoint').innerHTML.toLowerCase()
    const suboption:String|null = document.getElementById('suboption').innerHTML.toLowerCase()
    let option = getOption(request)
    let endpoint = option.endpoint.concat(suboption)
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

  function chooseZapperCall(){
    const request:String|null = document.getElementById('zapperEndpoint').innerHTML.toLowerCase()
    let option = getOption(request)
    if(option && option.inputs && option.inputs.length>0){
      setSuboptions(option.inputs[0].suboptions)
    }

  }
  return (
    <div>
      <Select
        labelId="APICall"
        id="zapperEndpoint"
        onChange={chooseZapperCall}
        >
        {options.map(element => {
          // console.log(element)
          return <MenuItem value={element.endpoint}>{element.name}</MenuItem>
        })}
      </Select>
      {suboptions?
        <Select
          labelId='Suboption'
          id='suboption'>
          {suboptions.map(suboption=>{
            return <MenuItem value={suboption} id={suboption} >{suboption}</MenuItem>
          })}
        </Select>
      :null}
      <Button onClick={makerZapperCall}>Call!</Button>
    </div>
  )
}
