import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

import './styles.css'

const ProductBox = ({icon, title, link, children}) => (
  <div className="ProductBox">
    <div><a href={link}>{icon}</a></div>
    <strong>{title}</strong>
    <div>
      {children} <Link to={link}>Learn more</Link>
    </div>
  </div>
)

ProductBox.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default ProductBox
