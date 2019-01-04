import React from "react";
import styled from "styled-components";
import andre from "../assets/images/Team/andre.png";

const Advisors = styled.div`
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
  color: #30336b;
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
  grid-column: 1/2;
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
  <Advisors id="advisors">
    <H2>Advisors</H2>
    <Cards>
      <Card>
        <CardCover>
          <CardImage src={andre} alt="" />
        </CardCover>
        <CardDescription>
          <CardTitle>André Lima</CardTitle>
          <CardSubtitle>GIS and Environmental Advisor</CardSubtitle>
          <ItemText>
            Geographer, Ph.D. in Remote Sensing holding more than fifteen years
            of experience mapping and monitoring land use land cover changes in
            tropical regions. He has been worked in National Institute for Space
            Research (INPE), EMBRAPA Satellite Monitoring. He is currently a
            Global Land Analysis & Discovery team member led by Dr. Matthew
            Hansen and Petr Potapov at the University of Maryland, Geographical
            Sciences department.
          </ItemText>
        </CardDescription>
      </Card>
    </Cards>
  </Advisors>
);
