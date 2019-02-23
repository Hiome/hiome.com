import PropTypes from 'prop-types'
import React from 'react'

import './styles.css'

const FeatureBox = ({icon, title, children}) => (
  <div className="FeatureBox">
    <object data={icon} type="image/svg+xml" className="FeatureBox-svg">
      {title}
    </object>
    <strong>{title}</strong>
    <div>
      {children}
    </div>
  </div>
)

FeatureBox.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default FeatureBox
