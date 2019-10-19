import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Wired5Img = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "wired5.jpeg" }) {
          childImageSharp {
            fixed(width: 400, height: 273) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="Hiome Door on a door" loading="auto" fadeIn={false} />}
  />
)
export default Wired5Img
