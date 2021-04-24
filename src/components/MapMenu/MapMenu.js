import styled from "styled-components";
import MenuButton from "./MenuButton";

export const MapMenu = () => {
  return (
    <Wrapper>
      <MenuButton />
      <p>Networks</p>
      <ul>
        {/* Menu item - label and checkbox bool */}
        <li>Ethereum</li>
        {/* temp will work on props */}
        <li>Bitcoin</li>
        <li>XDAI</li>
        <li>Polygon</li>
        <li>Binance</li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  border: solid 1px pink;
  padding-top: 20px;
  z-index: 2;
  margin-left: 20px;
  margin-top: 20px;
  color: red;
  background-color: blue;
  max-width: 300px;
`;

export default MapMenu;
