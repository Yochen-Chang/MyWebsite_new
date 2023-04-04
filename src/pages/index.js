import * as React from "react";
import Layout from "../components/layout";
import Banner from "../components/banner";
import Intro from "../components/intro";
import Portfolio from "../components/portfolio";

const IndexPage = () => {
  return (
    <>
      <Layout pageClass="home">
        <Banner></Banner>
        <Intro></Intro>
        <Portfolio></Portfolio>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Yochen | 🕺🏾會搖擺的網頁工程師👨🏻‍💻</title>;
