import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const GafferThumb = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "GafferThumb.png" }) {
          childImageSharp {
            fluid(maxWidth: 320) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Gaffer Tape" />}
  />
)
export default GafferThumb
