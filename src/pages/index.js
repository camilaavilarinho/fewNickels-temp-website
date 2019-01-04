import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Layout from "../components/layout";
import Counter from "../components/Counter";
import Company from "../components/Company";
import Platform from "../components/Platform";
import Investors from "../components/Investors";
import Farmers from "../components/Farmers";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Advisors from "../components/Advisors";
import Footer from "../components/Footer";

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Few Nickels</title>
      <link rel="canonical" href="https://www.fewnickels.com/" />
    </Helmet>
    <Header />
    <Counter />
    <Company />
    <Platform />
    <Investors />
    <Farmers />
    <Roadmap />
    <Team />
    <Advisors />
    <Footer />
  </Layout>
);
