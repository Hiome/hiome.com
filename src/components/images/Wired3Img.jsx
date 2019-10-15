import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Wired3Img = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "wired3.jpeg" }) {
          childImageSharp {
            fixed(width: 400, height: 273) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="Hiome Door on a door" />}
  />
)
export default Wired3Img