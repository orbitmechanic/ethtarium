import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

export default function Landing(props) {

  return (
    <div>
    <div className='App-header'>
      <h1 className='title'>Planetharium</h1>
    </div>

    <Grid className='App-header'  container spacing={3}>

      <Grid item xs={12}>
        <h3>What is Planetarium?</h3>
      </Grid><br/>
      <Grid item xs={6}>
        <p>Planetharium is a new way to experience the Web3!</p>
        <p>You'll have access to all blockchains history</p>
        <p>You can explore, research and interact with dApps, Networks and more from the universe within watching the live ecosystem grow</p>
        <p>in a deep dive into digital space</p>
        <p> Be a part of it!</p>
      </Grid>
      <Grid item xs={12} >
        Enter the dApp:<br />
        <Link to={'/Map'}>
          <Button  style={{backgroundColor:'grey',color:'white',fontWeight:'bold'}}>Planethary</Button>
        </Link>
        <Button disabled style={{background:'grey'}}>VR version</Button>
        <br />
        <br />
        <div>
        Or enter a theGraph endpoint to analyze!<br />
        <SearchIcon />
            <InputBase
              style={{backgroundColor:'grey',color:'white'}}
              id='search'
              placeholder="TheGraph endpoint"
              />
        <Link to='/TheGraphData'>
          <Button onClick={()=>props.selectGraphEndpoint(document.getElementById('search').value)} style={{backgroundColor:'grey',color:'white',fontWeight:'bold'}}>Go!</Button><br /><br />
        </Link>
        <Link to='/Add'>
          <Button style={{backgroundColor:'grey',color:'white',fontWeight:'bold'}}>Add a project</Button>
        </Link>
        </div>

      </Grid>
      <Grid item xs={6}>
      <h3>How do we curate and manage the data</h3>
      <p>We will store our DB in a descentralized way like IPFS or Pinata</p>
      <p>Data added and modified will be managed with a DAO</p>
      <p>Users that contribute could earn for the service</p>
      <p>Protocols, users and dApps could stake to pay for the service</p>
      <p>You can request for the enter or modification of the data</p>
      </Grid>
      <Grid item xs={6}>
      <h3>How is the information retrieved</h3>
      <p>Using TheGraph we can analyze the whole history of blockchain txs</p>
      <p>Data could be graphed, compared(?) exported or whatever!</p>
      <p>You can request to create subgraphs for specific contracts</p>
      <p>You can create and promote yours!</p>

      </Grid>

      <Grid item xs={4}><h3>As users</h3>
      <ul>
        <li>Explore the web3 multiverse</li>
        <li>Research and find information</li>
        <li>See, graph and export data of tx's with theGraph</li>
        <li>Interact with smart contracts and dApps</li>
        <li>See live tx's (Coming soon..?)</li>
        <li>Have an inmersion experience in web3 with VR (Coming veery soon!)</li>

      </ul>
      </Grid>
      <Grid item xs={4}><h3>As owners</h3>
      <ul>
        <li>Curate data and earn</li>
        <li>Create theGraph endpoint to add data sources</li>
        <li>Explore the web3 and add requests of inputs</li>
        <li>Find errors and bugs</li>
        <li>Educate about web3 and help people enter (the good way..)</li>
        <li>Decide over the purpose and whereabouts of Planetharium!</li>
      </ul>

      </Grid>
      <Grid item xs={4}><h3>As developers</h3>
      <ul>
        <li>Insert planetharium on your web!</li>
        <li>Explore and create new ways to interact with web3 with our (open repo?) system</li>
        <li>Retrieve our curated dataset for your projects!</li>
        <li>Generate content with our tools (make your videos amazing!)</li>

      </ul>

      </Grid>
      <Grid item xs={12}><h1>Thanks to!</h1></Grid>
      <Grid item xs={8}>
        <p>TheGraph</p>
        <p>Coingecko</p>
        <p>ThreeJs</p>
        <p>Lots and lots of sponsors</p>
        <p>EthGlobal (this dApp was made for the scaling Hackaton!)</p>
        <h2>Gitcoin and donate!</h2>
      </Grid>

    </Grid>
    </div>
  )
}
