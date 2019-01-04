import React from "react";
import styled from "styled-components";

const Counter = styled.div`
  background-color: #ecf0f1;
  padding: 2rem;
  color: #30336b;
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
`;

export default () => (
  <Counter>
    <h2>The TraderX Coin (TDR) token sale is coming!</h2>
  </Counter>
);
