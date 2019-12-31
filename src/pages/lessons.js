import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Layout from '../components/layout'

const Container = styled.div`
  width: 70vw;
  margin-right: auto;
  margin-left: auto;
  margin-top: 150px;
`

const ImageDiv = styled.div`
display: flex;
justify-content: center;
`

const LessonPage = ({data}) => {
  // console.log(data.allMarkdownRemark.edges[0].node.html)
  return(
      <Layout>
    <Container>
      <ImageDiv>
      <img src={data.contentfulArtist.profilePicture2.file.url} />
      {/* <div style={{width: '10px'}}></div>
      <img src={data.contentfulArtist.profilePicture3.file.url} /> */}
      </ImageDiv>
      
      <div dangerouslySetInnerHTML={{ __html: data.contentfulArtist.childContentfulArtistLessonsTextNode.childMarkdownRemark.html}} />
      <Link to='/contact'>Sign up for Watercolour Lessons</Link>
    </Container>
    </Layout>
  )
}


export default LessonPage

export const lessonQuery = graphql`
query artistQuery {
  contentfulArtist(name: {eq: "Sophie Knight"}) {
    profilePicture2 {
      file {
        url
        fileName
        contentType
      }
    }
    profilePicture3 {
      file {
        url
        fileName
        contentType
      }
    }
    
		childContentfulArtistLessonsTextNode {
      childMarkdownRemark {
        html
      }
		}
  }
}
`
