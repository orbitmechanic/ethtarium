import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { Button, Checkbox, FormControlLabel, } from '@material-ui/core';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor:'#282c34',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  // // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.default,
  //   padding: theme.spacing(3),
  // },
}));


export default function PermanentDrawerLeft(props) {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState([0,1,2,3]);
  const [networkFilterOpen,setNetworkFilterOpen] = useState(false);
  const [networkFilter, setNetworkFilter] = useState(props.networkFilter);

  const handleDrawerOpen = () => {
    console.log('hey')

    setOpen(true);
  };

  const handleDrawerClose = () => {
    console.log('ho')
    setOpen(false);
  };

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
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar
          id='toolbar'
          >
          <IconButton
            id='filtersButton'
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
          <MenuIcon />
          </IconButton>
          <Typography>Etharium</Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
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
                        control={<Checkbox color="default" checked={isChecked(opt.value)} onChange={()=>{handleChange(opt.value)}} />}
                        label={opt.label}
                        labelPlacement="end"
                      />
                      {/**/}
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}>

      </main>
    </div>
  );
}
