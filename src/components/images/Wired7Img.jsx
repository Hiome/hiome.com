import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Wired7Img = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "wired7.png" }) {
          childImageSharp {
            fixed(width: 400, height: 233) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="Hiome Door schematic" loading="auto" fadeIn={false} />}
  />
)
export default Wired7Img
