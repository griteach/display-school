import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

export default function ProductDetail({
  data,
}: PageProps<Queries.ProductItemQuery>) {
  return (
    <Layout title={data.contentfulProduct?.name!}>
      <GatsbyImage
        image={getImage(data.contentfulProduct?.preview?.gatsbyImageData!)!}
        alt={data.contentfulProduct?.name!}
      />
      <h4>name: {data.contentfulProduct?.name}</h4>
      <h4>degree: {data.contentfulProduct?.degree}</h4>
    </Layout>
  );
}

export const query = graphql`
  query ProductItem($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      name
      degree
      preview {
        gatsbyImageData(height: 250, placeholder: BLURRED)
      }
    }
  }
`;
