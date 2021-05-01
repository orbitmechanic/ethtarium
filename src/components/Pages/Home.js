import { Link } from "react-router-dom";
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
import DiskIcon from "../DiskIcon";
const Home = (props) => {
  return (
    <Wrapper>
      <div className={styles.hero}>
        <h1>A new way to experience Web 3.0</h1>
        <p>
          Explore, research, and interact with the decentralised universe as it
          grows
        </p>
        <p>Be part of it!!</p>

        <CardButton>
          <Link to={"/Map"}>Enter the dApp</Link>
        </CardButton>
      </div>

      <div className={styles.homecard1}>
        <DiskIcon />
        <h2>How is the data managed?</h2>
        <p>
          We will store our data in a <br />
          decentralized way like <br />
          IPFS or Pinata
        </p>
        <br />
        <p>
          Data added and modified will be <br />
          managed with a DAO
        </p>
        <br />
        <p>
          Users that contribute could <br />
          earn for the service
        </p>
        <br />
        <p>
          Protocols, users and dApps <br />
          could stake to pay for the service
        </p>
        <br />
        <p>
          You can request for the enter or <br />
          modification of the data
        </p>
        <p>How is the information retrieved</p>
      </div>
      <div>
        <SettingsEthernetRoundedIcon style={{ fontSize: "4rem" }} />
        <p>Using TheGraph we can analyze the whole history of blockchain txs</p>
        <p>Data could be graphed, compared(?) exported or whatever!</p>
        <p>You can request to create subgraphs for specific contracts</p>
        <p>You can create and promote yours!</p>
      </div>
      <div></div>
      <>
        <p>As users</p>
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
      </>
      <h3>As owners</h3>
      <ul>
        <li>Curate data and earn</li>
        <li>Create theGraph endpoint to add data sources</li>
        <li>Explore the web3 and add requests of inputs</li>
        <li>Find errors and bugs</li>
        <li>Educate about web3 and help people enter (the good way..)</li>
        <li>Decide over the purpose and whereabouts of Planetharium!</li>
      </ul>
      <>
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
      </>
      <>
        <h1>Thanks to!</h1>
        <p>TheGraph</p>
        <p>Coingecko</p>
        <p>ThreeJs</p>
        <p>Lots and lots of sponsors</p>
        <p>EthGlobal)</p>
        <h2>Gitcoin and donate!</h2>
      </>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
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

const CardButton = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 18vh;
  background: #ff00e5;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  font-style: normal;
  width: 189px;
  height: 58px;
  box-shadow: -8px 16px 9px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  align-self: center;
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
