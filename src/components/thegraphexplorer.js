import React, {useState} from "react";
import { Link } from "react-router-dom";
import ZapperComponent from './zapper';
import TableDownload from '../helpers/xlsxDownloader'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

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
          address = {props.address}
          onDataFetched ={dataFetched}
        />
      </div>
    )
  }else{
    swagger = 'not found'
  }
  return (
    <div className='App-header' style={{backgroundColor:'#190038'}}>
      {swagger}
      <div>
      <p>{props.node?props.node:'No node was selected'}</p>
      <p>{props.endpoint?props.endpoint:'Go back and select a contract!'}</p>
      </div>
      <Divider />

      {data && data.length > 0  ?
        <div>
        Downloaded a file of {data.length} lines.<br />
        {/*<Button onClick={()=>props.onDataFetched(data)}>Click to download!</Button>*/}
        <TableDownload data={data}/>
        </div>
      :null}

      <Divider />
      <br />
      <Link onClick={()=>{props.selectNode(null)}} to="/">
      <Button style={{color:'white', fontWeight:'bold', backgroundColor:'#e000ca'}}>Go back!</Button>
      </Link>
      <br />
      <br />
    </div>
  )
}
