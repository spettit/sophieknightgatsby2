import React from "react"
import Img from 'gatsby-image';
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const MainImage = styled.div`
  position: absolute;
  ${'' /* background-color: pink; */}
  top:0px;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
`

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <MainImage id="mainImage">
        <Img className="bigPic" sizes={props.data.contentfulArtist.homePageImage.sizes} />
      </MainImage>
  </Layout>
)

export default IndexPage

export const mainImageQuery = graphql`
  query mainImageQuery {
    contentfulArtist (name: {eq: "Sophie Knight"}) {
      name
      homePageImage {
        file {
          url
        }
        sizes (maxWidth: 800){
          base64
          aspectRatio
          src
          srcSet
          sizes
        }
        resolutions (height:200) {
          base64
          aspectRatio
          width
          height
          src
          srcSet
        }
      }
    }
  }
`