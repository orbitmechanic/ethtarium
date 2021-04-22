import React, { useState, useCallback } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

//Components
import Map from "./components/map";
import TemporaryDrawer from "./components/dataDrawer";
import TheGraphExplorer from "./components/thegraphexplorer";
import Landing from "./components/landing";
import AddNode from "./components/add";
//UI

//Functions
import { getNode } from "./helpers/mapHelpers";
import Frontwip from "./components/pages/Frontwip";
import Layout from "./components/Layout";
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
    <Layout>
      <div className="App">
        <div className="App-body">
          <BrowserRouter>
            <Route exact path="/">
              <Landing selectGraphEndpoint={selectGraphEndpoint} />
            </Route>
            <Route path="/Map">
              <Map onNodeSelected={selectNode} />
              <TemporaryDrawer
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
            <Route path="/Frontwip">
              <Frontwip
                onNodeSelected={selectNode}
                selectGraphEndpoint={selectGraphEndpoint}
              />
            </Route>
          </BrowserRouter>
        </div>
      </div>
    </Layout>
  );
}

export default App;
