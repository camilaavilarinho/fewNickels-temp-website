import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faTwitter,
  faInstagram,
  faTelegram
} from "@fortawesome//free-brands-svg-icons";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import background from "../assets/images/platform1.png";

const mediaQuery = "(max-width: 906px)";

const Footer = styled.div`
  background-color: #ecf0f1;
  background: linear-gradient(rgba(42, 157, 114, 0.7), rgba(42, 157, 114, 0.7)),
    url(${background});
  background-size: 100%;
  background-position: top right;
  background-repeat: no-repeat;
  padding: 2rem;
  color: #dfe6e9;
  text-align: justify;
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
  font-size: 18px;
  & a {
    color: #dfe6e9;
    text-decoration: none;
  }
  & span {
    padding: 10px;
  }
`;

const Content = styled.div`
  margin-left: 10rem;
  & p{
    padding-top: 5px;
  }
  @media ${mediaQuery} {
    margin-left: 0;
  }
`;

const Social = styled.div``;

const H2 = styled.h2`
  margin: 1rem;
  text-align: center;
`;

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
        <H2>About</H2>
        <Content>
          <a href="mailto:fewnickels@fewnickels.com">
            <span>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </span>
            fewnickels@fewnickels.com
          </a>
          <p>
            <span>
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </span>
            @TraderXCoin
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
            </span>
            Brasília, Federal District, Brazil
          </p>
        </Content>
      </About>
      <Social>
        <H2>Social</H2>
        <Content>
          <IconLink
            href="https://www.linkedin.com/company/fewnickels"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </IconLink>
          <IconLink
            href="https://www.facebook.com/pg/FewNickels"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </IconLink>
          <IconLink href="https://twitter.com/FewNickels" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </IconLink>
          <IconLink
            href="https://www.instagram.com/fewnickels/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </IconLink>
        </Content>
      </Social>
    </Contact>
  </Footer>
);
