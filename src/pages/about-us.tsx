import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Author from "../components/Author";

export default function AboutUs() {
  return (
    <>
      <Layout title="About Us">
        <p>this is my gatsby page test</p>
      </Layout>
      <Author authorName="griteach"></Author>
    </>
  );
}

export function Head() {
  return <Seo title="About Us"></Seo>;
}
