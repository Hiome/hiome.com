import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SetupMagnetImg = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "setup_magnet.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Hiome Door maget on door" loading="auto" fadeIn={false} style={{maxWidth: `600px`}} />}
  />
)
export default SetupMagnetImg
