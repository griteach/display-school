import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Author from "../components/Author";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage() {
  return (
    <>
      <Layout title="Main Page">
        <p>this is main page</p>
        <StaticImage
          src="https://images.unsplash.com/photo-1514923995763-768e52f5af87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          alt="sky"
        />
      </Layout>
      <Author authorName="griteach"></Author>
    </>
  );
}

export function Head() {
  return <Seo title="Main"></Seo>;
}
