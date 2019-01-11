import React from "react";
import styled from "styled-components";
import Countdown from "./Countdown";

const Counter = styled.div`
  background-color: #ecf0f1;
  padding: 2rem;
  color: #30336b;
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
`;

const date = {
  year: 2019,
  month: 3,
  day: 10,
  hour: 24,
  minute: 0,
  second: 0.
}

export default () => (
  <Counter>
    <h2>The TraderX Coin (TDR) token sale is coming!</h2>
    <Countdown date={date}></Countdown>
  </Counter>
);
