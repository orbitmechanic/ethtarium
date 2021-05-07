import React,{useState} from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ConnextModal } from '@connext/vector-modal';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

// installed connect-vector-sdk ... is it necessary? yes! for management and tx's!
import {networks} from '../helpers/mapHelpers';
import {getTokens} from '../helpers/connextHelpers';
import {nodes} from '../helpers/localDB'
const connextAllows = [1, 100,137,56]



export default function Connext(props) {
  const [fromChainId, setFromChainId] = useState();
  const [toChainId, setToChainId] = useState();
  const [fromToken, setFromToken] = useState();
  const [toToken, setToToken] = useState();
  const [amount, setAmount] = useState();
  const [tokensToShow, setTokensToShow]=useState();
  const [showModal, setShowModal] = useState(false);

  const networksAllowed = networks.filter(x=>{return connextAllows.includes(x.chainId)})

  const cleanUpToChain = () => {document.getElementById('toChainId').innerHTML = null}

  function handleFromChain(e){
    setFromChainId(e)
    setTokensToShow(null)
    setToChainId(null)
    // cleanUpToChain() //breaks!
  }

  async function handleToChain(e){
    await retrieveTokens(fromChainId, e)
    setToChainId(e)
  }

  function retrieveTokens(from, to){
    let tokensAccumulator = [];
    let tokens = getTokens(from, to);
    tokens.forEach(x=>{
      tokensAccumulator.push(grabName(x['fromAssetId']))
    })
    setTokensToShow(tokensAccumulator)
  }

  function grabName(contract){
    let name;
    let node = nodes.find(x=>(x && x.contract && x.contract === contract.toLowerCase()))
    if(node){
      name = node.label
    }else{
      name = contract
    }
    return name
  }

  return (
    <div>
      <FormControl >
        <InputLabel style={{color:'white'}}>From chain</InputLabel>
        <Select
          style = {{backgroundColor:'white'}}
          id="fromChainId"
          value={fromChainId}
          onChange={(e)=>handleFromChain(e.target.value)}
        >
          {networksAllowed.map(network => {
            // console.log(element)
            return <MenuItem value={network.chainId}>{network.label}</MenuItem>
          })}
        </Select>
      </FormControl><br />
      {tokensToShow && tokensToShow.length > 0?
        <FormControl>
          <InputLabel style={{color:'white'}}>Token</InputLabel>
          <Select
          style = {{backgroundColor:'white'}}
          id="fromToken"
          value={fromToken}
          onChange={(e)=>setFromToken(e.target.value)}
          >
          {tokensToShow.map(token => {
            // console.log(element)
            return <MenuItem value={token}>{token}</MenuItem>
          })}
          </Select>
        </FormControl>
      :null}
      <br />
      <Divider />
      <br />
      <FormControl >
        <InputLabel style={{color:'white'}}>To chain</InputLabel>
        <Select
          style = {{backgroundColor:'white'}}
          id="toChainId"
          disabled={!fromChainId}
          value={toChainId}
          onChange={(e)=>handleToChain(e.target.value)}
        >
          {networksAllowed.map(network => {
            // console.log(element)
            return <MenuItem value={network.chainId}>{network.label}</MenuItem>
          })}
        </Select>
      </FormControl><br />
      {tokensToShow && tokensToShow.length > 0?
        <FormControl>
        <InputLabel style={{color:'white'}}>Token out</InputLabel>
        <Select
          style = {{backgroundColor:'white'}}
          id="toToken"
          value={toToken}
          onChange={(e)=>setToToken(e.target.value)}
          >
          {tokensToShow.map(token => {
            // console.log(element)
            return <MenuItem value={token}>{token}</MenuItem>
          })}
        </Select>
        </FormControl>
      :null}



      <br />
      and then open ConnextModal
      <Divider />
    {/*
      <ConnextModal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        onReady={params => console.log('MODAL IS READY =======>', params)}
        injectedProvider={window.ethereum}
        loginProvider={window.ethereum}
        withdrawalAddress={'0x75e4DD0587663Fce5B2D9aF7fbED3AC54342d3dB'}
        routerPublicIdentifier="vector7tbbTxQp8ppEQUgPsbGiTrVdapLdU5dH7zTbVuXRf1M4CEBU9Q"
        depositAssetId={'0xbd69fC70FA1c3AED524Bb4E82Adc5fcCFFcD79Fa'}
        depositChainProvider="https://goerli.infura.io/v3/<YOUR_PROJECT_ID>"
        depositChainId={5}
        withdrawAssetId={'0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1'} // likely use injected signer
        withdrawChainProvider="https://rpc-mumbai.matic.today"
        withdrawChainId={80001}
      />
*/}
    </div>
  );
}
