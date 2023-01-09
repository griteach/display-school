import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import Author from "../../components/Author";
import Layout from "../../components/Layout";

import Seo from "../../components/Seo";

function Blog({ data }: PageProps<Queries.BlogPostsQuery>) {
  return (
    <div>
      <Layout title="Blog">
        <section>
          {data.allMdx.nodes.map((file, index) => (
            <article key={index}>
              <Link to={`/blog/${file.frontmatter?.slug}`}>
                <h3>{file.frontmatter?.title}</h3>
                <h5>
                  {file.frontmatter?.category} in {file.frontmatter?.date}
                </h5>
                <h6>{file.frontmatter?.author}</h6>
                <hr />
                <p>{file.excerpt}</p>
              </Link>
            </article>
          ))}
        </section>
      </Layout>
      <Author authorName="griteach"></Author>
    </div>
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
