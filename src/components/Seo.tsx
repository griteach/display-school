import { graphql, useStaticQuery } from "gatsby";
import React from "react";

interface ISeoProps {
  title: string | undefined | null;
}

export default function Seo({ title }: ISeoProps) {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const myTitle = data.site?.siteMetadata?.title;
  return (
    <title>
      {title} | {myTitle}
    </title>
  );
}
