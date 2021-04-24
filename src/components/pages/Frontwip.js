import React from "react";
import MapMenu from "../mapmenu/MapMenu";
import Mapwip from "../Mapwip";
import styled from "styled-components";

// Header with logo
//    Nav to go home
// Map in background
// Settings button
// Setting menu - hidden toggle
//    Network
//    Tokens
//    Check boxes
//    Wire in selection map
//    ?? Add your own - feature - icebox
// Footer

const Frontwip = (props) => {
  return (
    <Wrapper>
      <MapMenu />
      <Mapwip onNodeSelected={props.onNodeSelected} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-self: center;
  z-index: 1;
`;

export default Frontwip;
