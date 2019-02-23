import PropTypes from 'prop-types'
import React from 'react'

import './styles.css'

const ProductBox = ({icon, title}) => (
  <div className="ProductBox">
    <div>{icon}</div>
    <p>{title}</p>
  </div>
)

ProductBox.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default ProductBox
