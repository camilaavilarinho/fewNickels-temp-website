import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import crops from "../assets/images/crops.png";
import connect from "../assets/images/connect.svg";

const mediaQuery = "(max-width: 906px)";

const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  color: #fff;
  min-height: 600px;
  margin: 0;
  background: linear-gradient(rgba(0, 50, 0, 0.5), rgba(0, 50, 0, 0.7)),
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

const ReferralContainer = styled.div`
  align-self: center;
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

/* const CoverImg = styled.img`
  width: 300px;
  height: 300px;
  margin: 8rem;
  @media ${mediaQuery} {
    display: none;
  }
`; */

const Button = styled.a`
  display: inline-block;
  margin: 50px 0 0 7px;
  padding: 10px;
  color: #fff;
  border: 1.5px solid #fff;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #2A9D72;
    color: #dfe6e9;
    border: 1.5px solid #2A9D72;
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
      <Button href="/">Leia o White Paper - Pt-br</Button>
    </HeaderContainer>
    <ReferralContainer>
      {/* <Button href="/">Join our referral program!</Button> */}
      {/* <CoverImg src={connect} alt="" /> */}
      <span className="referral-span">
        <img src={connect} className="referral-img" alt="" />
      </span>
      <Link className="referral-btn" to="/referral/">
        Join our referral program!
      </Link>
    </ReferralContainer>
  </Header>
);
