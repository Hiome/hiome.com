import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Recessed2Img = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "recessed2.jpeg" }) {
          childImageSharp {
            fixed(width: 400, height: 233) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="Recessed Hiome Door next to a quarter" loading="auto" fadeIn={false} />}
  />
)
export default Recessed2Img
