import styled from "styled-components";

const NavButton = ({ title }) => {
  return <Wrapper>{title}</Wrapper>;
};

//Props

// Styles
const Wrapper = styled.button`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  :hover {
    background-color: white;
    color: blue;
  }
`;

export default NavButton;
