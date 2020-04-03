import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SetupRecessedSensorImg = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "recessed3.png" }) {
          childImageSharp {
            fluid(maxHeight: 300, maxWidth: 450) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Hiome Door Recessed dimensions" loading="auto" fadeIn={false} style={{maxWidth: `450px`}} />}
  />
)
export default SetupRecessedSensorImg
