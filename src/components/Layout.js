import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
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
  background-color: #120e2f;
  color: white;
  max-height: 100%;
`;

const Main = styled.div`
  border: solid 1px blue;
  align-self: center;
  align-items: center;

  background-color: 0a2b50;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  z-index: 0;
  width: 100%;
  justify-content: center;
`;

export default Layout;
