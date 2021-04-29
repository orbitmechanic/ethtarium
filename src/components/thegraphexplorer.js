import React, {useState} from "react";
import { Link } from "react-router-dom";
import ZapperComponent from './zapper';

export default function TheGraphExplorer(props) {
  let swagger = '' //this is an aaaawful filter..
  const [data, setData] = useState(null)

  function dataFetched(dataFetched){
    setData(dataFetched)
  }

  if(props && props.endpoint === 'Swagger API'){
    swagger = (
      <div>
        <ZapperComponent
          onDataFetched ={dataFetched}
        />
      </div>
    )
  }else{
    swagger = 'not found'
  }
  return (
    <div className='App-header'>
      {swagger}
      <div>
      <p>{props.node?props.node:'No node was selected'}</p>
      <p>{props.endpoint?props.endpoint:'Go back and select a contract!'}</p>
      </div>

      <Link onClick={()=>{props.selectNode(null)}} to="/" style={{color:'white'}}>Go back!</Link>
    </div>
  )
}
