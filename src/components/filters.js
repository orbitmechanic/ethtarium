import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
// import Container from '@material-ui/core/Container';
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import InputBase from "@material-ui/core/InputBase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SearchIcon from "@material-ui/icons/Search";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Button, Checkbox, FormControlLabel } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import LinearProgress from '@material-ui/core/LinearProgress';
import { networks } from "../helpers/mapHelpers";
import { options } from "../helpers/localDB";
const optionsWNetworks = [...options];
optionsWNetworks.shift(); // deletes networks from options

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appMenuIcon: {
    opacity: 1,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 1,
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

export default function Filters(props) {
  const classes = useStyles();
  const theme = useTheme();
  // global drawer management
  const [open, setOpen] = useState(false);
  const [groupFilter, setGroupFilter] = useState(null);
  const [chainsOpen, setChainsOpen] = useState(false);
  // filters setup
  const [filter, setFilter] = useState(["chain"]);
  const [networkFilter, setNetworkFilter] = useState(props.blockchainFilter);
  // const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  let savedFilter = localStorage.getItem("filter");

  useEffect(() => {
    let newFilter;
    let arrayFilter = [];
    if (savedFilter) {
      let savedFilterItems = JSON.parse(savedFilter);
      arrayFilter = savedFilterItems.split('"'); // or '\"'
      newFilter = arrayFilter.filter((x, i) => {
        return i % 2;
      });
      handleInitialFilters(newFilter);
    }
  }, []);

  function handleInitialFilters(ids) {
    let newFilter = [...filter];
    ids.map((x) => newFilter.push(x));
    setFilter(newFilter);
    //remove repeats
    let uniq = [...new Set(newFilter)];
    props.onFilters(uniq);
  }

  const handleChange = (value) => {
    // setLoading(true)
    let newFilter = [...filter];

    if (filter.includes(value)) {
      let index = filter.indexOf(value);
      newFilter.splice(index, 1);
    } else {
      newFilter.push(value);
    }

    setFilter(newFilter);
    // sendNewFilter(newFilter);
    props.onFilters(newFilter);
  };

  // function sendNewFilter(){
  //   setTimeout(function(){ props.onFilters(filter); }, 1000);//it works, but makes 2 setState
  //   // setLoading(false)
  //
  // }

  const handleDrawerOpen = () => {
    setOpen(true);
    document.getElementById("search").value = "";
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setSearchResults(null);
  };

  const handleSearch = (search) => {
    if (search.target.value.length >= 3) {
      let nodeIds = props.nodes.map((x) => x.id);
      let results = nodeIds.filter((node) =>
        node.startsWith(search.target.value)
      );
      setSearchResults(results);
      if (results.length === 1) {
        props.selectNode(results[0]);
      }
    } else {
      setSearchResults(null);
    }
  };

  // function delayChangeState(){
  //   // delay the setState to catch multiple inputs, otherwise re-renders too much
  // }

  function isChecked(value, group) {
    return filter.includes(value) || filter.includes(group + "_others");
  }

  function isNetworkChecked(name) {
    return networkFilter.includes(name);
  }

  const handleFilterChange = (value) => {
    let newFilter = [...networkFilter];
    if (networkFilter.includes(value)) {
      let index = networkFilter.indexOf(value);
      newFilter.splice(index, 1);
    } else {
      newFilter.push(value);
    }
    setNetworkFilter(newFilter);
    props.onBlockchainFilter(newFilter);
  };

  function handleFilter(id) {
    if (groupFilter === id) {
      setGroupFilter(null);
    } else {
      setGroupFilter(id);
    }
  }

  const networkNode = networks.find((x) => x.chainId === props.network);

  function filterNetworkConnected() {
    setNetworkFilter([networkNode.id]);
    props.onBlockchainFilter([props.network]);
  }

  function cleanName(name, group) {
    let cleanname;
    if (name.startsWith(group)) {
      cleanname = name.replace(group + "_", "");
    } else {
      cleanname = name;
    }
    return cleanname;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="flex"
        style={{ backgroundColor: "#e000ca" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar id="toolbar" display="flex">
          {/* // it is anchored to the left. dissapears when window get smaller. */}
          <IconButton
            id="filtersButton"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon style={{ marginLeft: "5px" }} />
          </IconButton>
          <Link to={"/"}>
            <div>Home</div>
          </Link>
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
              id="search"
              placeholder="Search???"
              onChange={handleSearch}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        {searchResults ? (
          <div>
            <List>
              {searchResults.forEach((result) => {
                <ListItem id={result}>
                  <Button id={result}>{result}</Button>
                </ListItem>;
              })}
            </List>
          </div>
        ) : null}
        <Divider light />
        {/*loading?
          <LinearProgress />
        :null*/}
        <br />
        <div>
          {props.account ? (
            <div>
              Connected as: {props.account} in
              <Button onClick={filterNetworkConnected}>
                {networkNode && networkNode.label
                  ? networkNode.label
                  : "Unknown "}
              </Button>
              chain
              <br />
              <Button onClick={props.logout}>Disconnect</Button>
            </div>
          ) : (
            <Button onClick={props.load}>Connect!</Button>
          )}
          {savedFilter ? (
            <div>
              <StarIcon />
              <Button
                onClick={() => {
                  let cleaning = new Promise(() => {
                    localStorage.clear();
                  });
                  cleaning.then(
                    localStorage.setObj("filter", JSON.stringify(filter))
                  );
                  handleDrawerClose();
                  //
                }}
              >
                {" "}
                Update
              </Button>
            </div>
          ) : (
            <div>
              <StarBorderIcon />
              <Button
                onClick={() => {
                  localStorage.setObj("filter", JSON.stringify(filter));
                  handleDrawerClose();
                }}
              >
                {" "}
                Save
              </Button>
            </div>
          )}
        </div>
        <br />

        <List>
          {options.map((opt) => (
            <div>
              <Divider light />
              <ListItem button onClick={() => handleFilter(opt.value)}>
                <ListItemText primary={opt.label} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              <Collapse
                in={groupFilter === opt.value}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {opt.subgroups.map((subg) => (
                    <ListItem>
                      {subg !== "chain" ? (
                        <FormControlLabel
                          value={subg}
                          id={subg}
                          control={
                            <Checkbox
                              color="default"
                              checked={isChecked(subg, opt.value)}
                              onChange={() => {
                                handleChange(subg, opt.value);
                              }}
                            />
                          }
                          label={cleanName(subg, opt.label)}
                          labelPlacement="end"
                        />
                      ) : (
                        <div>
                          <ListItem
                            button
                            onClick={() => setChainsOpen(!chainsOpen)}
                          >
                            <ListItemText primary="Blockchains" />
                            {chainsOpen ? <ExpandLess /> : <ExpandMore />}
                          </ListItem>
                          <Collapse
                            in={chainsOpen}
                            timeout="auto"
                            unmountOnExit
                          >
                            <List>
                              {props.networks.map((network) => (
                                <ListItem id={network}>
                                  <FormControlLabel
                                    value={network}
                                    id={network}
                                    control={
                                      <Checkbox
                                        checked={isNetworkChecked(network)}
                                        onChange={() => {
                                          handleFilterChange(network);
                                        }}
                                      />
                                    }
                                    label={network}
                                    labelPlacement="end"
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Collapse>
                        </div>
                      )}
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
    </div>
  );
}
