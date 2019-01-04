import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
  /* faYoutube,
  faGooglePlusG */
} from "@fortawesome//free-brands-svg-icons";
import background from "../assets/images/platform1.png";

const Footer = styled.div`
  background-color: #ecf0f1;
  background: linear-gradient(rgba(0, 0, 100, 0.5), rgba(0, 0, 100, 0.7)),
    url(${background});
  background-size: 100%;
  background-position: top right;
  background-repeat: no-repeat;
  padding: 2rem;
  color: #dfe6e9;
  text-align: center;
  font-weight: 300;
  min-height: 550px;
`;

const Contact = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding: 30px;
`;

const About = styled.div`
  & > a {
    color: #dfe6e9;
    text-decoration: none;
  }
  /* border-top: 2px solid #dfe6e9; */
  /* border-left: 2px solid #ffffff; */
`;

const Social = styled.div``;

/* const H3 = styled.h3`
  font-size: 30px;
`; */

const H2 = styled.h2`
  margin: 1rem;
`;

/* const H1 = styled.h1`
  margin: 1rem 0 4rem 0;
  font-size: 60px;
  color: #ffffff;
`; */

const IconLink = styled.a`
  padding: 20px;
  color: #dfe6e9;
`;

export default () => (
  <Footer id="footer">
    {/* <H3>Intersted in investing?</H3>
    <H1>Get in touch!</H1> */}
    <Contact>
      <About>
        <H2 >About</H2>
        <a href="mailto:fewnickels@fewnickels.com">fewnickels@fewnickels.com</a>
        <p>Telegram: @TraderXCoin</p>
        <p>Brasília, Federal District</p>
        <p>Brazil</p>
      </About>
      <Social>
        <H2>Social</H2>
        <IconLink
          href="https://www.linkedin.com/company/fewnickels"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </IconLink>
        <IconLink href="https://www.facebook.com/pg/FewNickels" target="_blank">
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </IconLink>
        <IconLink href="https://twitter.com/FewNickels" target="_blank">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </IconLink>
        <IconLink href="https://www.instagram.com/fewnickels/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </IconLink>
        {/* <IconLink href="" target="_blank">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </IconLink>
        <IconLink href="" target="_blank">
          <FontAwesomeIcon icon={faGooglePlusG} size="2x" />
        </IconLink> */}
      </Social>
    </Contact>
  </Footer>
);
