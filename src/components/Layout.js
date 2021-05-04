import styled from "styled-components";
// import styles from "../styles/main.module.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }, signer) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  background-color: var(--bg-color);
  opacity: 99%;
  color: white;
  width: 100vw;
`;

const Main = styled.div`
  align-self: center;
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
`;

export default Layout;
