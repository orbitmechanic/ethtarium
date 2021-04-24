import styled from "styled-components";

const NavButton = ({ title }) => {
  return <Wrapper>{title}</Wrapper>;
};

//Props

// Styles
const Wrapper = styled.button`
  padding: 10px;
`;

export default NavButton;
