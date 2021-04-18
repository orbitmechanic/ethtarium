import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import BlurCircularIcon from '@material-ui/icons/BlurCircular';

import { Button, FormLabel, FormControl, Checkbox, FormGroup, FormControlLabel, } from '@material-ui/core';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor:'#282c34',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor:'#282c34',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));


export default function PermanentDrawerLeft(props) {

  const classes = useStyles();

  const [filter, setFilter] = useState([0,1,2,3]);
  const [networkFilterOpen,setNetworkFilterOpen] = useState(false);
  const [networkFilter, setNetworkFilter] = useState(props.networkFilter);

  // useEffect(()=>{
  //   setNetworkFilter(networksNames)
  // }, networksNames);

  const options = [
  // { label: 'Networks', value: 0 , },
  { label: 'Bridges', value: 1 , },
  { label: 'Swap', value: 2,},
  { label: 'Lend&Borrow', value: 3,},
  { label: 'Manage', value: 4, },
  { label: 'Oracle', value: 5, },
  { label: 'DAO', value: 6, },
  { label: 'Tokens', value: 7,  },
  ];

  let nodeSelectedData;
  if(props.nodeSelected){
    nodeSelectedData = props.nodes.find(x=> x.id === props.nodeSelected)
  }
  const handleChange = (value) => {
    let newFilter = [...filter];
    if(filter.includes(value)){
      let index = filter.indexOf(value);
      newFilter.splice(index, 1)
    }else{
      newFilter.push(value)
    }
    // console.log('filterIn: ',newFilter)
     setFilter(newFilter);
     props.onFilters(newFilter)
   };

   function isChecked(value){
     return filter.includes(value);
   }

   function isNetworkChecked(name){
     return networkFilter.includes(name);
   }
   const handleNetworkChange = (value) => {
     let newFilter = [...networkFilter];
     if(networkFilter.includes(value)){
       let index = networkFilter.indexOf(value);
       newFilter.splice(index, 1)
     }else{
       newFilter.push(value)
     }
     // console.log('filterIn: ',filter)
      setNetworkFilter(newFilter);
      props.onNetworkFilter(newFilter);
    };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h3" noWrap>
            Etharium
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
{/*        <div className={classes.toolbar} />*/}
        <Divider />
        <Button onClick={()=>setNetworkFilterOpen(!networkFilterOpen)}>Networks</Button>
        {networkFilterOpen?
          <div>
            <List>
            {props.networks.map((network)=>(
              <ListItem>
                <FormControlLabel
                  value={network}
                  id = {network}
                  control={<Checkbox color="primary" checked={isNetworkChecked(network)} onChange={()=>{handleNetworkChange(network)}} />}
                  label={network}
                  labelPlacement="end"
                  />
              </ListItem>
            ))}
            </List>
          </div>
        :null}
        <List>
          {options.map((opt) => (
            <ListItem>
{/*              <ListItemIcon>{opt.icon}</ListItemIcon>  Would we like icons for this? */}
              <FormControlLabel
                        value={opt.value}
                        id = {opt.value}
                        control={<Checkbox color="secondary" checked={isChecked(opt.value)} onChange={()=>{handleChange(opt.value)}} />}
                        label={opt.label}
                        labelPlacement="end"
                      />
                      {/**/}
            </ListItem>
          ))}
        </List>
        <Divider />
        <h2>
        {props.nodeSelected? props.nodeSelected :'Select a node' }
        </h2>
        {props.geckoData?
          <div>
            <p>URL:
            <a href={nodeSelectedData.url} rel="noref noopener" target="_blank">{nodeSelectedData.url}</a>
            </p>
            <p>Current price:
              U$s {props.geckoData[0][0]?props.geckoData[0][0].current_price:'no data'}
            </p>
            <p>Market Cap:
              U$s {props.geckoData[0][0]?props.geckoData[0][0].market_cap:'no data'}
            </p>
            <p>24hs price change:
            {props.geckoData[0][0]?props.geckoData[0][0].price_change_percentage_24h:'no data'} %
            </p>
          </div>
          :null}
      </Drawer>
      <main className={classes.content}>

      </main>
    </div>
  );
}
