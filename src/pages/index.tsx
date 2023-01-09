import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Author from "../components/Author";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage() {
  return (
    <>
      <Layout title="Main Page">
        <p>this is main page</p>
      </Layout>
      <Author authorName="griteach"></Author>
    </>
  );
}

export function Head() {
  return <Seo title="Main"></Seo>;
}
