import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SetupBracketImg = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "setup_bracket.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Hiome Door bracket" loading="auto" fadeIn={false} style={{maxWidth: `500px`}}/>}
  />
)
export default SetupBracketImg
