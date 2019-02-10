import React from "react";
import styled from "styled-components";
import platform from "../assets/images/curve-background.png";
import secure from "../assets/images/secure.svg";
import transparent from "../assets/images/transparent.svg";
import instantaneous from "../assets/images/instantaneous.svg";

const mediaQuery = "(max-width: 768px)";

const Investors = styled.div`
  /* background: linear-gradient(rgba(0, 0, 100, 0.5), rgba(0, 0, 100, 0.7)),
    url(${platform}); */
  /* background: url(${platform}); */
  background-color: #fff;
  background-size: 100%;
  background-position: bottom right;
  background-repeat: no-repeat;
  min-height: 500px;
  text-align: center;
  padding-top: 4rem;

`;

const H2 = styled.h2`
  font-size: 50px;
  color: #2a9d72;
`;

const Cards = styled.section`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  padding: 30px;
  background: url(${platform});
  background-size: auto;
  background-repeat: space;
`;

const Wrapper = styled.div`
  grid-column: 3/5;
  @media ${mediaQuery} {
    grid-column: 1/3;
  }
`;

const Card = styled.div`
  grid-column: 2/3;
  background-color: #fff;
  /* padding: 0.5rem; */
`;

const CardCover = styled.div`
  width: 100%;
  padding: 20px;
`;

const CardImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 20%;
`;

const CardDescription = styled.div`
  text-align: center;
`;

const CardTitle = styled.p`
  color: #2a9d72;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 0;
  font-weight: bold;
`;

const ItemText = styled.p`
  text-align: justify;
  padding: 1rem 4rem 4rem 4rem;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px;
  color: #ffffff;
  background-color: #2a9d72;
  border: 1.5px solid #2a9d72;
  border-radius: 5px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  &:hover {
    background-color: #1dd1a1;
    color: #dfe6e9;
    border: 1.5px solid #dfe6e9;
  }
`;

export default () => (
  <Investors id="investors">
    <H2>Investors and Buyers</H2>
    <Cards>
      <Wrapper>
        <Card>
          <CardCover>
            <CardImage src={secure} alt="" />
          </CardCover>
          <CardDescription>
            <CardTitle>Secure</CardTitle>
            <ItemText>
              All financial contracts for investors in our platform has a credit
              risk and a crop risk evaluations, from this risk rating is signed
              the insurance contracts to guarantee trustful operations. ​ The
              Few Nickels has two insurance funds, one for payments
              delay/default and other for crops weather issues.
            </ItemText>
          </CardDescription>
        </Card>
        <Card>
          <CardCover>
            <CardImage src={transparent} alt="" />
          </CardCover>
          <CardDescription>
            <CardTitle>Transparent</CardTitle>
            <ItemText>
              As a P2P crypto platform is open for everyone, from anywhere, with
              any size of investment we provide a full transparent compliance
              system using data science methods as satellite imagery, GIS and AI
              modelling to detect crops development, yield, insurance risk and
              other parameters. ​<br />
              Also all financial contracts requested has the evaluation of
              environmental and social compliance over different datasets.
            </ItemText>
          </CardDescription>
        </Card>
        <Card>
          <CardCover>
            <CardImage src={instantaneous} alt="" />
          </CardCover>
          <CardDescription>
            <CardTitle>Instantaneous</CardTitle>
            <ItemText>
              Our Platform is fully accessible 24 hours a day 7 days a week in a
              digital decentralized web application to provide for all investors
              and buyers the opportunities in real-time. The investors receive
              ours communication at the moment farmers place their bid. ​ The
              buyers can participate in sellers options as auctions, early sell
              of production or hedge contracts anytime their are a open
              contract.
            </ItemText>
          </CardDescription>
        </Card>
        <Button>Check our Platform</Button>
      </Wrapper>
    </Cards>
  </Investors>
);
