import { graphql, useStaticQuery } from "gatsby";
export const SiteInfo = () => {
  return useStaticQuery(graphql`
    query siteInfoQuery {
      allSite {
        edges {
          node {
            siteMetadata {
              gofood_link
              grabfood_link
              instagram_link
              location
              noHp
            }
          }
        }
      }
    }
  `);
};
