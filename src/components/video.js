import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import media from '../media/HiomeDemo.mp4'

const Video = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "poster.png" }) {
          childImageSharp {
            fixed(width: 1920) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <video controls width="100%" preload="auto" poster={data.placeholderImage.childImageSharp.fixed.src} style={{
        boxShadow: `2px 2px 15px #ccc`,
        marginBottom: `2rem`
      }}>
        <source
          src={media}
          type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    )}
  />
)

export default Video
