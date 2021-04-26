import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }, signer) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: linear-gradient(#7a78dd, #090b29); */
  /* width: 100%;
    height: 100%; */
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  z-index: 0;
  background-color: var(--bg-color);
  color: white;
  max-height: 100%;
`;

const Main = styled.div`
  align-self: center;
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  z-index: 0;
  width: 100%;
  justify-content: center;
`;

export default Layout;
