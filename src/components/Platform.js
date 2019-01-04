import React from "react";
import styled from "styled-components";
import platform from "../assets/images/curve-background.png";
import secure from "../assets/images/secure1.png";
import democratic from "../assets/images/debate.png";
import easy from "../assets/images/tap.png";

/* const mediaQuery = "(max-width: 768px)"; */

const Platform = styled.div`
  background: linear-gradient(rgba(0, 0, 100, 0.5), rgba(0, 0, 100, 0.7)),
    url(${platform});
  /* background: url(${platform}); */
  background-size: 100%;
  background-position: top right;
  background-repeat: no-repeat;
  min-height: 600px;
  text-align: center;
  padding-top: 4rem;

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
  border-radius: 50%;
  padding: 0.5rem;
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
  padding: 1rem 4rem 4rem 4rem;
`;

export default () => (
  <Platform id="platform">
    <H2>The Platform</H2>
    <Cards>
      <Card>
        <CardCover>
          <CardImage src={secure} alt="" />
        </CardCover>
        <CardDescription>
          <CardTitle>Secure</CardTitle>
          <ItemText>
            Our decentralized platform is based in blockchain technology to
            provide the secure infrastructure for peer-to-peer connection
            between farmers and investors and buyers of products, using the
            smart contracts financial and trade solutions.
          </ItemText>
        </CardDescription>
      </Card>
      <Card>
        <CardCover>
          <CardImage src={democratic} alt="" />
        </CardCover>
        <CardDescription>
          <CardTitle>Democractic</CardTitle>
          <ItemText>
            The P2P crypto platform is open for everyone, from anywhere, with
            any size of investment, democratizing access to investment support
            for farmers and opportunities of business for every citizen.
          </ItemText>
        </CardDescription>
      </Card>
      <Card>
        <CardCover>
          <CardImage src={easy} alt="" />
        </CardCover>
        <CardDescription>
          <CardTitle>Easy</CardTitle>
          <ItemText>
            Our Platform is fully acessible from mobile, tablets and personal
            computers, where you will control your investments, save money,
            supporting sustainable production and make the world more free and
            connected, with one touch.
          </ItemText>
        </CardDescription>
      </Card>
    </Cards>
  </Platform>
);
