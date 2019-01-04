import React from "react";
import styled from "styled-components";
import platform from "../assets/images/curve-background.png";

const Farmers = styled.div`
  /* background: linear-gradient(rgba(0, 0, 100, 0.5), rgba(0, 0, 100, 0.7)),
    url(${platform}); */
  /* background: url(${platform}); */
  background-color: #f3f3f3;
  background-size: 100%;
  background-position: bottom right;
  background-repeat: no-repeat;
  min-height: 500px;
  text-align: center;
  padding-top: 4rem;

`;

const H2 = styled.h2`
  font-size: 50px;
  color: #30336b;
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
  grid-column: 1/3;
`;

const Card = styled.div`
  background-color: #f3f3f3;
  /* padding: 0.5rem; */
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

const Button = styled.a`
  display: inline-block;
  padding: 10px;
  color: #ffffff;
  background-color: #30336b;
  border: 1.5px solid #30336b;
  border-radius: 5px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  &:hover {
    background-color: #a29bfe;
    color: #dfe6e9;
    border: 1.5px solid #dfe6e9;
  }
`;

export default () => (
  <Farmers id="farmers">
    <H2>Farmers</H2>
    <Cards>
      <Wrapper>
        <Card>
          <CardDescription>
            <CardTitle>Fair</CardTitle>
            <ItemText>
              The platform is developed to provide fair transactions for any
              farmer independently of their size, region of world or type of
              crop. All farmers can place their bid over the platform, which it
              will be sorted by time. ​ As the blockchain technology has the
              property of immutability and third part check, anyone can check
              out in the blockchain records how much, when and for what type of
              crop the smart contracts was written.
            </ItemText>
          </CardDescription>
        </Card>
        <Card>
          <CardDescription>
            <CardTitle>Acessible</CardTitle>
            <ItemText>
              The P2P crypto platform is accessible for all farmers who has some
              way to connect the internet by mobile phone, web systems or rural
              extension services. ​ In a easy system of identification, any
              farmer with photo their documents and a selfie can registry
              instantaneously and access their profile from any machine
              connected to the internet. ​ All services free of charge until
              their receive the asked financial loam or sell their products.
            </ItemText>
          </CardDescription>
        </Card>
        <Card>
          <CardDescription>
            <CardTitle>Simple</CardTitle>
            <ItemText>
              The system provide is developed to be much more logical and
              intuitive as possible to provide for all users with different web
              skills the possibility of chose their options only by select
              buttons and moving bars. ​ The main goal of platform is be simple
              enough for any farmer in any country be capable of define their
              financial necessity, fill the order and place the bid in less than
              a minute from their own homes. ​ Providing freedom and easy access
              to the XXI century technology.
            </ItemText>
          </CardDescription>
        </Card>
        <Button>Check our Platform</Button>
      </Wrapper>
    </Cards>
  </Farmers>
);
