import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import styles from "../../styles/main.module.css";
import React from "react";
import { StylesProvider } from "@material-ui/styles";

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
      <Hero className={styles.hero}>
        <HeroLeft>
          <h1>Experience a new way of interacting with Web 3.0</h1>
          <HeroText>
            <p>Access blockchain history</p>
            <br></br>
            <p>
              Explore, research and interact with dApps, Networks and more from
              the universe within watching the live ecosystem grow
            </p>
          </HeroText>
        </HeroLeft>
        <HeroRight className={styles.herosmall}>
          <p> Be a part of it!</p>
          <HeroText>
            <p>In a deep dive into digital space...</p>
          </HeroText>
          <CentreWrap>
            <HeroButton>Explore</HeroButton>
          </CentreWrap>
        </HeroRight>
      </Hero>
      <Section>
        <p>How is the data managed?</p>
        <SectionText>
          <p>
            We will store our data in a decentralized way like IPFS or Pinata
          </p>
          <p>Data added and modified will be managed with a DAO</p>
          <p>Users that contribute could earn for the service</p>
          <p>Protocols, users and dApps could stake to pay for the service</p>
          <p>You can request for the enter or modification of the data</p>
        </SectionText>
      </Section>
      <Section>
        <p>How is the information retrieved</p>
        <SectionText>
          <p>
            Using TheGraph we can analyze the whole history of blockchain txs
          </p>
          <p>Data could be graphed, compared(?) exported or whatever!</p>
          <p>You can request to create subgraphs for specific contracts</p>
          <p>You can create and promote yours!</p>
        </SectionText>
      </Section>
      <GridWrapper>
        <GridCard>
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
        </GridCard>
        <GridCard>
          <h3>As owners</h3>
          <ul>
            <li>Curate data and earn</li>
            <li>Create theGraph endpoint to add data sources</li>
            <li>Explore the web3 and add requests of inputs</li>
            <li>Find errors and bugs</li>
            <li>Educate about web3 and help people enter (the good way..)</li>
            <li>Decide over the purpose and whereabouts of Planetharium!</li>
          </ul>
        </GridCard>
        <GridCard>
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
        </GridCard>
      </GridWrapper>
      <Section>
        <Thanks>
          <h1>Thanks to!</h1>
          <SectionText>
            <p>TheGraph</p>
            <p>Coingecko</p>
            <p>ThreeJs</p>
            <p>Lots and lots of sponsors</p>
            <p>EthGlobal (this dApp was made for the scaling Hackaton!)</p>
            <h2>Gitcoin and donate!</h2>
          </SectionText>
        </Thanks>
      </Section>
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

const CentreWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Hero = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  min-height: 80vh;
  margin-top: 30px;
  margin-bottom: 50px;
  margin-left: 30px;
  margin-right: 30px;
  font-weight: bolder;
`;

const HeroLeft = styled.div`
  font-size: 2.5rem;
  width: 50%;
  padding: 40px;
  /* border: solid 1px white; */
  border-radius: 3px;
  /* box-shadow: 1px 1px 50px var(--shadow);
  box-shadow: inset 1px 1px 10px 5px var(--shine); */
`;

const HeroRight = styled.div`
  font-size: 2rem;
  width: fit-content;
  height: fit-content;
  padding: 40px;
  border-radius: 2px;
  box-shadow: 1px 1px 50px var(--shadow);
  box-shadow: inset 1px 1px 10px 5px var(--shine);
  transition: transform 0.5s ease-in-out, text-shadow 0.5s ease-in-out;

  :hover {
    transform: scale(1.01, 1.01);
    text-shadow: 0px 0px 20px var(--textglow);
    transition: transform 0.5s ease-in-out, text-shadow 0.5s ease-in-out;
  }
`;

const HeroText = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  text-shadow: 0px 0px 35px white;
  font-weight: lighter;
`;

const HeroButton = styled.div`
  display: flex;
  margin-top: 20px;
  font-size: 1rem;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 5px white;
  background-color: var(--pri-color);
  cursor: pointer;
  :hover {
    background-color: var(--shine);
  }
  max-width: fit-content;
`;

const Section = styled.div`
  padding: 20px;
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-grow: 1 1 auto;
  box-shadow: 1px 1px 50px var(--shadow);
  box-shadow: inset 1px 1px 10px 5px var(--shine);
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.8rem;
  align-items: center;
`;

const SectionText = styled.div`
  padding: 20px 0px 20px 0;
  font-size: 1.2rem;
`;

const BigCard = styled.div`
  width: 60%;
`;

const GridWrapper = styled.div`
  display: flex;
  width: 80%;
  padding: 40px;
  border-radius: 2px;
  box-shadow: 1px 1px 50px var(--shadow);
  box-shadow: inset 1px 1px 10px 5px var(--shine);
  justify-content: space-evenly;
`;
const GridCard = styled.div`
  width: 30%;
  padding: 20px;
  border-radius: 2px;
  box-shadow: 1px 1px 50px var(--shadow);
  box-shadow: inset 1px 1px 10px 5px var(--shine);
`;
const Thanks = styled.div``;

export default Home;
