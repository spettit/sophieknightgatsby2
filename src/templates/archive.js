import React, { Component } from "react"
import PropTypes from "prop-types"
import { createClient } from "contentful"
import Img from "gatsby-image"
import styled from "styled-components"
import Link from "gatsby-link"
import Layout from "../components/layout"

const Container = styled.div`
  position: absolute;
  // top: 250px;
  z-index: -1;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flext-start;
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
  // max-width: 300px;
  font-size: 12px;
  margin: 5px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

const Label = styled.div`
  text-align: center;
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`
const Pic = styled.img`
  height: 800px;
  width: auto;
  //   cursor: zoom-in;
`

const Modal = styled.div`
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 100000;
  display: flex;
  cursor: zoom-out;
`

const TopDiv = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`

// const ModalImg = styled.img`
//  width: 100%;
//  height: auto;

// `

const client = createClient({
  space: "y3imyxpski9z",
  accessToken:
    "d83858a028c21fa9b0d315db2fd4ba26450be9b00dab36f1b29c638d5f25df3c",
})

class Gallery extends Component {
  constructor() {
    super()
    this.state = {
      works: [],
      pickedWork: "",
    }
  }

  componentWillMount() {
    client
      .getEntries({
        content_type: "archive",
        "fields.galleryName": this.props.data.contentfulArchive.galleryName,
      })
      // .then(response => (JSON.parse(response.items[0].fields)))
      .then(response =>
        this.setState({ works: response.items[0].fields.archiveItem })
      )
      .catch(console.error)
  }

  handleClick = pic => {
    console.log(pic)
    this.setState({ pickedWork: pic })
  }
  renderImages(works) {
    return works.map((ele, idx) => {
      return (
        <Card
          key={idx}
          //   onClick={() => this.handleClick(`https:${ele.fields.image.fields.file.url}?w=800`)}
        >
          {/* <Img sizes={ele.sizes} style={{height: '300', width: (300*ele.aspectRatio)}}/> */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pic src={`https:${ele.fields.image.fields.file.url}?h=800`} />
          </div>
          <div style={{ height: "30px", maxWidth: "300px" }}>
            <Label>{ele.fields.title}</Label>
            <Label>{ele.fields.medium}</Label>
            <Label>
              {ele.fields.width
                ? `${ele.fields.width}cm x ${ele.fields.height}cm`
                : "-"}
            </Label>
          </div>
        </Card>
      )
    })
  }

  render() {
    const { galleryName } = this.props.data.contentfulArchive
    const { archiveItem } = this.props.data.contentfulArchive

    this.state.works.map(w => console.log(w.fields.title))

    return (
      <Layout>
        <div>
          <TopDiv>
            <Link to={"/archives"}>back to collection</Link>
            <Title>
              <h2>{galleryName}</h2>
            </Title>
          </TopDiv>

          <Container
            style={{ display: this.state.pickedWork !== "" ? "none" : "flex" }}
          >
            <GalleriesContainer>
              {this.renderImages(this.state.works)}
            </GalleriesContainer>
          </Container>

          <Modal
            style={{
              display: this.state.pickedWork === "" ? "none" : "flex",
              backgroundImage: `url(${this.state.pickedWork})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            onClick={() => this.setState({ pickedWork: "" })}
          >
            {/* <ModalImg src={this.state.pickedWork} /> */}
          </Modal>
          {/* {this.state.works.map((w, idx) => <p key={idx}>{w.fields.image.fields.file.url}</p>)} */}
        </div>
      </Layout>
    )
  }
}

Gallery.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Gallery

export const pageQuery = graphql`
  query archiveItemQuery($slug: String!) {
    contentfulArchive(slug: { eq: $slug }) {
      galleryName
      slug
      archiveItem {
        image {
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
        title
      }
    }
  }
`
