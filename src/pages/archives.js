import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"

const Container = styled.div`
  position: absolute;
  // top: 150px;
  z-index: -1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const TopDiv = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const GalleriesContainer = styled.div`
  z-index: -1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 70vw;
  flex-wrap: wrap;
`
const Card = styled.div`
  font-size: 12px;
  margin: 5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Pic = styled.img`
  height: 200px;
`

// const Label = styled.div`
//   text-align: center;
// `

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

const Gallery = ({ node }) => {
  return (
    <Card>
      <Link
        to={`/${node.slug}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pic src={node.coverImage.sizes.src} />
        </div>
        <Title>{node.archiveItem}</Title>
      </Link>
    </Card>
  )
}

const ArchivesPage = ({ data }) => (
  <Layout>
    <Container>
      <TopDiv>
        <Title>
          <h2>In Print</h2>
        </Title>
      </TopDiv>
      <GalleriesContainer>
        {data.contentfulArtist.archive.map(archive => (
          <Gallery node={archive} key={archive.id} />
        ))}
      </GalleriesContainer>
    </Container>
  </Layout>
)

export default ArchivesPage

export const galleryQuery = graphql`
  query archiveQuery {
    contentfulArtist(name: { eq: "Sophie Knight" }) {
      archive {
        id
        galleryName
        slug
        coverImage {
          sizes(maxHeight: 300) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
          id
          title
          file {
            url
          }
        }
      }
    }
  }
`

// export const galleryQuery = graphql`
//   query galleryQuery {
//     allContentfulGallery (filter: {
//       node_locale: {eq: "en-GB"}
//     }) {
//       edges {
//         node {
//           id
//           galleryName
//           slug
//         }
//       }
//     }
//   }
// `
