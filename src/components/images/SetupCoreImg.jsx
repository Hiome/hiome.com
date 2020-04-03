import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SetupCoreImg = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "setup_core.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Hiome Core" loading="auto" fadeIn={false} />}
  />
)
export default SetupCoreImg
