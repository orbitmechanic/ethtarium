import styled from "styled-components";
import NavButton from "./Nav/NavButton";

const Footer = () => {
  return (
    <Wrapper>
      <p>Donate: Address</p>
      <BottomNav>
        <NavButton title={"Test"} />
      </BottomNav>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  bottom: 0px;
  display: flex;
  font-size: 2rem;
  padding-top: 30px;
  padding-left: 30px;
  box-shadow: 0 1px 10px 0 var(--shadow);
  box-shadow: inset 0 2px 10px 0 var(--shine);
  justify-content: space-between;

  padding-bottom: 20px;
`;

const BottomNav = styled.nav`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  max-width: fit-content;
`;

export default Footer;
