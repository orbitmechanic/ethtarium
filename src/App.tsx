import React, {useState, useCallback} from "react";
import "./App.css";
import Map from './components/map';
import TemporaryDrawer from './components/dataDrawer';

function App() {
  const [nodeSelected, setNodeSelected] = useState(null);

  const selectNode = useCallback((id)=>{
    setNodeSelected(id);
  },[]);

  return (
    <div className="App">
      <body className='App-body'>
        <Map
        onNodeSelected={selectNode}
        />
        <TemporaryDrawer
        nodeSelected = {nodeSelected}
        />
      </body>
    </div>
  );
}

export default App;
