import PropTypes from 'prop-types'
import React from 'react'
import { Button } from 'antd'

import './styles.css'

const ProductBox = ({icon, title}) => (
  <div className="ProductBox">
    <div>{icon}</div>
    <p style={{padding: `0 10px`}}>{title}</p>
  </div>
)

ProductBox.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default ProductBox
