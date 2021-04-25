import { useState, useCallback } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

//Structure
//Pages
import Home from "./components/pages/Home";

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

function App() {
  const [nodeSelected, setNodeSelected] = useState(null);
  const [nodeSelectedData, setNodeSelectedData] = useState(null);
  const [endpoint, setEndpoint] = useState(null);

  const selectGraphEndpoint = (endpoint) => {
    // console.log(endpoint)
    setEndpoint(endpoint);
  };

  const selectNode = useCallback((id) => {
    setNodeSelected(id);
    setNodeSelectedData(getNode(id));
  }, []);

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Landing selectGraphEndpoint={selectGraphEndpoint} />
      </Route>
      <Route path="/Map">
        <Map onNodeSelected={selectNode} />
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
        <Route path="/Mapwip">
          <Frontwip
            onNodeSelected={selectNode}
            selectGraphEndpoint={selectGraphEndpoint}
          />
        </Route>
*/}
      <Route path="/Home">
        <Layout>
          <Home />
        </Layout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
