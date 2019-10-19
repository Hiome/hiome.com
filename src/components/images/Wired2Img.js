import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Wired2Img = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "wired2.jpeg" }) {
          childImageSharp {
            fixed(width: 400, height: 273) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="Close up of Hiome Door on a door" loading="auto" fadeIn={false} />}
  />
)
export default Wired2Img
