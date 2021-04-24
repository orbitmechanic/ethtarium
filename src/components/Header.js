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
        <NavButton title={"About"} />
        <NavButton title={"About"} />
        <NavButton title={"About"} />
      </TopNav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  font-size: 2rem;
  padding-top: 30px;
  padding-left: 30px;
  box-shadow: 0 1px 10px 0 var(--shadow);
  box-shadow: inset 0 2px 10px 0 var(--shine);

  padding-bottom: 20px;
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
