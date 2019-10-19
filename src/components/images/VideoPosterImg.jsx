import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const VideoPosterImg = ({onclick}) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "poster.jpg" }) {
          childImageSharp {
            fixed(width: 1920) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (<div id="posterWrapper" onClick={onclick}>
        <Img fixed={data.placeholderImage.childImageSharp.fixed} alt="Welcome Hiome" loading="eager" fadeIn={false} style={{
          width: `100%`,
          height: `auto`,
          paddingBottom: `56.25%`,
          boxShadow: `2px 2px 15px #ccc`,
          backgroundColor: `#ccc`
        }} />
        <svg fill="#000" style={{
          position: `absolute`,
          top: `40%`,
          left: `45%`,
          width: `10%`
        }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100"><g><g><path d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50S23.8,97.5,50,97.5c26.2,0,47.5-21.3,47.5-47.5S76.2,2.5,50,2.5z M65.3,52.4L42.9,67.3    c-1.9,1.3-4.5-0.1-4.5-2.4V35.1c0-2.3,2.6-3.7,4.5-2.4l22.4,14.9C67,48.7,67,51.3,65.3,52.4z"></path></g></g></svg>
      </div>)
    }
  />
)

VideoPosterImg.propTypes = {
  onclick: PropTypes.func.isRequired
}

export default VideoPosterImg
