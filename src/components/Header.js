import NavButton from "../components/Nav/NavButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Wrapper>
      <SiteName>
        <Link to="/">PLANETHARIUM</Link>
      </SiteName>
      <TopNav>
        <NavButton title={"Home"} />
        <NavButton title={"Mapwip"} />
        <NavButton title={"About"} />
        <NavButton title={"About"} />
      </TopNav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  font-size: 2rem;
  padding-top: 30px;
  padding-left: 30px;
  box-shadow: 0 1px 10px 0 var(--shadow);
  justify-content: space-between;
  padding-bottom: 20px;
  /* position: fixed;
  background-color: var(--bg-color);
  z-index: 1; */
`;

const SiteName = styled.div`
  text-decoration: none;
  color: white;
  padding: 5px;
  font-size: 2rem;
  max-width: 300px;
`;

const TopNav = styled.nav`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  max-width: fit-content;
`;

export default Header;
