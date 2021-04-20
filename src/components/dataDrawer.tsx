import React,{useState} from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import LinkIcon from '@material-ui/icons/Link';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';

import {fetchGeckoData, getExplorer} from '../helpers/mapHelpers';

export default function TemporaryDrawer(props: { nodeSelected: {} | null | undefined; nodeSelectedData: { img: any; contract: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; label: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; url: {} | null | undefined; group: number; graphUrl: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; selectGraphEndpoint: (arg0: any) => void; }) {
  const [state, setState] = React.useState({
    top: false,
  });
  const [nodeSelected, setNodeSelected] = useState(null);
  const [geckoData, setGeckoData] = useState(null);

  const toggleDrawer = (anchor: string, open: boolean) => (event: { type: string; key: string; }) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };



  if(props.nodeSelected){
    if(nodeSelected !== props.nodeSelected){
      setNodeSelected(props.nodeSelected)
      fetchGeckoData(props.nodeSelected).then((gecko)=>{setGeckoData(gecko);})
  }}

  function getImage(){
    let image;
     if(props.nodeSelectedData && props.nodeSelectedData.img){
       image = require(`../images/mini_${props.nodeSelectedData.img}`)
     }else{
       image = require('../images/mini_default.png');
     }
     return image.default
  }

  function getAddress(){
    let explorer = getExplorer(props.nodeSelected)
    let addressContract=explorer+`address/${props.nodeSelectedData.contract}`
    return addressContract
  }

  const list = (anchor: string) => (
    <div
      className='App-header'
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
      {props.nodeSelectedData?
        <div>
          <span>
          <span>{props.nodeSelectedData.label}</span>
          <img src={getImage(props.nodeSelectedData)} style={{marginLeft: "auto"}} alt='' width="50" height="50"></img>
          </span>
          <p>URL:
          <a href={props.nodeSelectedData.url} style={{color:'white'}} rel="noreferrer" target="_blank">{props.nodeSelectedData.url}</a>
          <LinkIcon />
          </p>
        </div>
        :null}
        {geckoData && geckoData[0] && geckoData[0][0]?
          <div>
          <p>Current price:
            U$s {geckoData[0][0]?geckoData[0][0].current_price:'no data'}
          </p>
          <p>Market Cap:
            U$s {geckoData[0][0]?geckoData[0][0].market_cap:'no data'}
          </p>
          <p>24hs price change:
          {geckoData[0][0]?geckoData[0][0].price_change_percentage_24h:'no data'} %
          </p>
        </div>
        :null}
      </div>

      <Divider  />
      {props.nodeSelectedData && props.nodeSelectedData.group !== 0?
        <div>
        Contracts <br />
          <a href={getAddress()} style={{color:'white'}}
              rel="noreferrer" target="_blank" >{props.nodeSelectedData.contract}</a>
              <LinkIcon />
{/*
          <List>
          {props.nodeSelectedData.contract.forEach(
            (contract)=>{
                <ListItem id={contract}>
                    <a href={''} rel="noreferrer" target="_blank" id={contract}>{contract}</a>
                </ListItem> //need to get the explorer first (make a function!)
                })}
        </List>
*/}
        </div>
        :null}

      <Divider />
      The Graph endpoints <br />
      {props.nodeSelectedData && props.nodeSelectedData.graphUrl?
        <div>
        <Link to='/TheGraphData' >
          <Button onClick={()=>props.selectGraphEndpoint(props.nodeSelectedData.graphUrl)} style={{color:'white'}}>{props.nodeSelectedData.graphUrl}</Button>
          <LinkIcon style={{color:'white'}}/>
        </Link>
        </div>
      :null}

      <Divider />
      Links (interact directly with contracts!) where to go from here
      for ex:
      network -> bridges -> other networks ||
      network -> swap tokens
    </div>
  );



  return(
    <div>
    {props.nodeSelected?
      <div>
      {ReactDOM.createPortal(
        <div style={{marginLeft: "auto" }}>
          <Button onClick={toggleDrawer('top', true)} style={{color:'white', fontWeight:'bold'}} >{props.nodeSelected}</Button>
        </div>,
        document.getElementById('toolbar'))}
      </div>
    :null}
      <React.Fragment key={'top'}>

        <Drawer anchor={'top'} open={state['top']} onClose={toggleDrawer('top', false)}>
            {list('top')}
          </Drawer>
      </React.Fragment>

    </div>
  );
}
