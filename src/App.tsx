import { useState, useCallback, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {  JsonRpcProvider, Web3Provider } from "@ethersproject/providers";

//Structure
//Pages
import Home from "./components/Pages/Home";

//Components
import Map from "./components/map";
import NodeOptions from "./components/nodeOptions";

import TheGraphExplorer from "./components/thegraphexplorer";
import Landing from "./components/landing";
import AddNode from "./components/add";
//UI
import Frontwip from "./components/pages/Frontwip";
import Layout from "./components/Layout";

//Functions
import { getNode } from "./helpers/mapHelpers";

// others
import { ethers } from 'ethers';

const INFURA_ID = 'd96fbcc2473445f091831576efa0255f';
// other chains?
function App() {
  const [nodeSelected, setNodeSelected] = useState(null);
  const [nodeSelectedData, setNodeSelectedData] = useState(null);
  const [endpoint, setEndpoint] = useState(null);
  const [injectedProvider, setInjectedProvider] = useState();
  const [network, setNetwork] = useState();
  const [account, setAccount] = useState();


  const selectGraphEndpoint = (endpoint) => {
    setEndpoint(endpoint);
  };

  const selectNode = useCallback((id) => {
    setNodeSelected(id);
    setNodeSelectedData(getNode(id));
  }, []);



  async function donate(){
    if(!injectedProvider || injectedProvider === 'not connected'){
      await loadWeb3Modal();
    }

    // let balance = await provider.getBalance("") // see how to get address!
    // let balanceEth= ethers.utils.formatEther(balance)
    // let a_considerable_amount = float(balance) * 0.01 // balance is hex!
    let signer = injectedProvider.getSigner()
    const tx = signer.sendTransaction({
        to: "0xdA839fc103363c8fAf3cF32052E204a70B2d5829", //our address
        value: ethers.utils.parseEther("0.01")
    });
    // handle return and reject (error)
    // console.log(tx)
  }

  const loadWeb3Modal = useCallback(async () => {
    const web3Provider = await web3Modal.connect();
    if(!web3Provider){ //nope.. rejection returns 4001.
      // const provider = new ethers.providers.Web3Provider(window.ethereum)
      web3Provider = new JsonRpcProvider("https://mainnet.infura.io/v3/" + INFURA_ID)
    }
    if(web3Provider){
      let provider = new Web3Provider(web3Provider);
      setInjectedProvider(provider);
      provider.getNetwork().then(data=>setNetwork(data.chainId));
      provider.listAccounts().then(accounts=>{setAccount(accounts[0])})
      //other methods:
      // gasPrice = await provider.getGasPrice()
      // utils.formatUnits(gasPrice, "gwei") // to see it in gwei
//https://docs.ethers.io/v5/api/providers/provider/#Provider--account-methods
    }else{
      setNetwork('not connected')
    }
    // const signer = web3Provider.getSigner() //use injectedProvider
  }, [setInjectedProvider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) { //isnt entering
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  return (
    <BrowserRouter>
      <Layout >
        <Route exact path="/">
          <Landing selectGraphEndpoint={selectGraphEndpoint} />

        </Route>
        <Route path="/Map">
          <Map
            onNodeSelected={selectNode}
            account = {account}
            logoutOfWeb3Modal = {logoutOfWeb3Modal}
            loadWeb3Modal = {loadWeb3Modal}
             />
          <NodeOptions
            nodeSelected={nodeSelected}
            selectGraphEndpoint={selectGraphEndpoint}
            nodeSelectedData={nodeSelectedData}
          />
        </Route>
        <Route path="/TheGraphData">
          <TheGraphExplorer
            node={nodeSelected}
            endpoint={endpoint}
            selectNode={selectNode}
          />
        </Route>
        <Route path="/Add">
          <AddNode />
        </Route>
{/*
        <Route path="/Map">
          <Frontwip
            onNodeSelected={selectNode}
            selectGraphEndpoint={selectGraphEndpoint}
          />
        </Route>
*/}
        <Route path="/Home">
          <Home />
        </Route>
        <button onClick={donate}>Donate</button>
      </Layout>
    </BrowserRouter>
  );
}
const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: INFURA_ID,
      },
    },
  },
});

const logoutOfWeb3Modal = async () => {
  await web3Modal.clearCachedProvider();
  setTimeout(() => {
    window.location.reload();
  }, 1);
};

 window.ethereum && window.ethereum.on('chainChanged', chainId => {
  setTimeout(() => {
    window.location.reload();
  }, 1);
})



export default App;
