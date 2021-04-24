import NavButton from "../components/Nav/NavButton";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <SiteName>
        <p>PLANETHARIUM</p>
      </SiteName>
      <TopNav>
        <NavButton title={"About"} />
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
  border: solid 1px white;
  box-shadow: 0 10px 10px 0 blue;
`;

const SiteName = styled.div`
  color: white;
  padding: 5px;
  font-size: 2rem;
  border: solid 1px white;
  max-width: 300px;
`;

const TopNav = styled.nav`
  padding-left: 20px;
  padding-right: 20px;
  border: solid 1px white;
`;

export default Header;
