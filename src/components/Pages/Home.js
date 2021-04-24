import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

import React from "react";

const Home = (props) => {
  return (
    <Wrapper>
      {/* 
       
        Section left
        Image of map
        Section hover state
        Launch button
        + Hover

        Section right
        Section hover state
          Text section

          Input field
          Button
          Hover states
        --------------
        Section with text
        Bonus - animation
        --------------
        Section with text
        Bonus - animation
        --------------
        Triple grid

        Three x cards

        Bonus animation
        -------------
        Thanks section
        Donate button and/or Link
        Hover state button

        Bonus animation

        ---------------
        Footer
        Copyright?
        
        */}
      <Hero>
        <HeroLeft>
          <h1>Experience a new way of interacting with Web 3.0</h1>
          <HeroText>
            <p>You'll have access to all blockchains history</p>
            <br></br>
            <p>
              You can explore, research and interact with dApps, Networks and
              more from the universe within watching the live ecosystem grow
            </p>
            <br></br>
            <p>in a deep dive into digital space</p>
            <p> Be a part of it!</p>
          </HeroText>
          <HeroButton>Explore</HeroButton>
        </HeroLeft>
        <HeroRight></HeroRight>
      </Hero>
      <Section>
        <h3>How do we curate and manage the data</h3>
        <p>We will store our DB in a descentralized way like IPFS or Pinata</p>
        <p>Data added and modified will be managed with a DAO</p>
        <p>Users that contribute could earn for the service</p>
        <p>Protocols, users and dApps could stake to pay for the service</p>
        <p>You can request for the enter or modification of the data</p>
      </Section>
      <Section>
        <h3>How is the information retrieved</h3>
        <p>Using TheGraph we can analyze the whole history of blockchain txs</p>
        <p>Data could be graphed, compared(?) exported or whatever!</p>
        <p>You can request to create subgraphs for specific contracts</p>
        <p>You can create and promote yours!</p>
      </Section>
      <div>
        <h1>Planetharium</h1>
      </div>
      <h3>What is Planetarium?</h3>
      <br />
      <p>Planetharium is a new way to experience the Web3!</p>
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
      <button>VR version - coming soon</button>
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
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Hero = styled.div`
  width: 90%;
  height: 85vh;
  margin-bottom: 50px;
  margin-left: 30px;
  margin-right: 30px;
`;

const HeroLeft = styled.div`
  font-size: 5rem;
  width: 50%;
  border: solid 1px white;
`;

const HeroRight = styled.div`
  font-size: 2rem;
  width: 50%;
`;

const HeroText = styled.div`
  margin-top: 20px;
  font-size: 2rem;
  text-shadow: 0px 0px 35px white;
`;

const HeroButton = styled.div`
  font-size: 1rem;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 5px white;
  background-color: gray;
  cursor: pointer;
  :hover {
    background-color: green;
  }
  max-width: fit-content;
`;

const Section = styled.div`
  padding: 20px;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  flex-grow: 1 1 auto;
`;

const BigCard = styled.div`
  width: 60%;
`;

const GridWrapper = styled.div``;
const GridCard = styled.div``;
const Thanks = styled.div``;

export default Home;
