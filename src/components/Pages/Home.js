import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

export default function Landing(props) {
  return (
    <div>
      <div>
        <h1>Planetharium</h1>
      </div>
      <h3>What is Planetarium?</h3>
      <br />
      <p>Planetharium is a new way to experience the Web3!</p>
      <p>You'll have access to all blockchains history</p>
      <p>
        You can explore, research and interact with dApps, Networks and more
        from the universe within watching the live ecosystem grow
      </p>
      <p>in a deep dive into digital space</p>
      <p> Be a part of it!</p>
      Enter the dApp:
      <br />
      <Link to={"/Map"}>
        <button
          style={{
            backgroundColor: "grey",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Planethary
        </button>
      </Link>
      <button disabled style={{ background: "grey" }}>
        VR version
      </button>
      <br />
      <br />
      <div>
        Or enter a theGraph endpoint to analyze!
        <br />
        <SearchIcon />
        <input id="search" placeholder="TheGraph endpoint" />
        <Link to="/TheGraphData">
          <button
            onClick={() =>
              props.selectGraphEndpoint(document.getElementById("search").value)
            }
          >
            Go!
          </button>
          <br />
          <br />
        </Link>
        <Link to="/Add">
          <button>Add a project</button>
        </Link>
      </div>
      <h3>How do we curate and manage the data</h3>
      <p>We will store our DB in a descentralized way like IPFS or Pinata</p>
      <p>Data added and modified will be managed with a DAO</p>
      <p>Users that contribute could earn for the service</p>
      <p>Protocols, users and dApps could stake to pay for the service</p>
      <p>You can request for the enter or modification of the data</p>
      <h3>How is the information retrieved</h3>
      <p>Using TheGraph we can analyze the whole history of blockchain txs</p>
      <p>Data could be graphed, compared(?) exported or whatever!</p>
      <p>You can request to create subgraphs for specific contracts</p>
      <p>You can create and promote yours!</p>
      <h3>As users</h3>
      <ul>
        <li>Explore the web3 multiverse</li>
        <li>Research and find information</li>
        <li>See, graph and export data of tx's with theGraph</li>
        <li>Interact with smart contracts and dApps</li>
        <li>See live tx's (Coming soon..?)</li>
        <li>
          Have an inmersion experience in web3 with VR (Coming veery soon!)
        </li>
      </ul>
      <h3>As owners</h3>
      <ul>
        <li>Curate data and earn</li>
        <li>Create theGraph endpoint to add data sources</li>
        <li>Explore the web3 and add requests of inputs</li>
        <li>Find errors and bugs</li>
        <li>Educate about web3 and help people enter (the good way..)</li>
        <li>Decide over the purpose and whereabouts of Planetharium!</li>
      </ul>
      <h3>As developers</h3>
      <ul>
        <li>Insert planetharium on your web!</li>
        <li>
          Explore and create new ways to interact with web3 with our (open
          repo?) system
        </li>
        <li>Retrieve our curated dataset for your projects!</li>
        <li>Generate content with our tools (make your videos amazing!)</li>
      </ul>
      <h1>Thanks to!</h1>
      <p>TheGraph</p>
      <p>Coingecko</p>
      <p>ThreeJs</p>
      <p>Lots and lots of sponsors</p>
      <p>EthGlobal (this dApp was made for the scaling Hackaton!)</p>
      <h2>Gitcoin and donate!</h2>
    </div>
  );
}
