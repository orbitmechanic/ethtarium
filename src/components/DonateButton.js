import React from "react";
import styles from "../styles/main.module.css";
import styled from "styled-components";

const DonateButton = ({ donate }) => {
  return <Button onClick={donate}>Donate!</Button>;
};

const Button = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 5vh auto;
  background: #ff00e5;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  font-style: normal;
  color: white;
  width: 189px;
  height: 58px;
  box-shadow: -8px 16px 9px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
  /* justify-content: center; */
  /* justify-self: center; */
  /* align-items: center; */
  /* align-self: center; */
`;

export default DonateButton;
