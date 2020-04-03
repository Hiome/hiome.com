import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SetupBatteryTemplateImg = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "setup_battery_template.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Hiome PowerPack template" loading="auto" fadeIn={false} style={{maxWidth: `400px`}} />}
  />
)
export default SetupBatteryTemplateImg
