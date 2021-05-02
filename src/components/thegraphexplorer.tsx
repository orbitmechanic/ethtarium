import React from "react";
import { Link } from "react-router-dom";

export default function TheGraphExplorer(props: { node: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; endpoint: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; selectNode: (arg0: null) => void; }) {

  return (
    <div className='App-header'>
      <p>{props.node?props.node:'No node was selected'}</p>
      <p>{props.endpoint?props.endpoint:'Go back and select a contract!'}</p>
      <Link onClick={()=>{props.selectNode(null)}} to="/" style={{color:'white'}}>Go back!</Link>
    </div>
  )
}
