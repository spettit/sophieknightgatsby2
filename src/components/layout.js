import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import './layout.css'

import NavBar from '../components/nav-bar';


const TemplateWrapper = ({ children, data }) => (
  <div style={{position: 'relative'}}>
    <Helmet
      title="Sophie Knight, Artist"
      meta={[
        // { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Sophie Knight is an artist, a watercolor painter and a teacher' },
        { name: 'keywords', content: 'artist,watercolor,watercolour,painter,royal watercolour society' },
        { name: 'google-site-verification', content: 'H9a951ASx4cXGPR8iGHhXqh4MkUWUvlybKxz8Qwq5HE' },
      ]}
    />
    <NavBar data = {data}/>
    <div>
      {children}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const artistNameQuery = graphql`
  query artistNameQuery {
    contentfulArtist (name: {eq: "Sophie Knight"}) {
      name
    }
  }
`
