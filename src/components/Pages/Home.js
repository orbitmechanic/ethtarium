import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import styled, { keyframes } from "styled-components";
import styles from "../../styles/main.module.css";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import SettingsEthernetRoundedIcon from "@material-ui/icons/SettingsEthernetRounded";
import React from "react";
import { StylesProvider } from "@material-ui/styles";
import { responsiveFontSizes } from "@material-ui/core";
import moons from "../../images/backgrounds/some-moons.jpg";
import verse from "../../images/backgrounds/verse.png";
import verse2 from "../../images/backgrounds/verse2.png";
import verse3 from "../../images/backgrounds/verse3.png";
import verse4 from "../../images/backgrounds/verse4.png";

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
          <h1>A new way of interacting with Web 3.0</h1>
          <HeroText>
            <p>
              Explore, research, and interact with the decentralised universe as
              it grows
            </p>
          </HeroText>
        </HeroLeft>
        <CardT>
          <p>Be part of it!!</p>
          <CardButton>Explore</CardButton>
        </CardT>
      </Hero>
      <Section>
        <SectionHeader>
          <p>How is the data managed?</p>
          <StorageRoundedIcon style={{ fontSize: "4rem" }} />
        </SectionHeader>

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
        <SectionHeader>
          <p>How is the information retrieved</p>
          <SettingsEthernetRoundedIcon style={{ fontSize: "4rem" }} />
        </SectionHeader>

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
          <GridHeader>
            <p>As users</p>
          </GridHeader>
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
          <GridHeader>
            <h3>As owners</h3>
          </GridHeader>
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
          <GridHeader>
            <h3>As developers</h3>
          </GridHeader>
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
      <div className={styles.herotest}>
        <p>be part of it</p>
      </div>
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
  max-width: 100vw;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  opacity: 99%;
`;

const CentreWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-bottom: 50px;
  font-weight: bolder;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Animation = styled.div`
  background: linear-gradient(var(--grad1), var(--grad2)), url(${verse});
  /* background-size: cover; */
  background-repeat: no-repeat;
  animation: ${rotate} 20s linear infinite;
`;

const HeroLeft = styled.div`
  font-size: 3.1rem;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  padding-top: 60px;
  text-shadow: 0px 0px 35px var(--textglow);
  /* border: solid 1px white; */
  border-radius: 3px;

  background: linear-gradient(var(--grad1), var(--grad2)), url(${verse});
  background-size: cover;
  background-repeat: no-repeat;

  /* background-position-x: -130px; */

  /* box-shadow: 1px 1px 50px var(--shadow);
  box-shadow: inset 1px 1px 10px 5px var(--shine); */
`;

const CardT = styled.div`
  font-size: 2rem;
  width: fit-content;
  height: fit-content;
  padding: 40px;
  border-radius: 2px;
  box-shadow: 1px 1px 50px var(--shadow);
  box-shadow: inset 1px 1px 10px 5px var(--shine);
  /* transition: transform 0.5s ease-in-out, text-shadow 0.5s ease-in-out; */
  max-width: 100vw;
  background-image: url(${moons});
  background-size: cover;
  background-repeat: no-repeat;
  will-change: transform;
  transition: transform 0.5s ease-in-out, text-shadow 0.5s ease-in-out;
  backdrop-filter: none;

  &:hover {
    transform: scale(1.01, 1.01);
    text-shadow: 0px 0px 20px var(--textglow);
    backdrop-filter: hue-rotate(120deg) blur(100px) invert(50%);
    transition: transform 0.5s ease-in-out, text-shadow 0.5s ease-in-out;
  }
`;

const HeroText = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  text-shadow: none;
  font-weight: lighter;
  line-height: 1.3;
`;

const CardButton = styled.div`
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
  align-self: center;
`;

const Section = styled.div`
  padding: 30px;
  max-width: 95vw;
  display: flex;
  flex-direction: column;
  flex-grow: 1 1 auto;
  box-shadow: 1px 1px 50px var(--shadow);
  box-shadow: inset 1px 1px 10px 5px var(--shine);
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 2rem;
  align-items: center;
  line-height: 1.3;
`;

const SectionHeader = styled.div`
  font-size: 3rem;
  display: flex;
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
  flex-direction: column;
  max-width: 100vw;
  padding: 40px;
  border-radius: 2px;
  box-shadow: 1px 1px 50px var(--shadow);
  box-shadow: inset 1px 1px 10px 5px var(--shine);
  justify-content: space-evenly;
  height: 150vh;
`;
const GridCard = styled.div`
  min-width: fit-content;
  width: 30%;
  padding: 20px;
  border-radius: 2px;
  box-shadow: 1px 1px 50px var(--shadow);
  box-shadow: inset 1px 1px 10px 5px var(--shine);
  font-size: 1.2;
  line-height: 1.2;
`;

const GridHeader = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  padding-bottom: 5px;
`;

const Thanks = styled.div``;

export default Home;
