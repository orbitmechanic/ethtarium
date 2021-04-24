import React from "react";
import NavButton from "../components/Nav/NavButton";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <p>PLANETHARIUM</p>
      <nav>
        <NavButton title={"About"} />
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  font-size: 2rem;
  padding-top: 30px;
  padding-left: 30px;
  border-bottom: solid 2px black;
  box-shadow: 0 10px 10px 0 rgb(255, 255, 255);
`;

export default Header;
