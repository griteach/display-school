import { graphql, Link, PageProps } from "gatsby";
import React from "react";

import Layout from "../../components/Layout";

import Seo from "../../components/Seo";

function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <Layout title="Blog">
      <section className="grid">
        {data.allMdx.nodes.map((file, index) => (
          <article key={index}>
            <Link to={`/blog/${file.frontmatter?.slug}`}>
              <h3>{file.frontmatter?.title}</h3>
              <hr></hr>
            </Link>
            <p>
              {file.frontmatter?.category} in {file.frontmatter?.date}
            </p>
            <p>author: {file.frontmatter?.author}</p>
            <p>{file.excerpt}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
}

export default Blog;

export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          slug
          category
          date
          title
          author
        }
        excerpt(pruneLength: 30)
      }
    }
  }
`;

export function Head() {
  return <Seo title="Blog"></Seo>;
}
