import { useState, useCallback } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

//Structure
import Layout from "./components/Layout";
//Pages
import Home from "./components/pages/Home";
import Frontwip from "./components/pages/Frontwip";

//Components
import Map from "./components/map";
import TemporaryDrawer from "./components/dataDrawer";
import TheGraphExplorer from "./components/thegraphexplorer";
import Landing from "./components/landing";
import AddNode from "./components/add";

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
      <Layout>
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
        <Route path="/Map">
          <Frontwip
            onNodeSelected={selectNode}
            selectGraphEndpoint={selectGraphEndpoint}
          />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
