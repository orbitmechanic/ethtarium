import React, {useState} from "react";
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {options} from '../helpers/localDB';

export default function AddNode(props) {
  const [group, setGroup]=useState(null);
  function handleGroup(event){
    setGroup(event.target.value);
  }
  function generateJson(){
    // console.log(document.getElementById('nodeId').value)
    var obj = {};
    obj.id = document.getElementById('nodeId').value;
    obj.group = group;
    obj.label = document.getElementById('nodeLabel').value;
    obj.image = document.getElementById('nodeLabel').value;
    obj.url = document.getElementById('nodeUrl').value;
    obj.graphUrl = document.getElementById('nodeGraphUrl').value;
    obj.query = document.getElementById('nodeQuery').value;
    obj.search = document.getElementById('nodeSearch').value;
    obj.widget = document.getElementById('nodeWidget').value;
    if(group === 0){
      obj.level = 1;
      obj.explorer = document.getElementById('nodeExplorer').value;
    }else{
      obj.level = 2;
      obj.contract = document.getElementById('nodeContract').value;
    }
    var links = {};
    var links2 = {};
    if(group === 0){
      links.warning = 'no links are necessary to add a new network'
    }else if(group ===1){
      links.target = document.getElementById('nodeBridge1').value
      links.source = document.getElementById('nodeLabel').value
      links.distance = 100
      links.contract1 = document.getElementById('nodeContract1').value

      links2.target = document.getElementById('nodeBridge2').value
      links2.source = document.getElementById('nodeLabel').value
      links2.distance = 100
      links2.contract2 = document.getElementById('nodeContract2').value
    }else{
      links.target = document.getElementById('nodeNetwork').value
      links.source = document.getElementById('nodeLabel').value
      links.distance = 40

      links2.target = document.getElementById('nodeLabel').value
      links2.source = document.getElementById('nodeOther').value
      links2.distance = 40
    }


    console.log('Add the following element into the nodes DB (remember to add the image to the repo)')
    console.log(JSON.stringify(obj))
    console.log('Then copy the following links into the links DB')
    console.log(JSON.stringify(links))
    console.log(JSON.stringify(links2))
  }

  return (
    <div className='App-header'>
    <h2 style={{color:'white'}}>Node</h2>
    <br />
    <InputBase
      style={{backgroundColor:'grey',color:'white'}}
      id='nodeId'
      placeholder="id from coingecko (see url)"
      /><br />

    <Select
      labelId="demo-simple-select-label"
      id="nodeGroup"
      value={group}
      onChange={handleGroup}
    >
      {options.map(element => {
        // console.log(element)
        return <MenuItem value={element.value}>{element.label}</MenuItem>
      })}
    </Select>
    <br />
  <InputBase
    style={{backgroundColor:'grey',color:'white'}}
    id='nodeLabel'
    placeholder="Name to be viewed"
    /><br />
  <InputBase
      style={{backgroundColor:'grey',color:'white'}}
      id='nodeUrl'
      placeholder="url of website / dApp"
      /><br />
  {group === 0?
  <InputBase
    style={{backgroundColor:'grey',color:'white'}}
    id='nodeExplorer'
    placeholder="Url of explorer"
    />
    :
    <InputBase
    style={{backgroundColor:'grey',color:'white'}}
    id='nodeContract'
    placeholder="Address of contract"
    />
    }
      <br />
    <InputBase
      style={{backgroundColor:'grey',color:'white'}}
      id='nodeGraphUrl'
      placeholder="TheGraph endpoint"
      /><br />
    <InputBase
        style={{backgroundColor:'grey',color:'white'}}
        id='nodeQuery'
        placeholder="Query for TheGraph"
    /><br />
    <InputBase
      style={{backgroundColor:'grey',color:'white'}}
      id='nodeSearch'
      placeholder="Schemas for theGraph"
      /><br />
    <InputBase
        style={{backgroundColor:'grey',color:'white'}}
        id='nodeWidget'
        placeholder="Widget of dApp / others"
        /><br />
    <Divider />
    <h2 style={{color:'white'}}>Links</h2>
    {group === 1?
      <div>
      <InputBase
          style={{backgroundColor:'grey',color:'white'}}
          id='nodeBridge1'
          placeholder="id of network 1"
          /><br />
      <InputBase
          style={{backgroundColor:'grey',color:'white'}}
          id='nodeContract1'
          placeholder="address of contract network 1"
          /><br />
      <InputBase
          style={{backgroundColor:'grey',color:'white'}}
          id='nodeBridge2'
          placeholder="id of network 2"
          /><br />
      <InputBase
          style={{backgroundColor:'grey',color:'white'}}
          id='nodeContract2'
          placeholder="Address of contract network 2"
          /><br />
      </div>
      :
      <div>
        <InputBase
            style={{backgroundColor:'grey',color:'white'}}
            id='nodeNetwork'
            placeholder="id of network"
            /><br />
        <InputBase
            style={{backgroundColor:'grey',color:'white'}}
            id='nodeOther'
            placeholder="id of other node"
            /><br />
      </div>
    }

    <p>Links needed to be added at will</p>

    <Button onClick={()=>generateJson()}>Generate</Button>
    <p style={{color:'white'}}>Open your console!</p>
    <br />
    <br />



    </div>
  )
}
