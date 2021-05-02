import NavButton from "../components/Nav/NavButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
const Header = () => {
  return (
    <Wrapper>
      <BurgerMenu>
        <MenuIcon style={{ fontSize: "3rem" }} />
      </BurgerMenu>
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

const BurgerMenu = styled.header`
  padding: 10px;
  z-index: 2;
`;

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  font-size: 2rem;
  /* padding-top: 20px; */
  /* padding-left: 20px; */
  /* box-shadow: 0 1px 10px 0 var(--shadow); */
  justify-content: space-between;
  padding-bottom: 10px;
  position: fixed;
  /* background-color: var(--bg-color); */
  z-index: 2;
`;

const SiteName = styled.div`
  text-decoration: none;
  color: white;
  padding: 5px;
  font-size: 2rem;
  max-width: 300px;
  visibility: hidden;
  z-index: 2;
`;

const TopNav = styled.nav`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  max-width: fit-content;
  visibility: hidden;
  z-index: 2;
`;

export default Header;
