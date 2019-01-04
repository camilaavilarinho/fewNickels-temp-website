import React from "react";
import styled from "styled-components";
import history from "../assets/images/chat.png";
import vision from "../assets/images/lightbulb.png";
import technology from "../assets/images/smartphone.png";

const Company = styled.div`
  background-color: #ffffff;
  padding-top: 3rem;
`;

const H2 = styled.h2`
  text-align: center;
  padding-top: 40px;
  font-size: 40px;
`;

const Cards = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 30px;
`;

const Card = styled.div`
  background-color: #f3f3f3;
`;

const CardCover = styled.div`
  width: 100%;
  padding: 20px;
`;

const CardImage = styled.img`
  display: block;
  margin: 0 auto;
`;
const CardDescription = styled.div`
  text-align: center;
`;

const CardTitle = styled.p`
  color: #30336b;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 0;
  font-weight: bold;
`;

const ItemText = styled.p`
  text-align: justify;
  padding: 1rem 3rem 3rem 3rem;
`;

export default () => (
  <Company id="company">
    <H2>The Few Nickels Agricultural Smart Services Co.</H2>
    <Cards>
      <Card>
        <CardCover>
          <CardImage src={history} alt="" />
        </CardCover>
        <CardDescription>
          <CardTitle>Our History</CardTitle>
          <ItemText>
            The beginning of the start-up come from the low access of farmers to
            financial services in South America, especially in Brazil.
            <br />
            Our company is developing a complete gateway to farmers access
            financial products such investment and costing loams or hedge
            contracts, and for investors and buyers we will provide multiple
            opportunities of investment in different farmers contracts. ​
            <br />A decentralized financial system to provide freedom and
            opportunities for everyone, everywhere, anytime is our mission.
          </ItemText>
        </CardDescription>
      </Card>
      <Card>
        <CardCover>
          <CardImage src={vision} alt="" />
        </CardCover>
        <CardDescription>
          <CardTitle>Our Vision</CardTitle>
          <ItemText>
            Our vision is a fully decentralized, digital and secure system of
            financial products to reduce costs and friction for farmers and
            investors to generate wealth for chain participants.
            <br />
            In future of decentralized internet we are the peer-to-peer system
            where farmers can finance their production, sell the products in
            transparent price settlement and get futures or hedge contracts over
            a trustful blockchain infrastructure. ​
            <br />
            In the same vision any citizen of the globe can funding with any
            amount of money any farmer contract, having opportunity of
            investment and impact generation in real lives. Any buyers can
            directly finance the production and buy in advance the products
            grown in responsible environmental and social conditions.
          </ItemText>
        </CardDescription>
      </Card>
      <Card>
        <CardCover>
          <CardImage src={technology} alt="" />
        </CardCover>
        <CardDescription>
          <CardTitle>Our Technology</CardTitle>
          <ItemText>
            We are over blockchain technology + Smart Contracts + Cryptocurrency
            and mobile and web applications for empower farmers, investors and
            buyers in a new era of financial and contracts services. ​
            <br />
            We provide a technology to any farmer generate their bid for
            financial support or sell products using a simple and directly
            platform. ​
            <br />
            We offer to all investors and buyers registered in the platform a
            opportunity of investment in any of the financial products of
            farmers or buying their production, in a full compliant system of
            transactions in environmental and social high patterns. ​
            <br />
            Our technology is fair, fast and secure at level of the user and at
            level of the system.
          </ItemText>
        </CardDescription>
      </Card>
    </Cards>
  </Company>
);
