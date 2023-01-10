import { graphql, Link, PageProps, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Author from "../components/Footer";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function IndexPage({ data }: PageProps<Queries.ProductsQuery>) {
  return (
    <>
      <Layout title="Main Page">
        <div className="grid">
          {data.allContentfulProduct.nodes.map((item) => (
            <article>
              <GatsbyImage
                image={getImage(item.preview?.gatsbyImageData!)!}
                alt={item.name!}
              />
              <Link to={`/products/${item.id}`}>
                <h3>{item.name}</h3>
                <h4>{item.degree}</h4>
              </Link>
            </article>
          ))}
        </div>
      </Layout>
    </>
  );
}

export const query = graphql`
  query Products {
    allContentfulProduct {
      nodes {
        id
        name
        degree
        preview {
          gatsbyImageData(height: 250)
        }
      }
    }
  }
`;

export function Head() {
  return <Seo title="Main"></Seo>;
}
