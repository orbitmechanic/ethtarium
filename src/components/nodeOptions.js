import React,{useState} from 'react';
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import LinkIcon from '@material-ui/icons/Link';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
import {fetchGeckoData, getExplorer} from '../helpers/mapHelpers';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor:'#0c002e',
    color:'white',
  },
  title: {
    backgroundColor:'#e000ca',
    fontSize: 14,
    textDecoration: 'underline overline',
    color:'white',
    fontWeight:'bold',
  },
  pos: {
    marginBottom: 12,
  },
});


export default function NodeOptions(props) {
  const [state, setState] = React.useState({
    top: false,
  });
  const [nodeSelected, setNodeSelected] = useState(null);
  const [geckoData, setGeckoData] = useState(null);
  const classes = useStyles();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  if(props.nodeSelected){
    if(nodeSelected !== props.nodeSelected){
      setNodeSelected(props.nodeSelected)
      fetchGeckoData('coin',props.nodeSelected).then((gecko)=>{setGeckoData(gecko);})//
  }}

  function getImage() {
    let image;
    if (props.nodeSelectedData && props.nodeSelectedData.img) {
      image = require(`../images/mini_${props.nodeSelectedData.img}`);
    } else {
      image = require("../images/mini_default.png");
    }
    return image.default;
  }

  function getAddress() {
    let explorer = getExplorer(props.nodeSelected);
    let addressContract =
      explorer + `address/${props.nodeSelectedData.contract}`;
    // console.log(addressContract)
    return addressContract;
  }

  const list = (anchor) => (
    <div
      className="App-header"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
      {props.nodeSelectedData?
        <div>
          <span>
          <img src={getImage(props.nodeSelectedData)} style={{marginLeft: "auto"}} alt='' width="50" height="50"></img>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.nodeSelectedData.label}
          </Typography>

          </span>
          <p>URL:
          <a href={props.nodeSelectedData.url} style={{color:'white'}} rel="noreferrer" target="_blank">{props.nodeSelectedData.url}</a>
          <LinkIcon />
          </p>
        </div>
        :null}
        {geckoData?
          <Card className={classes.root} variant="outlined">
            <CardContent>
            <img src='https://static.coingecko.com/s/coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd.png' style={{height:'40px', width:'100px'}}></img>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              Coingecko data
              </Typography>
              <Typography variant="body2" component="p">
                Current price:
                <br />
              U$s {geckoData?geckoData.current_price:'no data'}
              </Typography>
              <Divider />
              <Typography variant="body2" component="p">
                Market Cap:
                <br />
                U$s {geckoData?geckoData.market_cap:'no data'}
              </Typography>
                <Divider />
              <Typography variant="body2" component="p">
                24hs price change:
                <br />
              {geckoData?geckoData.price_change_percentage_24h:'no data'} %
              </Typography>

            </CardContent>
{/*
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
*/}
          </Card>
        :null}
      </div>

      {props.nodeSelectedData && props.nodeSelectedData.group !== 0 ? (
        <div>
          Contracts <br />
          <a
            href={getAddress()}
            style={{ color: "white" }}
            rel="noreferrer"
            target="_blank"
          >
            {props.nodeSelectedData.contract}
          </a>
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
      ) : null}

      <Divider light={true}/>


      <Card className={classes.root} variant="outlined">
        <CardContent>
            <img src={'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgMjIgMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjQgKDY3Mzc4KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5GaWxsIDE5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJNZW51LS8tbm90LXNpZ25lZC1pbiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg4LjAwMDAwMCwgLTUyLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNOTcuMzMzMzAxOSw2Ny41NTU1MDMyIEM5My44OTY5NDk4LDY3LjU1NTUwMzIgOTEuMTExMTAwNiw2NC43Njk4NDI1IDkxLjExMTEwMDYsNjEuMzMzMzAxOSBDOTEuMTExMTAwNiw1Ny44OTY3NjEzIDkzLjg5Njk0OTgsNTUuMTExMTAwNiA5Ny4zMzMzMDE5LDU1LjExMTEwMDYgQzEwMC43Njk4NDMsNTUuMTExMTAwNiAxMDMuNTU1NTAzLDU3Ljg5Njc2MTMgMTAzLjU1NTUwMyw2MS4zMzMzMDE5IEMxMDMuNTU1NTAzLDY0Ljc2OTg0MjUgMTAwLjc2OTg0Myw2Ny41NTU1MDMyIDk3LjMzMzMwMTksNjcuNTU1NTAzMiBNOTcuMzMzMzAxOSw1MiBDMTAyLjQ4NzkyNCw1MiAxMDYuNjY2NjA0LDU2LjE3ODY3OTUgMTA2LjY2NjYwNCw2MS4zMzMzMDE5IEMxMDYuNjY2NjA0LDY2LjQ4NzkyNDMgMTAyLjQ4NzkyNCw3MC42NjY2MDM4IDk3LjMzMzMwMTksNzAuNjY2NjAzOCBDOTIuMTc4Njc5NSw3MC42NjY2MDM4IDg4LDY2LjQ4NzkyNDMgODgsNjEuMzMzMzAxOSBDODgsNTYuMTc4Njc5NSA5Mi4xNzg2Nzk1LDUyIDk3LjMzMzMwMTksNTIgWiBNMTA2LjIxMTA2Myw3MS4xMjIxNDQ0IEMxMDYuODE4NTc2LDcxLjcyOTY1NzUgMTA2LjgxODU3Niw3Mi43MTQ0NjIyIDEwNi4yMTEwNjMsNzMuMzIxOTc1MyBMOTkuOTg4NjczNCw3OS41NDQzNjUyIEM5OS4zODExNjAzLDgwLjE1MTg3ODMgOTguMzk2MzU1Niw4MC4xNTE4NzgzIDk3Ljc4ODg0MjUsNzkuNTQ0MzY1MiBDOTcuMTgxMzI5NCw3OC45MzY4NTIxIDk3LjE4MTMyOTQsNzcuOTUyMDQ3MyA5Ny43ODg4NDI1LDc3LjM0NDUzNDIgTDEwNC4wMTEyMzIsNzEuMTIyMTQ0NCBDMTA0LjYxODc0NSw3MC41MTQ2MzEzIDEwNS42MDM1NSw3MC41MTQ2MzEzIDEwNi4yMTEwNjMsNzEuMTIyMTQ0NCBaIE0xMDkuNzc3NzA0LDUzLjU1NTU1MDMgQzEwOS43Nzc3MDQsNTQuNDE0Nzc5NyAxMDkuMDgxMzg0LDU1LjExMTEwMDYgMTA4LjIyMjM0Myw1NS4xMTExMDA2IEMxMDcuMzYzMTEzLDU1LjExMTEwMDYgMTA2LjY2Njc5Miw1NC40MTQ3Nzk3IDEwNi42NjY3OTIsNTMuNTU1NTUwMyBDMTA2LjY2Njc5Miw1Mi42OTYzMjA5IDEwNy4zNjMxMTMsNTIgMTA4LjIyMjM0Myw1MiBDMTA5LjA4MTM4NCw1MiAxMDkuNzc3NzA0LDUyLjY5NjMyMDkgMTA5Ljc3NzcwNCw1My41NTU1NTAzIFoiIGlkPSJGaWxsLTE5Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4= '} style={{height:'40px', width:'100px'}}></img>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            The Graph endpoints
            </Typography>
          <div>
          {props.nodeSelectedData && props.nodeSelectedData.graphUrl ? (
            <div>
            <Link to="/TheGraphData">
            <Button
            onClick={() =>
              props.selectGraphEndpoint(props.nodeSelectedData.graphUrl)
            }
            style={{ color: "white" }}
            >
            {props.nodeSelectedData.graphUrl}
            </Button>
            <LinkIcon style={{ color: "white" }} />
            </Link>
            </div>
          ) : <p>There are no subgraphs yet..</p>}
          </div>

        </CardContent>
        <CardActions style={{justifyContent:'center'}}>
          <Button onClick={()=>{console.log('make an add widget')}} style={{color:'white'}}>Request add a subgraph</Button>
        </CardActions>
      </Card>

      <Divider />
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Contract ABI's / Widgets
          </Typography>
          <br/>ABIs interface not available (yet)<br/>

        </CardContent>
        <CardActions style={{justifyContent:'center'}}>
          <Button onClick={()=>{console.log('make an interaction widget')}} style={{color:'white'}}>Request add interaction</Button>
        </CardActions>
      </Card>

    </div>
  );

  return (
    <div>
      {props.nodeSelected ? (
        <div>
          {ReactDOM.createPortal(
            <div style={{ marginLeft: "auto" }}>
              <Button
                onClick={toggleDrawer("top", true)}
                style={{ color: "white", fontWeight: "bold" }}
              >
                {props.nodeSelected}
              </Button>
            </div>,
            document.getElementById("toolbar")
          )}
        </div>
      ) : null}
      <React.Fragment key={"top"}>
        <Drawer
          anchor={"top"}
          variant = 'persistent'
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          {list("top")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
