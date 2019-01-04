import React from "react";
import styled from "styled-components";
import crops from "../assets/images/crops.png";
import connect from "../assets/images/connect.svg";

const mediaQuery = '(max-width: 906px)';

const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  color: #fff;
  min-height: 600px;
  margin: 0;
  background: linear-gradient(rgba(0, 0, 100, 0.5), rgba(0, 0, 100, 0.7)),
    url(${crops});
  background-size: 100%;
  background-position: bottom right;
  background-repeat: no-repeat;
  @media ${mediaQuery} {
    grid-template-columns: 1fr;
  }
`;

const HeaderContainer = styled.div`
  padding: 100px;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Subtitle = styled.h3`
  padding-top: 20px;
  font-size: 22px;
  text-align: left;
  font-weight: 300;
`;

const CoverImg = styled.img`
  width: 400px;
  height: 400px;
  margin: 8rem;
  @media ${mediaQuery} {
    display: none;
  }
`;

const Button = styled.a`
  display: inline-block;
  margin: 50px 0 0 7px;
  padding: 10px;
  color: #fff;
  border: 1.5px solid #fff;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
      background-color: #a29bfe;
      color: #dfe6e9;
      border: 1.5px solid #dfe6e9;
  }
`;

export default () => (
  <Header id="home">
    <HeaderContainer>
      <Title>A Global Decentralized P2P Crypto AgriFintech</Title>
      <Subtitle>
        A decentralized platform to connect Farmers to Investors and Buyers over
        blockchain application
      </Subtitle>
      <Button
        href="https://docs.wixstatic.com/ugd/19ab13_920707577b754d23912b499f070c0590.pdf"
        target="_blank"
      >
        Read the White Paper - En
      </Button>
      <Button href="/">
        Leia o White Paper - Pt-br
      </Button>
    </HeaderContainer>
    <div>
      <CoverImg src={connect} alt="" />
    </div>
  </Header>
);
