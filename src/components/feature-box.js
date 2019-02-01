import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

const FeatureBox = ({icon, title, link, children}) => (
  <div style={{
    display: `inline-block`,
    width: `33%`,
    minWidth: `220px`,
    height: `250px`,
    textAlign: `center`,
    padding: `10px 20px`,
    marginBottom: `20px`,
    verticalAlign: `top`,
  }}>
    <object data={icon} type="image/svg+xml" style={{
      display: `block`,
      margin: `10px auto`,
      width: `70px`,
      height: `70px`,
      top: 0
    }}>
      {title}
    </object>
    <strong>{title}</strong>
    <div>
      {children} <Link to={link}>Learn more</Link>
    </div>
  </div>
)

FeatureBox.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default FeatureBox
