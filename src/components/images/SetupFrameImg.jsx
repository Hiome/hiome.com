import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SetupFrameImg = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "setup_frame.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 585, maxHeight: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Hiome Door on door frame" loading="auto" fadeIn={false} style={{maxWidth: `585px`}} />}
  />
)
export default SetupFrameImg
