import React from "react";
import styled from "styled-components";
import teamBackground from "../assets/images/platform2.png";
import isaque from "../assets/images/Team/isaque.png";
import leisy from "../assets/images/Team/leisy.png";
import magnus from "../assets/images/Team/magnus.png";
import samuel from "../assets/images/Team/samuel.png";
import henrique from "../assets/images/Team/henrique.png";

const Team = styled.div`
  background: linear-gradient(rgba(0, 0, 100, 0.5), rgba(0, 0, 100, 0.7)),
    url(${teamBackground});
  background-size: 100%;
  background-position: top right;
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

export default () => (
  <Team id="team">
    <H2>Team</H2>
    <Cards>
      <Card>
        <CardCover>
          <CardImage src={isaque} alt="" />
        </CardCover>
        <CardDescription>
          <CardTitle>Isaque Eberhardt</CardTitle>
          <CardSubtitle>CEO & Co-Founder</CardSubtitle>
          <ItemText>
            More than 10 years as data scientist and big data developer for
            agriculture. Near 15 years working in the agriculture related
            subject. Major skills in satellite images, crops modelling, GIS and
            crops modelling for systems.
          </ItemText>
        </CardDescription>
      </Card>
      <Card>
        <CardCover>
          <CardImage src={leisy} alt="" />
        </CardCover>
        <CardDescription>
          <CardTitle>Leisy Teixeira</CardTitle>
          <CardSubtitle>COO & Co-Founder</CardSubtitle>
          <ItemText>
            More than 10 years of experience in public and private sectors,
            working in agriculture, logistics and public concessions. Major
            skills in business management, agile methods, design thinking and
            gamification.
          </ItemText>
        </CardDescription>
      </Card>
      <Card>
        <CardCover>
          <CardImage src={magnus} alt="" />
        </CardCover>
        <CardDescription>
          <CardTitle>Magnus Dufwa</CardTitle>
          <CardSubtitle>CTO</CardSubtitle>
          <ItemText>
            More than 14 years of experience in technology in different fields
            as payments systems, system architect, IT consultant. Major skills
            in IT technology, blockchain developer, payments systems and
            business technology development.
          </ItemText>
        </CardDescription>
      </Card>
      <Card>
        <CardCover>
          <CardImage src={samuel} alt="" />
        </CardCover>
        <CardDescription>
          <CardTitle>Samuel Baker</CardTitle>
          <CardSubtitle>Full Stack Developer</CardSubtitle>
          <ItemText>
            More than 10 years in the IT industry with the military and civilian
            sectors. Major skills in Front-End and Back-End Software Development
            including SSIS, Cloud Computing, SQL, and Server-Side scripting.
            Main programming languages include C# and ES6 based languages.
          </ItemText>
        </CardDescription>
      </Card>
      <Card>
        <CardCover>
          <CardImage src={henrique} alt="" />
        </CardCover>
        <CardDescription>
          <CardTitle>Henrique Sena</CardTitle>
          <CardSubtitle>Full Stack Developer</CardSubtitle>
          <ItemText>
            Working with Software developer and Data authenticity. Front-End and
            Back-end with node.js ecosystem. Blockchain Technologies on
            development and Research.
          </ItemText>
        </CardDescription>
      </Card>
    </Cards>
  </Team>
);
