import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Recessed1Img = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "recessed1.jpg" }) {
          childImageSharp {
            fixed(width: 345, height: 233) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="Recessed Hiome Door inside a door" loading="auto" fadeIn={false} />}
  />
)
export default Recessed1Img
