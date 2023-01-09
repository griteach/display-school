import React from "react";
import Author from "../components/Author";
import Layout from "../components/Layout";

import Seo from "../components/Seo";

function Blog() {
  return (
    <div>
      <Layout title="Blog">
        <p>Hello, welcome to my blog!</p>
      </Layout>
      <Author authorName="griteach"></Author>
    </div>
  );
}

export default Blog;

export function Head() {
  return <Seo title="Blog"></Seo>;
}