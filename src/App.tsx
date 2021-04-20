import React, {useState, useCallback} from "react";
import "./App.css";
import { BrowserRouter,Route } from "react-router-dom";
import Map from './components/map';
import TemporaryDrawer from './components/dataDrawer';
import TheGraphExplorer from './components/thegraphexplorer';

import {getNode} from './helpers/mapHelpers';

function App() {
  const [nodeSelected, setNodeSelected] = useState(null);
  const [nodeSelectedData, setNodeSelectedData] = useState(null);
  const [endpoint, setEndpoint] = useState(null);

  const selectGraphEndpoint = (endpoint: React.SetStateAction<null>)=>{
    console.log(endpoint)
    setEndpoint(endpoint)
  } ;

  const selectNode = useCallback((id)=>{
    setNodeSelected(id);
    setNodeSelectedData(getNode(id))
  },[]);

  return (
    <div className="App">
      <body className='App-body'>
      <BrowserRouter>
        <Route exact path="/">
          <Map
          onNodeSelected={selectNode}
          />
          <TemporaryDrawer
            nodeSelected = {nodeSelected}
            selectGraphEndpoint = {selectGraphEndpoint}
            nodeSelectedData = {nodeSelectedData}
          />
        </Route>
        <Route path='/TheGraphData'>
          <TheGraphExplorer
            node = {nodeSelected}
            endpoint = {endpoint}
            selectNode = {selectNode}
           />
        </Route>
      </BrowserRouter>
      </body>
      </div>
  );
}

export default App;
