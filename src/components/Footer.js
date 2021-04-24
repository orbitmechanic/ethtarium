import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <p>Donate: Address</p>
      <nav>
        <ul>
          <li>
            <a href="/">Link1</a>
          </li>
          <li>
            <a href="/">Link2</a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  bottom: 0px;
`;

export default Footer;
