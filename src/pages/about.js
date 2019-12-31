import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

import Layout from "../components/layout"

const Container = styled.div`
  width: 70vw;
  height: 70vh;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 400px) {
    width: 90vw;
    height: 90vh;
  }
`;

const AboutPage = ({ data }) => {
  // console.log(data.allMarkdownRemark.edges[0].node.html)

  return (
      <Layout>
    <Container>
      <Img
        className="profilePic"
        sizes={data.contentfulArtist.profilePicture1.sizes}
        style={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}
      />
      <br />
      <div id="bio"
        dangerouslySetInnerHTML={{
          // __html: data.allMarkdownRemark.edges[0].node.html
          __html: data.contentfulArtist.childContentfulArtistBiographyTextNode.childMarkdownRemark.html
        }}
      />
      <br />
      <div id = "method"
        dangerouslySetInnerHTML={{
          __html: data.contentfulArtist.childContentfulArtistStatementTextNode.childMarkdownRemark.html
        }}
      />
      <br />
      <div id = "exhibitions"
        dangerouslySetInnerHTML={{
          __html: data.contentfulArtist.childContentfulArtistExhibitionsTextNode.childMarkdownRemark.html
        }}
      />
      <br />
      <div id = "cv"
        dangerouslySetInnerHTML={{
          __html: data.contentfulArtist.childContentfulArtistCvTextNode.childMarkdownRemark.html
        }}
      />
      <br />
      <div id = "links"
        dangerouslySetInnerHTML={{
          __html: data.contentfulArtist.childContentfulArtistLinksTextNode.childMarkdownRemark.html
        }}
      />
    </Container>
    </Layout>
  );
};

export default AboutPage;

export const biogQuery = graphql`
  query biogQuery {
    contentfulArtist {
      id
      name
      profilePicture1 {
        id
        file {
          url
        }
        sizes(maxWidth: 600) {
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
      }
      childContentfulArtistBiographyTextNode {
        childMarkdownRemark {
          html
        }
      }
      childContentfulArtistStatementTextNode {
        childMarkdownRemark {
          html
        }
      }
      childContentfulArtistExhibitionsTextNode {
        childMarkdownRemark {
          html
        }
      }
      childContentfulArtistCvTextNode {
        childMarkdownRemark {
          html
        }
      }
      childContentfulArtistLinksTextNode {
      childMarkdownRemark {
        html
      }
    }
  }
}
`;
