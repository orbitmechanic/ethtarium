import { Link } from "react-router-dom";
import styled from "styled-components";
// import { keyframes } from "styled-components";
import styles from "../../styles/main.module.css";
// import verse from "../../images/backgrounds/verse.png";
import DiskIcon from "../DiskIcon";
import BinoIcon from "../BinoIcon";
import UserIcon from "../UserIcon";
import CommunityIcon from "../CommunityIcon";
import DevIcon from "../DevIcon";
import ThanksIcon from "../ThanksIcon";

const Home = () => {
  return (
    <Wrapper>
      {/* hero section */}
      <div className={styles.hero}>
        <div className={styles.herotext}>
          <h1>A new way to experience Web 3.0</h1>
          <p>
            Explore, research, and interact with the decentralised universe as
            it grows
          </p>
        </div>

        <div className={styles.cta}>
          <p>Be part of it!!</p>
          <CardButton>
            <Link to={"/Map"}>Enter the dApp</Link>
          </CardButton>
        </div>
      </div>
      {/* cards section */}
      <div className={styles.homecards}>
        <div className={styles.homerow}>
          <div className={styles.homecard1}>
            <DiskIcon />
            <h2>
              How is the <br />
              data managed?
            </h2>
            <p>
              We will store our data in a <br />
              decentralized way like <br />
              IPFS
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
          </div>
          {/* card two */}
          <div className={styles.homecard2}>
            <BinoIcon />
            <h2>
              How is the <br />
              information retrieved
            </h2>
            <p>
              Powered by The Graph we can <br />
              analyze the whole history <br />
              of blockchain txs
            </p>
            <br />
            <p>
              Data could be graphed, <br />
              compared(?) exported <br />
              or whatever!
            </p>
            <br />
            <p>
              You can request to create subgraphs <br />
              for specific contracts
            </p>
            <br />
            <p>
              You can create and <br />
              promote yours!
            </p>
          </div>
        </div>
        {/* card one */}
        <div className={styles.homerow}>
          <div className={styles.homecard3}>
            <UserIcon />
            <h2>For users</h2>

            <p>Explore the web3 multiverse</p>
            <br />
            <p>Research and find information</p>
            <br />
            <p>
              Retrieve, graph and export data <br />
              of tx's with theGraph
            </p>
            <br />
            <p>
              Interact with smart <br />
              contracts and dApps
            </p>
            <br />
            <p>
              See live tx's <br />
              (Coming soon)
            </p>
            <br />
            <p>
              Have an immersive experience <br />
              in web3 with VR <br />
              (Coming soon)
            </p>
          </div>
          {/* card 4 */}
          <div className={styles.homecard4}>
            <CommunityIcon />
            <h2>For owners</h2>

            <p>
              Create The Graph endpoint <br />
              to add data sources
            </p>
            <br />
            <p>
              Explore the web3 and add <br />
              requests of inputs or modifications
            </p>
            <br />
            <p>Find errors and bugs</p>
            <br />
            <p>
              Educate others about web3 and <br />
              help the ecosystem grow
            </p>
            <br />
            <p>
              Decide the purpose <br />
              of Planetarium!
            </p>
            <br />
          </div>
          {/* card 5 */}
          <div className={styles.homecard5}>
            <DevIcon />
            <h2>For developers</h2>

            <p>Insert planetharium on your web!</p>
            <br />
            <p>
              Explore and create new ways <br />
              to interact with web3 <br />
              with our repo
            </p>
            <br />
            <p>
              Retrieve our dataset <br />
              for your projects!
            </p>
          </div>
        </div>
        {/* card three */}

        {/* card 6 */}
        <div className={styles.homecard6}>
          <ThanksIcon />
          <h2>Thanks to!</h2>
          <p>TheGraph</p>
          <br />
          <p>Coingecko</p>
          <br />
          <p>ThreeJs</p>
          <br />
          <p>EthGlobal</p>
          <br />
          <h2>Gitcoin? and donate?</h2>
        </div>
      </div>
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

const CardButton = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 5vh;
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

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// const Animation = styled.div`
//   background: linear-gradient(var(--grad1), var(--grad2)), url(${verse});
//   /* background-size: cover; */
//   background-repeat: no-repeat;
//   animation: ${rotate} 20s linear infinite;
// `;

// const CardT = styled.div`
//   font-size: 2rem;
//   width: fit-content;
//   height: fit-content;
//   padding: 40px;
//   border-radius: 2px;
//   box-shadow: 1px 1px 50px var(--shadow);
//   box-shadow: inset 1px 1px 10px 5px var(--shine);
//   /* transition: transform 0.5s ease-in-out, text-shadow 0.5s ease-in-out; */
//   max-width: 100vw;
//   background-image: url(${verse});
//   background-size: cover;
//   background-repeat: no-repeat;
//   will-change: transform;
//   transition: transform 0.5s ease-in-out, text-shadow 0.5s ease-in-out;
//   backdrop-filter: none;

//   &:hover {
//     transform: scale(1.01, 1.01);
//     text-shadow: 0px 0px 20px var(--textglow);
//     backdrop-filter: hue-rotate(120deg) blur(100px) invert(50%);
//     transition: transform 0.5s ease-in-out, text-shadow 0.5s ease-in-out;
//   }
// `;

export default Home;
