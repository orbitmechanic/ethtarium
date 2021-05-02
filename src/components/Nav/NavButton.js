import styled from "styled-components";
import { Link } from "react-router-dom";

const NavButton = ({ title }) => {
  return (
    <Wrapper>
      <Link to={"/" + title}>{title}</Link>
    </Wrapper>
  );
};

//Props

// Styles
const Wrapper = styled.div`
  max-width: fit-content;
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  background-color: var(--bg-color);
  /* box-shadow: 0px 0px 5px var(--shadow); */
  /* box-shadow: inset 0px 0px 5px var(--shine); */
  :hover {
    background-color: var(--shine);
    color: white;
  }
`;

export default NavButton;
