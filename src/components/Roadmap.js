import React from "react";
import styled from "styled-components";
import roadmap from "../assets/images/roadmap.png";

const Roadmap = styled.div`
  background-color: #ecf0f1;
  padding: 3rem 2rem;
  text-align: center;
  font-weight: 300;
`;

const H2 = styled.h2`
  font-size: 50px;
  color: #726658;
`;

const RoadmapImage = styled.img`
width: 100%;
margin: 3rem 0;
`


export default () => (
  <Roadmap id="roadmap">
    <H2>Our Roadmap</H2>
    <RoadmapImage src={roadmap} alt=""/>
  </Roadmap>
);
