import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import './styles.css'

const FeatureBox = ({icon, title, link, children}) => (
  <div className="FeatureBox">
    <object data={icon} type="image/svg+xml" className="FeatureBox-svg">
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
