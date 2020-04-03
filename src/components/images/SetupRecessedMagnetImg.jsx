import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SetupRecessedMagnetImg = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "recessed4.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Hiome Door Recessed magnet dimensions" loading="auto" fadeIn={false} style={{maxWidth: `400px`}} />}
  />
)
export default SetupRecessedMagnetImg
