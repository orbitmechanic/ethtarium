import React, {useState} from 'react';
import clsx from 'clsx';
import { fade,makeStyles, useTheme  } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SearchIcon from '@material-ui/icons/Search';
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

  search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
  searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
    width: '20ch',
    },
  },
}));


export default function PermanentDrawerLeft(props) {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState([0,1,]);
  const [networkFilterOpen,setNetworkFilterOpen] = useState(false);
  const [networkFilter, setNetworkFilter] = useState(props.networkFilter);
  const [searchResults, setSearchResults] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
    document.getElementById('search').value='';
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setSearchResults(null);
  };

  const handleSearch = (search) => {
    // console.log(search.target.value)
    if(search.target.value.length>=3){
      let nodeIds = props.nodes.map(x=>x.id)
      let results = nodeIds.filter((node) => node.startsWith(search.target.value))
      setSearchResults(results);
      if(results.length === 1){
        props.selectNode(results);
      }
    }else{
      setSearchResults(null)
    }
  }

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
          <Typography>PLANETHARIUM</Typography>
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
        <div className={classes.search}>
          <div className={classes.searchIcon}>
        <SearchIcon />
          </div>
            <InputBase
              id='search'
              placeholder="Search…"
              onChange = {handleSearch}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
        />
        </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
      </div>
{/*
            {searchResults?
            <div>
              <List>
                {searchResults.map((result)=>{
                  <ListItem>
                    <Button >test{result}</Button>
                    <p>{result}</p>
                  </ListItem>
                  })}
              </List>
            </div>
          :null}
*/}
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
        <Divider />
        <List>
          {options.map((opt) => (
            <ListItem>
              <FormControlLabel
                        value={opt.value}
                        id = {opt.value}
                        control={<Checkbox color="default" checked={isChecked(opt.value)} onChange={()=>{handleChange(opt.value)}} />}
                        label={opt.label}
                        labelPlacement="end"
                      />
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
