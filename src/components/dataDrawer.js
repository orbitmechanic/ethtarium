import React,{useState} from 'react';
import ReactDOM from 'react-dom'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import {getNode, fetchGeckoData} from '../helpers/mapHelpers';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });
  const [nodeSelected, setNodeSelected] = useState(null);
  const [nodeSelectedData, setNodeSelectedData] = useState(null);
  const [geckoData, setGeckoData] = useState(null);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };



  if(props.nodeSelected){
    if(nodeSelected !== props.nodeSelected){
      setNodeSelected(props.nodeSelected)
      setNodeSelectedData(getNode(props.nodeSelected))
      fetchGeckoData(props.nodeSelected).then((gecko)=>{setGeckoData(gecko);})
      // const element = (
      //     <Button onClick={toggleDrawer('top', true)} style={{color:'white', fontWeight:'bold',marginLeft: "auto" }}>{props.nodeSelected}</Button>
      //   );
      // ReactDOM.render(element, document.getElementById('toolbar'));



  }}

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
      {nodeSelectedData?
        <div>
          <h3>{nodeSelectedData.label}</h3>
          <p>URL:
          <a href={nodeSelectedData.url} rel="noreferrer" target="_blank">{nodeSelectedData.url}</a>
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

      <Divider />
      Contracts
      <Divider />
      The Graph endpoints
    </div>
  );



  return(
    <div>
    {props.nodeSelected?
      <div>
      {ReactDOM.createPortal(
        <Button onClick={toggleDrawer('top', true)} style={{color:'white', fontWeight:'bold',marginLeft: "auto" }}>{props.nodeSelected}</Button>,
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
