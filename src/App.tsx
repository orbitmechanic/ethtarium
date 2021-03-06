import { useState, useCallback, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Web3Provider } from "@ethersproject/providers"; //JsonRpcProvider,

//Structure
//Pages
import Home from "./components/pages/Home";
//Components
import Map from "./components/map";
import NodeOptions from "./components/nodeOptions";

import TheGraphExplorer from "./components/thegraphexplorer";
// import Landing from "./components/landing";
import AddNode from "./components/add";
//UI
// import Frontwip from "./components/pages/Frontwip";
import Layout from "./components/Layout";

//Functions
import { getNode } from "./helpers/mapHelpers";

// others
import { ethers } from "ethers";

const INFURA_ID = "d96fbcc2473445f091831576efa0255f";
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

  async function donate() {
    if (!injectedProvider || injectedProvider === "not connected") {
      await loadWeb3Modal();
    }

    // let balance = await provider.getBalance("") // see how to get address!
    // let balanceEth= ethers.utils.formatEther(balance)
    // let a_considerable_amount = float(balance) * 0.01 // balance is hex!
    try {
      try {
        let signer = injectedProvider.getSigner();
      } catch {
        await loadWeb3Modal();
      }
      let tx = signer.sendTransaction({
        to: "0xdA839fc103363c8fAf3cF32052E204a70B2d5829", //our address
        value: ethers.utils.parseEther("0.01"),
      });
    } catch {
      await loadWeb3Modal();
    }

    // handle return and reject (error)
    // console.log(tx)
  }

  const loadWeb3Modal = useCallback(async () => {
    const web3Provider = await web3Modal.connect();
    // if(!web3Provider){ //nope.. rejection returns 4001. handle that, but, no need of connection to use.
    // const provider = new ethers.providers.Web3Provider(window.ethereum)
    //   web3Provider = new JsonRpcProvider("https://mainnet.infura.io/v3/" + INFURA_ID)
    // }
    if (web3Provider) {
      let provider = new Web3Provider(web3Provider);
      setInjectedProvider(provider);
      provider.getNetwork().then((data) => setNetwork(data.chainId));
      provider.listAccounts().then((accounts) => {
        setAccount(accounts[0]);
      });
      //https://docs.ethers.io/v5/api/providers/provider/#Provider--account-methods
    } else {
      setNetwork("not connected");
      setAccount(null);
    }
    // const signer = web3Provider.getSigner() //use injectedProvider
  }, [setInjectedProvider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      //isnt requesting connection (canceled !web3...)
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/">
          <Home donate={donate} />
          {/*          <Landing selectGraphEndpoint={selectGraphEndpoint} />*/}
        </Route>
        <Route path="/Map">
          <Map
            onNodeSelected={selectNode}
            account={account}
            logoutOfWeb3Modal={logoutOfWeb3Modal}
            loadWeb3Modal={loadWeb3Modal}
            network={network}
          />
          <NodeOptions
            address={account}
            nodeSelected={nodeSelected}
            selectGraphEndpoint={selectGraphEndpoint}
            nodeSelectedData={nodeSelectedData}
            network={network}
          />
        </Route>
        <Route path="/TheGraphData">
          <TheGraphExplorer
            address={account}
            node={nodeSelected}
            endpoint={endpoint}
            selectNode={selectNode}
          />
        </Route>
        <Route path="/Add">
          <AddNode />
        </Route>
        {/* <button onClick={donate}>Donate</button> */}
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

window.ethereum &&
  window.ethereum.on("chainChanged", (chainId) => {
    setTimeout(() => {
      window.location.reload();
    }, 1);
  });

export default App;
