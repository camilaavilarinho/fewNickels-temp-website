import React from "react";
import styled from "styled-components";
import teamBackground from "../assets/images/platform2.png";
import teamData from "../teamData.json";

const team = teamData.team;

const Team = styled.div`
  background: linear-gradient(rgba(42, 157, 114, 0.5), rgba(42, 157, 114, 0.7)),
    url(${teamBackground});
  background-size: 150%;
  /* background-position: top right; */
  /* background-repeat: no-repeat; */
  padding: 2rem;
  color: #30336b;
  text-align: center;
  font-weight: 300;
`;

const H2 = styled.h2`
  font-size: 50px;
  color: #ffffff;
`;

const Cards = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
`;

const CardSubtitle = styled.p`
  /* color: #30336b; */
  font-size: 15px;
  margin-bottom: 0;
  font-weight: bold;
`;

const ItemText = styled.p`
  text-align: left;
  padding: 1rem;
`;

const members = team.map((member, i) => {
  return (
    <Card key={i}>
      <CardCover>
        <CardImage src={member.image} alt="" />
      </CardCover>
      <CardDescription>
        <CardTitle>{member.name}</CardTitle>
        <CardSubtitle>{member.title}</CardSubtitle>
        <ItemText>{member.description}</ItemText>
      </CardDescription>
    </Card>
  );
});

export default () => (
  <Team id="team">
    <H2>Team</H2>
    <Cards>{members}</Cards>
  </Team>
);
