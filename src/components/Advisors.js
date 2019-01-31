import React from "react";
import styled from "styled-components";
import advisorsData from "../advisorsData.json";

const dataAdvisors = advisorsData.advisors;

const Advisors = styled.div`
  background-size: 100%;
  background-position: top right;
  /* background-repeat: no-repeat; */
  padding: 2rem;
  /* color: #726658; */
  text-align: center;
  font-weight: 300;
`;

const H2 = styled.h2`
  font-size: 50px;
  color: #726658;
`;

const Cards = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  padding: 30px;
`;

const Card = styled.div`
  background-color: #f3f3f3;
  padding: 0.5rem;
`;

const CardCover = styled.div`
  width: 100%;
  padding: 20px;
`;

const CardImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  border-radius: 50%;
`;
const CardDescription = styled.div`
  text-align: center;
`;

const CardTitle = styled.p`
  color: #30336b;
  font-size: 20px;
  /* text-transform: uppercase; */
  margin-bottom: 0;
  font-weight: bold;
  color: #726658;
`;

const CardSubtitle = styled.p`
  color: #726658;
  font-size: 15px;
  margin-bottom: 0;
  font-weight: bold;
`;

const ItemText = styled.p`
  text-align: left;
  padding: 1rem;
`;

const advisors = dataAdvisors.map((advisor, i) => {
  return (
    <Card key={i}>
      <CardCover>
        <CardImage src={advisor.image} alt="" />
      </CardCover>
      <CardDescription>
        <CardTitle>{advisor.name}</CardTitle>
        <CardSubtitle>{advisor.title}</CardSubtitle>
        <ItemText>{advisor.description}</ItemText>
      </CardDescription>
    </Card>
  );
});

export default () => (
  <Advisors id="advisors">
    <H2>Advisors</H2>
    <Cards>{advisors}</Cards>
  </Advisors>
);
